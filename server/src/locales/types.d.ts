/******************************************************************************************
 * Repository: https://github.com/blindbeat/sweet
 * Author: Sergey Kolmiller
 * Email: <uyem.ru@gmail.com>
 * License: Proprietary and confidential
 * License Text: Unauthorized copying of this file, via any medium is strictly prohibited
 * Copyright: kolserdav (c), All rights reserved
 * Create date: Tue Oct 12 2021 16:26:32 GMT+0700 (Krasnoyarsk Standard Time)
 ******************************************************************************************/
export interface Locale {
  value: 'en' | 'ru' | 'uk';
  SERVER_ERROR: string;
  DATA_RECEIVED: string;
  NOT_FOUND: string;
  EMAIL_IS_REQUIRED: string;
  PASSWORD_IS_REQUIRED: string;
  PASSWORD_REPEAT_IS_REQUIRED: string;
  PASSWORDS_DO_NOT_MATCH: string;
  PASSWORD_IS_TOO_SHORT: string;
  EMAIL_IS_INVALID: string;
  BAD_REQUEST: string;
  EMAIL_WAS_REGISTERED_EARLIER: string;
  DATA_SEND: string;
  DATA_UPDATED: string;
  DATA_SAVED: string;
  SUCCESS_REGISTRATION: string;
  EMAIL_CANT_SEND: string;
  FORBIDDEN: string;
  UNAUTHORIZED: string;
  LINK_EXPIRED: string;
  EMAIL_CONFIRMED: string;
  USER_NOT_FOUND: string;
  INVALID_CREDENTIALS: string;
  SUCCESS_LOGIN: string;
  OLD_PASSWORD_IS_REQUIRED: string;
  PASSWORD_CHANGED: string;
}
