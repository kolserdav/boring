/******************************************************************************************
 * Repository: https://github.com/blindbeat/sweet
 * Author: Sergey Kolmiller
 * Email: <uyem.ru@gmail.com>
 * License: Proprietary and confidential
 * License Text: Unauthorized copying of this file, via any medium is strictly prohibited
 * Copyright: kolserdav (c), All rights reserved
 * Create date: Thu Oct 14 2021 17:09:33 GMT+0700 (Krasnoyarsk Standard Time)
 ******************************************************************************************/
import { Prisma, PrismaClient, Event } from '@prisma/client';
import path from 'path';
import fs from 'fs';
import type * as Types from '../../types';
import * as utils from '../../utils';

const prisma = new PrismaClient();

/**
 * изменение одного события /api/v1/event/update
 */
interface Args extends Types.GlobalParams {
  args: Prisma.EventUpdateArgs;
}

const middleware: Types.NextHandler<any, Args, any> = async (req, res, next) => {
  const { body, url } = req;
  const { args, lang } = body;
  const { headers } = req;
  const { width, height } = headers;
  if (url.match(/\/api\/v1\/event\/imageupload/)) {
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
          new Error(`File object is not readable on event update ${JSON.stringify(_file)}`)
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
        utils.saveLog(e, req, 'Error delete wrong format file on event update', {
          imagePath,
          mimetype,
        });
      }
      return res.status(400).json({
        status: utils.WARNING,
        message: lang.BAD_REQUEST,
        stdErrMessage: utils.getStdErrMessage(
          new Error(`File type ${mimetype} is not acceptable on event update`)
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
    let image;
    try {
      image = await prisma.image.create({
        data: {
          fieldname,
          filename,
          origin: 'event',
          originalname,
          encoding,
          mimetype,
          destination,
          path: pathname,
          size,
          width: parseInt(width, 10),
          height: parseInt(height, 10),
        },
      });
    } catch (e) {
      utils.saveLog(e, req, 'Error save image to database while update event', { _file });
      return res.status(500).json({
        status: utils.WARNING,
        message: lang.SERVER_ERROR,
        stdErrMessage: utils.getStdErrMessage(e),
        data: null,
      });
    }
    return res.status(201).json({
      status: utils.SUCCESS,
      message: lang.IMAGE_SAVED,
      data: image,
    });
  }
  next();
};

const handler: Types.RequestHandler<any, Args, Event | null> = async (req, res) => {
  const { body } = req;
  const { args: _args, user, lang } = body;
  const args = Object.assign({}, _args);
  args.data.adminId = user?.id || null;
  args.data.updated_at = new Date();
  let result;
  try {
    result = await prisma.event.update(args);
  } catch (err) {
    utils.saveLog(err, req, 'Error update event');
    return res.status(500).json({
      status: utils.ERROR,
      message: lang.SERVER_ERROR,
      data: null,
      stdErrMessage: utils.getStdErrMessage(err),
    });
  }
  if (result === null) {
    return res.status(404).json({
      status: utils.WARNING,
      message: lang.NOT_FOUND,
      data: null,
    });
  }
  return res.status(201).json({
    status: utils.SUCCESS,
    message: lang.DATA_SAVED,
    data: result,
  });
};

export { middleware, handler };
