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
 * Изменить одного пользователя /api/v1/user/update
 * Подтвердить почту /api/v1/user/confirm
 * @param {{args: Prisma.UserUpdateArgs}}
 * @returns {User | null}
 */

const prisma = new PrismaClient();

interface UserArgs extends Types.GlobalParams {
  args: Prisma.UserUpdateArgs;
  confirm?: {
    email: string;
    key: string;
  };
}

const middleware: Types.NextHandler<any, UserArgs, any> = async (req, res, next) => {
  const { body, url, method, query } = req;
  const { e, k } = query;
  const { args, lang, confirm } = body;
  let _email, _key, _confirm;
  const newArgs = Object.assign({}, args);
  // проверяет идет ли подтверждение почты
  if (url.match(/^\/confirm/) && method.toUpperCase() === 'GET') {
    _email = e;
    _key = k;
    _confirm = true;
  } else if (url.match(/^\/api\/v1\/user\/confirm/)) {
    if (confirm === undefined) {
      return res.status(400).json({
        status: utils.WARNING,
        message: lang.BAD_REQUEST,
        stdErrMessage: utils.getStdErrMessage(
          new Error('Missing parameter confirm { email, key }')
        ),
        data: null,
      });
    }
    const { email, key } = confirm;
    _email = email;
    _key = key;
    _confirm = true;
  }
  // Если идет подтверждение почты
  if (_confirm) {
    // если подтверждение почты то остальные изменения отклоняет
    newArgs.data = {};
    if (!_email || !_key) {
      return res.status(400).json({
        status: utils.WARNING,
        message: lang.BAD_REQUEST,
        stdErrMessage: utils.getStdErrMessage(
          new Error(`Missing argument - e: ${_email}, k: ${_key}`)
        ),
        data: null,
      });
    }
    let user;
    try {
      user = await prisma.user.findFirst({
        where: {
          email: _email,
        },
      });
    } catch (e) {
      utils.saveLog(e, req, 'Error get user by email while confirm', { _email, _key });
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
        stdErrMessage: utils.getStdErrMessage(new Error('User not found')),
        data: null,
      });
    }
    if (user.confirmed) {
      return res.status(200).json({
        status: utils.SUCCESS,
        message: lang.EMAIL_CONFIRMED,
        stdErrMessage: utils.getStdErrMessage(new Error('Email was confirmed earlier')),
        data: user,
      });
    }
    if (user.confirmKey !== _key) {
      return res.status(403).json({
        status: utils.WARNING,
        message: lang.FORBIDDEN,
        stdErrMessage: utils.getStdErrMessage(new Error('Confirm key is not accepted')),
        data: null,
      });
    }
    try {
      user = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          confirmed: true,
        },
      });
    } catch (e) {
      utils.saveLog(e, req, 'Error update user confirm', { user });
      return res.status(500).json({
        status: utils.ERROR,
        message: lang.SERVER_ERROR,
        stdErrMessage: utils.getStdErrMessage(e),
        data: null,
      });
    }
    return res.status(201).json({
      status: utils.SUCCESS,
      message: lang.EMAIL_CONFIRMED,
      data: user,
    });
  }
  req.body.args = newArgs;
  next();
};

const handler: Types.RequestHandler<any, UserArgs, User | null> = async (req, res) => {
  const { body } = req;
  const { args, lang } = body;
  let result;
  try {
    result = await prisma.user.update(args);
  } catch (err) {
    utils.saveLog(err, req, 'Error update user', { body: body.args });
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
    message: lang.DATA_UPDATED,
    data: result,
  });
};

export { middleware, handler };
