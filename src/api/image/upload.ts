/******************************************************************************************
 * Repository: https://github.com/blindbeat/sweet
 * Author: Sergey Kolmiller
 * Email: <uyem.ru@gmail.com>
 * License: Proprietary and confidential
 * License Text: Unauthorized copying of this file, via any medium is strictly prohibited
 * Copyright: kolserdav (c), All rights reserved
 * Create date: Sat Dec 04 2021 00:17:05 GMT+0700 (Krasnoyarsk Standard Time)
 ******************************************************************************************/
import { Prisma, PrismaClient, Image } from '@prisma/client';
import path from 'path';
import fs from 'fs';
import type * as Types from '../../types';
import * as utils from '../../utils';

const prisma = new PrismaClient();

/**
 * сохранение изображения /api/v1/category/imageupload
 * и /api/v1/event/imageupload
 */
interface Args extends Types.GlobalParams {
  args: Prisma.ImageFindManyArgs;
}

const middleware: Types.NextHandler<any, Args, any> = async (req, res, next) => {
  const { body } = req;
  const { args, lang } = body;
  const newArgs = args !== undefined ? args : {};
  req.body.args = newArgs;
  next();
};

const handler: Types.RequestHandler<any, Args, Image> = async (req, res) => {
  const { body } = req;
  const { args, lang } = body;
  const { headers } = req;
  const { width, height } = headers;
  const { file }: any = req;
  let _file: Types.MulterFile = file ? file : {};
  const {
    fieldname,
    originalname,
    encoding,
    mimetype,
    destination,
    filename,
    path: pathname,
    size,
  } = _file;
  if (!_file.size || !_file) {
    return res.status(400).json({
      status: utils.WARNING,
      message: lang.BAD_REQUEST,
      stdErrMessage: utils.getStdErrMessage(
        new Error(`File object is not readable on category update ${JSON.stringify(_file)}`)
      ),
      data: null,
    });
  }
  // если передали не изображение, то удаляет и пишет лог в случае ошибки
  if (!mimetype?.match(/image/)) {
    const imagePath = path.resolve(__dirname, '../../..', pathname);
    try {
      fs.unlinkSync(imagePath);
    } catch (e) {
      utils.saveLog(e, req, 'Error delete wrong format file on category update', {
        imagePath,
        mimetype,
      });
    }
    return res.status(400).json({
      status: utils.WARNING,
      message: lang.BAD_REQUEST,
      stdErrMessage: utils.getStdErrMessage(
        new Error(`File type ${mimetype} is not acceptable on category update`)
      ),
      data: null,
    });
  }
  if (!width || !height || typeof width !== 'string' || typeof height !== 'string') {
    return res.status(400).json({
      status: utils.WARNING,
      message: lang.BAD_REQUEST,
      stdErrMessage: utils.getStdErrMessage(new Error('Headers width and height is required')),
      data: null,
    });
  }
  let image: Image;
  try {
    image = await prisma.image.create({
      data: {
        fieldname,
        filename,
        origin: 'category',
        originalname,
        encoding,
        mimetype,
        destination,
        path: pathname,
        width: parseInt(width, 10),
        height: parseInt(height, 10),
        size,
      },
    });
  } catch (e) {
    utils.saveLog(e, req, 'Error save image to database while update category', { _file });
    return res.status(500).json({
      status: utils.WARNING,
      message: lang.SERVER_ERROR,
      stdErrMessage: utils.getStdErrMessage(e),
      data: null,
    });
  }
  if (await utils.createImagePreviews(req, image)) {
    return res.status(500).json({
      status: utils.ERROR,
      message: 'Ошибка создания превю картинок загруженного файла',
      data: image,
    });
  }
  return res.status(201).json({
    status: utils.SUCCESS,
    message: lang.IMAGE_SAVED,
    data: image,
  });
};

export { middleware, handler };
