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
  value: 'uk',
  SERVER_ERROR: 'Помилка сервера',
  DATA_RECEIVED: 'Дані отримані',
  NOT_FOUND: 'Не знайдено',
  EMAIL_IS_REQUIRED: 'Потрібна електронна пошта',
  PASSWORD_IS_REQUIRED: 'Потрібен пароль',
  PASSWORD_REPEAT_IS_REQUIRED: 'Потрібно повторити пароль',
  PASSWORDS_DO_NOT_MATCH: 'Паролі не збігаються',
  PASSWORD_IS_TOO_SHORT: `Мінімальна довжина пароля становить ${MINIMAL_PASSWORD_LENGTH} символів`,
  EMAIL_IS_INVALID: 'Електронна пошта недійсна',
  BAD_REQUEST: 'Неправильний запит',
  EMAIL_WAS_REGISTERED_EARLIER: 'Ця електронна адреса була зареєстрована раніше',
  DATA_SEND: 'Дані надіслані успішно',
  DATA_UPDATED: 'Дані успішно оновлені',
  DATA_SAVED: 'Дані успішно збережені',
  SUCCESS_REGISTRATION: 'Успішна реєстрація',
  EMAIL_CANT_SEND: 'Не вдалося надіслати електронний лист',
  FORBIDDEN: 'Заборонено',
  UNAUTHORIZED: 'Несанкціонований запит',
  LINK_EXPIRED: 'Термін дії посилання минув',
  EMAIL_CONFIRMED: 'Електронна пошта успішно підтверджена',
  USER_NOT_FOUND: 'Користувач не знайдено',
  INVALID_CREDENTIALS: 'Недійсні облікові дані',
  SUCCESS_LOGIN: 'Успішний вхід',
  OLD_PASSWORD_IS_REQUIRED: 'Потрібен старий пароль',
  PASSWORD_CHANGED: 'Пароль успішно змінено',
  EMAIL_IS_SEND: 'На вашу адресу електронної пошти було надіслано активне посилання',
  FORGOT_RECEIVED: 'Отриманий ключ для зміни пароля',
  DELETED: 'Успішно видалено',
  CATEGORY_TITLE_EXISTS: 'Категорія з такою самою назвою існує',
  IMAGE_SAVED: 'Зображення збережено',
};
