/******************************************************************************************
 * Repository: https://github.com/blindbeat/sweet
 * Author: Sergey Kolmiller
 * Email: <uyem.ru@gmail.com>
 * License: Proprietary and confidential
 * License Text: Unauthorized copying of this file, via any medium is strictly prohibited
 * Copyright: kolserdav (c), All rights reserved
 * Create date: Thu Oct 14 2021 17:09:33 GMT+0700 (Krasnoyarsk Standard Time)
 ******************************************************************************************/
import { Prisma, PrismaClient, Category, Image } from '@prisma/client';
import path from 'path';
import fs from 'fs';
import type * as Types from '../../types';
import * as utils from '../../utils';

const prisma = new PrismaClient();

/**
 * изменение одной категории /api/v1/category/update
 */
interface Args extends Types.GlobalParams {
  args: Prisma.CategoryUpdateArgs;
}

const middleware: Types.NextHandler<any, Args, any> = async (req, res, next) => {
  next();
};

const handler: Types.RequestHandler<any, Args, Category | null> = async (req, res) => {
  const { body } = req;
  const { args: _args, user, lang } = body;
  const args = Object.assign({}, _args);
  args.data.adminId = user?.id || null;
  args.data.updated_at = new Date();
  let result;
  try {
    result = await prisma.category.update(args);
  } catch (err) {
    utils.saveLog(err, req, 'Error update category', { args: body.args });
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
