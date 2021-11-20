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
import type * as Types from '../../types';
import * as utils from '../../utils';

const prisma = new PrismaClient();

/**
 * получение нескольких категорий /api/v1/event/findmany
 */
interface Args extends Types.GlobalParams {
  args: Prisma.EventFindManyArgs;
}

const middleware: Types.NextHandler<any, Args, any> = async (req, res, next) => {
  const { body } = req;
  const { args, lang } = body;
  const newArgs = args !== undefined ? args : {};
  req.body.args = newArgs;
  next();
};

const handler: Types.RequestHandler<any, Args, Event[]> = async (req, res) => {
  const { body } = req;
  const { args, lang } = body;
  const { where, skip, take } = args;
  let count;
  try {
    count = await prisma.event.count({
      where,
    });
  } catch (e) {
    utils.saveLog(e, req, 'Error get count of events');
    return res.status(500).json({
      status: utils.ERROR,
      message: lang.SERVER_ERROR,
      stdErrMessage: utils.getStdErrMessage(e),
      data: [],
    });
  }
  let result;
  try {
    result = await prisma.event.findMany(args);
  } catch (err) {
    utils.saveLog(err, req, 'Error get events');
    return res.status(500).json({
      status: utils.ERROR,
      message: lang.SERVER_ERROR,
      data: [],
      stdErrMessage: utils.getStdErrMessage(err),
    });
  }
  if (result.length === 0) {
    return res.status(404).json({
      status: utils.WARNING,
      message: lang.NOT_FOUND,
      data: [],
    });
  }
  return res.status(200).json({
    status: utils.SUCCESS,
    message: lang.DATA_RECEIVED,
    data: result,
    count,
    skip: skip || null,
    take: take || null,
  });
};

export { middleware, handler };
