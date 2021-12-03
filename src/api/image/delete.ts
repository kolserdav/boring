/******************************************************************************************
 * Repository: https://github.com/blindbeat/sweet
 * Author: Sergey Kolmiller
 * Email: <uyem.ru@gmail.com>
 * License: Proprietary and confidential
 * License Text: Unauthorized copying of this file, via any medium is strictly prohibited
 * Copyright: kolserdav (c), All rights reserved
 * Create date: Thu Oct 14 2021 17:09:33 GMT+0700 (Krasnoyarsk Standard Time)
 ******************************************************************************************/
import { Prisma, PrismaClient, Image } from '@prisma/client';
import path from 'path';
import fs from 'fs';
import type * as Types from '../../types';
import * as utils from '../../utils';

const prisma = new PrismaClient();

/**
 * удаление одного изображения /api/v1/image/delete
 * добавление и изменение изображения нет, так как мы их добавляем и меняем
 * через модель категории
 * а удаление вынесено в отдельный узео, так как мы не сможем
 * через категорию удалить изображение не удалив саму категорию
 */
interface Args extends Types.GlobalParams {
  args: Prisma.ImageDeleteArgs;
}

const middleware: Types.NextHandler<any, Args, any> = async (req, res, next) => {
  const { body } = req;
  const { args, lang } = body;
  next();
};

const handler: Types.RequestHandler<any, Args, Image | null> = async (req, res) => {
  const { body } = req;
  const { args, lang } = body;
  let result;
  try {
    result = await prisma.image.delete(args);
  } catch (err) {
    utils.saveLog(err, req, 'Error delete image');
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
  const { path: pathname, mimetype, destination, filename } = result;
  const imageFullPath = path.resolve(__dirname, '../../..', pathname);
  try {
    fs.unlinkSync(imageFullPath);

    fs.unlinkSync(
      path.resolve(__dirname, '../../..', destination, filename.replace('full', 'desktop'))
    );

    fs.unlinkSync(
      path.resolve(__dirname, '../../..', destination, filename.replace('full', 'tablet'))
    );

    fs.unlinkSync(
      path.resolve(__dirname, '../../..', destination, filename.replace('full', 'mobile'))
    );

    fs.unlinkSync(
      path.resolve(__dirname, '../../..', destination, filename.replace('full', 'small'))
    );

    fs.rmdirSync(path.resolve(__dirname, '../../..', destination));
  } catch (e) {
    utils.saveLog(e, req, 'Error delete image', { imageFullPath, mimetype });
  }
  return res.status(201).json({
    status: utils.SUCCESS,
    message: lang.DELETED,
    data: result,
  });
};

export { middleware, handler };
