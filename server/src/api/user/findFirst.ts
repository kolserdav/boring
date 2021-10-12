/****************************************************************
 * Repository https://github.com/blindbeat/sweet
 * Author: Sergey Kolmiller
 * Email: <uyem.ru@gmail.com>
 * License: Proprietary and confidential
 * License Text: Unauthorized copying of this file, via any medium is strictly prohibited
 * Copyright: kolserdav (c), All rights reserved
 * Create date: Tue Oct 12 2021 09:18:45 GMT+0700 (Krasnoyarsk Standard Time)
****************************************************************/
import { User, Prisma, PrismaClient } from '@prisma/client';
import type * as Types from '../types';
import * as utils from '../../utils';

const prisma = new PrismaClient();

interface UserArgs {
  args: Prisma.UserFindFirstArgs;
}

const middleware: Types.NextHandler<any, UserArgs, any> = async (req, res, next) => {
  const { body } = req;
  const { args } = body;
  return next();
};

const handler: Types.RequestHandler<any, UserArgs, User | null> = async (req, res) => {
  const { body } = req;
  const { args } = body;
  let result;
  try {
    result = await prisma.user.findFirst(args);
  } catch (err) {
    utils.saveLog(err, req, 'Error get user', body);
    return res.status(500).json({
      status: utils.ERROR,
      message: 'ds',
      data: null,
      stdErrMessage: utils.getStdErrMessage(err),
    });
  }
  if (result === null) {
    return res.status(404).json({
      status: utils.WARNING,
      message: 'ds',
      data: null,
    });
  }
  return res.status(200).json({
    status: 'success',
    message: '',
    data: result,
  });
};

export { middleware, handler };
