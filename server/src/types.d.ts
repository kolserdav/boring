/******************************************************************************************
 * Repository: https://github.com/blindbeat/sweet
 * Author: Sergey Kolmiller
 * Email: <uyem.ru@gmail.com>
 * License: Proprietary and confidential
 * License Text: Unauthorized copying of this file, via any medium is strictly prohibited
 * Copyright: kolserdav (c), All rights reserved
 * Create date: Tue Oct 12 2021 09:27:02 GMT+0700 (Krasnoyarsk Standard Time)
 ******************************************************************************************/
/* eslint-disable no-unused-vars */
import type * as E from 'express';
import type { Locale } from './locales/types';
namespace Api {
  export type Status = 'error' | 'warning' | 'success';

  export interface Result<T> {
    status: Status;
    message: string;
    data: null | T;
    stdErrMessage?: string;
    code?: string;
    token?: string;
  }
}

export { Api, E, Locale };

interface ParamsDictionary {
  [key: string]: string;
}

export interface GlobalParams {
  lang: Locale;
}

export interface RequestHandler<Query, Body, Response> {
  (
    req: E.Request<ParamsDictionary, Api.Result<Response | null>, Body, Query>,
    res: E.Response<Api.Result<Response | null>>
  ): Promise<E.Response<Api.Result<Response | null>, Record<string, Response>>>;
}

export interface NextHandler<Query, Body, Response> {
  (
    req: E.Request<ParamsDictionary, Api.Result<null>, Body, Query>,
    res: E.Response<Api.Result<any>>,
    next: E.NextFunction
  ): Promise<E.Response<Api.Result<any>, Record<string, any>> | void>;
}

export interface JWT {
  id: number;
  password: string;
}
