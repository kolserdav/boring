/******************************************************************************************
 * Repository: https://github.com/blindbeat/sweet
 * Author: Sergey Kolmiller
 * Email: <uyem.ru@gmail.com>
 * License: Proprietary and confidential
 * License Text: Unauthorized copying of this file, via any medium is strictly prohibited
 * Copyright: kolserdav (c), All rights reserved
 * Create date: Thu Oct 14 2021 11:26:44 GMT+0700 (Krasnoyarsk Standard Time)
 ******************************************************************************************/
/* eslint-disable no-case-declarations */

/**
 * Файл скриптов для помощи в разработке
 */

import fs from 'fs';
import path from 'path';

(async () => {
  /**
   * Переключатель по третьему параметру команды
   */
  switch (process.argv[2]) {
    /**
     * Копирует авто сгенерированные типы сущностей базы данных в src/types/generated/prisma.d.ts
     */
    case 'copy':
      const databaseTypesPath = path.resolve(
        __dirname,
        '../../node_modules/.prisma/client/index.d.ts'
      );
      const generateTypesPath = path.resolve(__dirname, '../../rest/prisma.d.ts');
      try {
        fs.copyFileSync(databaseTypesPath, generateTypesPath);
      } catch (e) {
        console.error(e);
        break;
      }
      console.info(`Types from ${databaseTypesPath} to ${generateTypesPath} copied successfully!`);
      break;
    default:
      console.info('Allowed only: "copy" parameters');
  }
})();
