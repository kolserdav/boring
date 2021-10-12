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
