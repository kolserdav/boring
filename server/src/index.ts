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
app.use(middleware.getLang);
app.post('/api/v1/user/findfirst', api.user.findFirst.middleware, api.user.findFirst.handler);
app.post('/api/v1/user/login', api.user.findFirst.middleware, api.user.findFirst.handler);
app.post('/api/v1/user/create', api.user.create.middleware, api.user.create.handler);
app.post(
  '/api/v1/user/update',
  middleware.auth<'User'>({
    selfUsage: {
      field: 'id',
      model: 'User',
      andAdmin: true,
      closedSelf: ['email', 'password', 'role'],
      closedAdmin: ['email', 'password'],
    },
  }),
  api.user.update.middleware,
  api.user.update.handler
);
app.post('/api/v1/user/confirm', api.user.update.middleware, api.user.update.handler);
//// Временные апи пока нет страниц
app.get('/confirm', api.user.update.middleware, api.user.update.handler);

app.listen(3333);
