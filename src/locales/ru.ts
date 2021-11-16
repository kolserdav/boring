/******************************************************************************************
 * Repository: https://github.com/blindbeat/sweet
 * Author: Sergey Kolmiller
 * Email: <uyem.ru@gmail.com>
 * License: Proprietary and confidential
 * License Text: Unauthorized copying of this file, via any medium is strictly prohibited
 * Copyright: kolserdav (c), All rights reserved
 * Create date: Tue Oct 12 2021 16:26:32 GMT+0700 (Krasnoyarsk Standard Time)
 ******************************************************************************************/
import type { Locale } from './types';
import { MINIMAL_PASSWORD_LENGTH } from '../utils';
export const locale: Locale = {
  value: 'ru',
  SERVER_ERROR: 'Ошибка сервера',
  DATA_RECEIVED: 'Данные получены',
  NOT_FOUND: 'Не найдено',
  EMAIL_IS_REQUIRED: 'Требуется электронная почта',
  PASSWORD_IS_REQUIRED: 'Требуется пароль',
  PASSWORD_REPEAT_IS_REQUIRED: 'Требуется повторение пароля',
  PASSWORDS_DO_NOT_MATCH: 'Пароли не совпадают',
  PASSWORD_IS_TOO_SHORT: `Минимальная длина пароля составляет ${MINIMAL_PASSWORD_LENGTH} символов`,
  EMAIL_IS_INVALID: 'Электронная почта недействительна',
  BAD_REQUEST: 'Неверный запрос',
  EMAIL_WAS_REGISTERED_EARLIER: 'Этот адрес электронной почты был зарегистрирован ранее',
  DATA_SEND: 'Данные отправлены успешно',
  DATA_UPDATED: 'Данные успешно обновлены',
  DATA_SAVED: 'Данные успешно сохранены',
  SUCCESS_REGISTRATION: 'Успешная регистрация',
  EMAIL_CANT_SEND: 'Не получилось отправить электронное письмо',
  FORBIDDEN: 'Запрещено',
  UNAUTHORIZED: 'Несанкционированный запрос',
  LINK_EXPIRED: 'Срок действия ссылки истек',
  EMAIL_CONFIRMED: 'Электронная почта успешно подтверждена',
  USER_NOT_FOUND: 'Пользователь не найден',
  INVALID_CREDENTIALS: 'Недействительные учетные данные',
  SUCCESS_LOGIN: 'Успешный вход',
  OLD_PASSWORD_IS_REQUIRED: 'Требуется старый пароль',
  PASSWORD_CHANGED: 'Пароль успешно изменен',
  EMAIL_IS_SEND: 'На ваш адрес электронной почты была отправлена ​​активная ссылка',
  FORGOT_RECEIVED: 'Получен ключ для смены пароля',
  DELETED: 'Успешно удалено',
  CATEGORY_TITLE_EXISTS: 'Категория с таким же названием существует',
  IMAGE_SAVED: 'Изображение сохранено',
};
