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
 * Объявление методов для типизации запросов
 * название метода соответствуют урл запроса /api/v1/user/findfirst=userFindFirst
 * примеры запросов в rest/remote Расширение vscode - humao.rest-client (
 * для активации Ctrl+Shift+P > начать воодить rest > выбрать Rest:SendRequest > настроить
 * там же горячие клавиши
 * )
 */
// Для переноса этого файла себе на фронтенд не забываем генерированный файл типов призмы
import { Prisma as P, User, PrismaPromise } from './prisma';
import Types from '../types';

/**
 * Получить одного пользователя
 * @param {P.UserFindFirstArgs} args
 */
export async function userFindFirst<T extends P.UserFindFirstArgs>(
  args: P.SelectSubset<T, P.UserFindFirstArgs>
): Promise<
  P.CheckSelect<
    T,
    Types.Api.Result<User | null>,
    PrismaPromise<Types.Api.Result<P.UserGetPayload<T>>>
  >
>;

/**
 * Получить несколько пользователей
 * @param {P.UserFindManyArgs} args
 */
export async function userFindMany<T extends P.UserFindManyArgs>(
  args: P.SelectSubset<T, P.UserFindManyArgs>
): Promise<
  P.CheckSelect<
    T,
    Types.Api.Result<User | null>,
    PrismaPromise<Types.Api.Result<P.UserGetPayload<T>>>
  >
>;

/**
 * Создать одного пользователя
 * @param {P.UserCreateArgs} args
 */
export async function userCreate<T extends P.UserCreateArgs>(
  args: P.SelectSubset<T, P.UserCreateArgs>
): Promise<
  P.CheckSelect<
    T,
    Types.Api.Result<User | null>,
    PrismaPromise<Types.Api.Result<P.UserGetPayload<T>>>
  >
>;

/**
 * Изменить данные одного пользователя
 * @param {P.UserUpdateArgs} args
 */
export async function userUpdate<T extends P.UserUpdateArgs>(
  args: P.SelectSubset<T, P.UserUpdateArgs>
): Promise<
  P.CheckSelect<
    T,
    Types.Api.Result<User | null>,
    PrismaPromise<Types.Api.Result<P.UserGetPayload<T>>>
  >
>;

/**
 * Удалить одного пользователя
 * @param {P.UserDeleteArgs} args
 */
export async function userUpdate<T extends P.UserDeleteArgs>(
  args: P.SelectSubset<T, P.UserDeleteArgs>
): Promise<
  P.CheckSelect<
    T,
    Types.Api.Result<User | null>,
    PrismaPromise<Types.Api.Result<P.UserGetPayload<T>>>
  >
>;

// ПЕСОЧНИЦА. Внимание! эта функция не вызывается так как у методов нет реализации
// используется только для получения помощи от IDE в подборе запроса по типам
async () => {
  userFindFirst({
    where: {
      id: 11,
    },
  });
};
