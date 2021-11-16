/******************************************************************************************
 * Repository: https://github.com/blindbeat/sweet
 * Author: Sergey Kolmiller
 * Email: <uyem.ru@gmail.com>
 * License: Proprietary and confidential
 * License Text: Unauthorized copying of this file, via any medium is strictly prohibited
 * Copyright: kolserdav (c), All rights reserved
 * Create date: Tue Oct 12 2021 16:26:32 GMT+0700 (Krasnoyarsk Standard Time)
 ******************************************************************************************/
/**
 * Индекный файл сервера
 */
import express from 'express';
import cors from 'cors';
import * as api from './api';
import * as middleware from './middleware';
import * as utils from './utils';
import multer from 'multer';

const app = express();
// Хранилище
const storageCategory = multer.diskStorage({
  destination: (req, file, cb) => {
    const { url } = req;
    let dirName = 'unknown';
    if (url.match(/\/api\/v1\/event\/imageupload/)) {
      dirName = 'event';
    } else if (url.match(/\/api\/v1\/category\/imageupload/)) {
      dirName = 'category';
    }
    cb(null, `uploads/${dirName}`);
  },
  filename: (req, file, cb) => {
    let imageType: RegExpMatchArray | string | null = file.originalname.match(/\.\w{3,4}$/);
    imageType = imageType ? imageType[0] : '';
    cb(null, utils.getHash(24) + imageType);
  },
});
const uploadCategory = multer({ storage: storageCategory });

// Отлавливаем неожиданные исключения
process.on('uncaughtException', (err: Error, origin: any) => {
  utils.saveLog(err, utils.getEmptyRequest('uE'), 'uncaughtException', { origin });
});
process.on('unhandledRejection', (reason: Error, promise) => {
  utils.saveLog(reason, utils.getEmptyRequest('uR'), 'unhandledRejection', {});
});

// Глобальные посредники
app.use(cors());
app.use(express.json({ limit: '5mb' }));
app.use(middleware.getLang);
app.use('/uploads', express.static(__dirname + './uploads'));

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
// создать категорию
app.post(
  '/api/v1/category/create',
  middleware.auth({
    onlyAdmin: true,
  }),
  api.category.create.middleware,
  api.category.create.handler
);
// изменить категорию
app.post(
  '/api/v1/category/update',
  middleware.auth({
    onlyAdmin: true,
  }),
  api.category.update.middleware,
  api.category.update.handler
);
// получить одну категорию
app.post(
  '/api/v1/category/findfirst',
  api.category.findFirst.middleware,
  api.category.findFirst.handler
);
// получить несколько категорий
app.post(
  '/api/v1/category/findmany',
  api.category.findMany.middleware,
  api.category.findMany.handler
);
// удалить одну категорию
app.post(
  '/api/v1/category/delete',
  middleware.auth({
    onlyAdmin: true,
  }),
  api.category.delete.middleware,
  api.category.delete.handler
);
// добавить изображение категории
app.post(
  '/api/v1/category/imageupload',
  middleware.auth({
    onlyAdmin: true,
  }),
  uploadCategory.single('image'),
  middleware.getLang,
  api.category.update.middleware,
  api.category.update.handler
);

//// API событий
// создать событие
app.post(
  '/api/v1/event/create',
  middleware.auth({
    onlyAdmin: true,
  }),
  api.event.create.middleware,
  api.event.create.handler
);
// изменить событие
app.post(
  '/api/v1/event/update',
  middleware.auth({
    onlyAdmin: true,
  }),
  api.event.update.middleware,
  api.event.update.handler
);
// получить одно событие
app.post('/api/v1/event/findfirst', api.event.findFirst.middleware, api.event.findFirst.handler);
// получить несколько событий
app.post('/api/v1/event/findmany', api.event.findMany.middleware, api.event.findMany.handler);
// удалить одно событие
app.post(
  '/api/v1/event/delete',
  middleware.auth({
    onlyAdmin: true,
  }),
  api.event.delete.middleware,
  api.event.delete.handler
);
// добавить изображение события
app.post(
  '/api/v1/event/imageupload',
  middleware.auth({
    onlyAdmin: true,
  }),
  uploadCategory.single('image'),
  middleware.getLang,
  api.event.update.middleware,
  api.event.update.handler
);

//// API изображений
// Удаление изображений, добавление получение и изменение через категорию или событие
app.post(
  '/api/v1/image/delete',
  middleware.auth({
    onlyAdmin: true,
  }),
  api.image.delete.middleware,
  api.image.delete.handler
);

//// Временные апи пока нет страниц
// страница при переходе по ссылке подтверждения почты
app.get('/confirm', api.user.update.middleware, api.user.update.handler);
// страницы при переходе по ссылке получения ключа для смены пароля
app.get('/forgot', api.user.update.middleware, api.user.update.handler);

const port = process.env.PORT || 3333;
app.listen(port, () => {
  utils.saveLog({}, utils.getEmptyRequest('/start'), `Listen on port ${port}`, {});
});
