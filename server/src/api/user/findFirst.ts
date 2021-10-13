/******************************************************************************************
 * Repository: https://github.com/blindbeat/sweet
 * Author: Sergey Kolmiller
 * Email: <uyem.ru@gmail.com>
 * License: Proprietary and confidential
 * License Text: Unauthorized copying of this file, via any medium is strictly prohibited
 * Copyright: kolserdav (c), All rights reserved
 * Create date: Tue Oct 12 2021 16:26:32 GMT+0700 (Krasnoyarsk Standard Time)
 ******************************************************************************************/
import { User, Prisma, PrismaClient } from '@prisma/client';
import type * as Types from '../../types';
import * as utils from '../../utils';

/**
 * Получить одного пользователя /api/v1/user/findfirst
 * Залогиниться /api/v1/user/login
 * @param {{args: Prisma.UserFindFirstArgs}}
 * @returns {User | null}
 */

const prisma = new PrismaClient();

interface UserArgs extends Types.GlobalParams {
  args: Prisma.UserFindFirstArgs;
  login?: {
    email: string;
    password: string;
  };
}

const middleware: Types.NextHandler<any, UserArgs, any> = async (req, res, next) => {
  const { body, url } = req;
  const { args, lang, login } = body;
  // если идет аутентификация по логину и паролю
  if (url.match(/\/api\/v1\/user\/login/)) {
    if (login === undefined) {
      return res.status(400).json({
        status: utils.WARNING,
        message: lang.BAD_REQUEST,
        stdErrMessage: utils.getStdErrMessage(
          new Error('Missing parameter login { email, password }')
        ),
        data: null,
      });
    }
    const { email, password } = login;
    if (!email) {
      return res.status(400).json({
        status: utils.WARNING,
        message: lang.EMAIL_IS_REQUIRED,
        stdErrMessage: utils.getStdErrMessage(new Error(`Received email is ${email}`)),
        code: utils.CODES.email,
        data: null,
      });
    }
    if (!password) {
      return res.status(400).json({
        status: utils.WARNING,
        message: lang.PASSWORD_IS_REQUIRED,
        stdErrMessage: utils.getStdErrMessage(new Error(`Received password is ${email}`)),
        code: utils.CODES.password,
        data: null,
      });
    }
    let user;
    try {
      user = await prisma.user.findFirst({
        where: {
          email,
        },
      });
    } catch (e) {
      utils.saveLog(e, req, 'Error get user by email while logining', { email });
      return res.status(500).json({
        status: utils.ERROR,
        message: lang.SERVER_ERROR,
        stdErrMessage: utils.getStdErrMessage(e),
        data: null,
      });
    }
    if (user === null) {
      return res.status(404).json({
        status: utils.WARNING,
        message: lang.USER_NOT_FOUND,
        code: utils.CODES.email,
        data: null,
      });
    }
    const compareRes = await utils.comparePasswords(password, user.password, req);
    if (compareRes.data === null) {
      return res.status(500).json({
        status: utils.ERROR,
        message: lang.SERVER_ERROR,
        stdErrMessage: compareRes.stdErrMessage,
        data: null,
      });
    }
    if (compareRes.data === false) {
      return res.status(403).json({
        status: utils.WARNING,
        message: lang.INVALID_CREDENTIALS,
        stdErrMessage: utils.getStdErrMessage(
          new Error('Received password do not match with saved user password')
        ),
        data: null,
      });
    }
    // Создание токена
    const token = utils.createToken(
      {
        id: user.id,
        password: user.password,
      },
      req
    );
    if (typeof token !== 'string') {
      return res.status(500).json({
        status: utils.ERROR,
        message: lang.SERVER_ERROR,
        stdErrMessage: utils.getStdErrMessage(token),
        data: null,
      });
    }
    return res.status(200).json({
      status: utils.SUCCESS,
      message: lang.SUCCESS_LOGIN,
      data: user,
      token,
    });
  }
  next();
};

const handler: Types.RequestHandler<any, UserArgs, User | null> = async (req, res) => {
  const { body } = req;
  const { args, lang } = body;
  let result;
  try {
    result = await prisma.user.findFirst(args);
  } catch (err) {
    utils.saveLog(err, req, 'Error get user', body);
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
  return res.status(200).json({
    status: utils.SUCCESS,
    message: lang.DATA_RECEIVED,
    data: result,
  });
};

export { middleware, handler };
