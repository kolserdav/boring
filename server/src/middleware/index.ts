/******************************************************************************************
 * Repository: https://github.com/blindbeat/sweet
 * Author: Sergey Kolmiller
 * Email: <uyem.ru@gmail.com>
 * License: Proprietary and confidential
 * License Text: Unauthorized copying of this file, via any medium is strictly prohibited
 * Copyright: kolserdav (c), All rights reserved
 * Create date: Tue Oct 12 2021 09:27:02 GMT+0700 (Krasnoyarsk Standard Time)
******************************************************************************************/
import type * as Types from '../api/types';
import * as locales from '../locales';

let langObjects: {
  [lang: string]: any;
};
langObjects = Object.assign({}, locales);
export function getLang(lang: string): any {
  if (langObjects[lang]) {
    return langObjects[lang];
  } else {
    return langObjects.en;
  }
}
