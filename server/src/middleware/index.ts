/******************************************************************************************
 * Repository: https://github.com/blindbeat/sweet
 * Author: Sergey Kolmiller
 * Email: <uyem.ru@gmail.com>
 * License: Proprietary and confidential
 * License Text: Unauthorized copying of this file, via any medium is strictly prohibited
 * Copyright: kolserdav (c), All rights reserved
 * Create date: Tue Oct 12 2021 09:27:02 GMT+0700 (Krasnoyarsk Standard Time)
 ******************************************************************************************/
import type * as Types from '../types';
import * as locales from '../locales';
import { Locale } from '../locales/types';

let langObjects: {
  [lang: string]: {
    locale: Locale;
  };
};
langObjects = Object.assign({}, locales);
export function getLang(
  req: Types.E.Request,
  res: Types.E.Response,
  next: Types.E.NextFunction
): any {
  let { lang }: any = req.headers;
  const _lang = lang || 'en';
  let language;
  if (langObjects[_lang]) {
    language = langObjects[_lang];
  } else {
    language = langObjects.en;
  }
  req.body.lang = language.locale;
  next();
}
