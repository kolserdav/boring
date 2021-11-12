/******************************************************************************************
 * Repository: https://github.com/blindbeat/sweet
 * Author: Sergey Kolmiller
 * Email: <uyem.ru@gmail.com>
 * License: Proprietary and confidential
 * License Text: Unauthorized copying of this file, via any medium is strictly prohibited
 * Copyright: kolserdav (c), All rights reserved
 * Create date: Tue Oct 12 2021 16:26:32 GMT+0700 (Krasnoyarsk Standard Time)
******************************************************************************************/
export default `<!doctype html>
<html>
  <head>
    <style type="text/css">
      h1 { 
        font-size: 120%; 
        font-family: Verdana, Arial, Helvetica, sans-serif; 
        color: orange;
      }
    </style>
  </head>
  <body>
    <h1>Здравствуйте {name}!</h1>
    <p>Нами получен запрос на изменение вашего пароля, если это были не вы, просто проигнорируйте это письмо. Иначе перейдите по ссылке  <a href="{link}">{link}</a>.</p>
  </body>
</html>`;
