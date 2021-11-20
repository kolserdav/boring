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
 * удаление одного события /api/v1/event/delete
 * @param {{args: Prisma.EventDeleteArgs}}
 * @returns {Category | null}
 */
interface Args extends Types.GlobalParams {
  args: Prisma.EventDeleteArgs;
}

const middleware: Types.NextHandler<any, Args, any> = async (req, res, next) => {
  const { body } = req;
  const { args, lang } = body;
  next();
};

const handler: Types.RequestHandler<any, Args, Event | null> = async (req, res) => {
  const { body } = req;
  const { args, lang } = body;
  let result;
  try {
    result = await prisma.event.delete(args);
  } catch (err) {
    utils.saveLog(err, req, 'Error delete event', args);
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
    message: lang.DELETED,
    data: result,
  });
};

export { middleware, handler };
