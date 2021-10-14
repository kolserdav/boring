/******************************************************************************************
 * Repository: https://github.com/blindbeat/sweet
 * Author: Sergey Kolmiller
 * Email: <uyem.ru@gmail.com>
 * License: Proprietary and confidential
 * License Text: Unauthorized copying of this file, via any medium is strictly prohibited
 * Copyright: kolserdav (c), All rights reserved
 * Create date: Tue Oct 12 2021 16:26:32 GMT+0700 (Krasnoyarsk Standard Time)
 ******************************************************************************************/
import express from 'express';
import cors from 'cors';
import * as api from './api';
import * as middleware from './middleware';

const app = express();

app.use(cors({ origin: '*' }));

app.use(express.json({ limit: '5mb' }));
// Глобальный языковой посредник
app.use(middleware.getLang);
////// апи запросы с посредниками
//// API пользователя
// получить одного пользователя
app.post('/api/v1/user/findfirst', api.user.findFirst.middleware, api.user.findFirst.handler);
// войти по почте и паролю
app.post('/api/v1/user/login', api.user.findFirst.middleware, api.user.findFirst.handler);
// регистрация
app.post('/api/v1/user/create', api.user.create.middleware, api.user.create.handler);
// изменение пользователя
app.post(
  '/api/v1/user/update',
  middleware.auth<'User'>({
    selfUsage: {
      field: 'id',
      model: 'User',
      andAdmin: true,
      closedSelf: ['role'],
      closedAdmin: [],
    },
  }),
  api.user.update.middleware,
  api.user.update.handler
);
// подтверждение почты по ключу
app.post('/api/v1/user/confirm', api.user.update.middleware, api.user.update.handler);
// смена пароля авторизщованным пользователем
app.post(
  '/api/v1/user/changepass',
  middleware.auth<'User'>({
    selfUsage: {
      field: 'id',
      model: 'User',
      andAdmin: false,
    },
  }),
  api.user.update.middleware,
  api.user.update.handler
);
// запрос письма на подтверждение почты
app.post(
  '/api/v1/user/sendconfirm',
  middleware.auth<'User'>({
    selfUsage: {
      field: 'id',
      model: 'User',
      andAdmin: false,
    },
  }),
  api.user.findFirst.middleware,
  api.user.findFirst.handler
);
// запрос письма на смену пароля
app.post(
  '/api/v1/user/sendforgot',
  middleware.auth<'User'>({
    selfUsage: {
      field: 'id',
      model: 'User',
      andAdmin: false,
    },
  }),
  api.user.findFirst.middleware,
  api.user.findFirst.handler
);
// удаление пользователя
app.post(
  '/api/v1/user/delete',
  middleware.auth<'User'>({
    selfUsage: {
      field: 'id',
      model: 'User',
      andAdmin: true,
    },
  }),
  api.user.delete.middleware,
  api.user.delete.handler
);
// изменение пароля по ключу
app.post('/api/v1/user/changepassbykey', api.user.update.middleware, api.user.update.handler);
// получение пользователей
app.post(
  '/api/v1/user/findmany',
  middleware.auth({
    onlyAdmin: true,
  }),
  api.user.findMany.middleware,
  api.user.findMany.handler
);
//// API категорий
app.post('/api/v1/category/create', api.category.create.middleware, api.category.create.handler);
app.post('/api/v1/category/update', api.category.update.middleware, api.category.update.handler);
app.post(
  '/api/v1/category/findfirst',
  api.category.findFirst.middleware,
  api.category.findFirst.handler
);
app.post(
  '/api/v1/category/findmany',
  api.category.findMany.middleware,
  api.category.findMany.handler
);
app.post(
  '/api/v1/category/findMany',
  api.category.findMany.middleware,
  api.category.findMany.handler
);
//// Временные апи пока нет страниц
// страница при переходе по ссылке подтверждения почты
app.get('/confirm', api.user.update.middleware, api.user.update.handler);
// страницы при переходе по ссылке получения ключа для смены пароля
app.get('/forgot', api.user.update.middleware, api.user.update.handler);

app.listen(3333);
