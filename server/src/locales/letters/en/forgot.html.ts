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
    <h1>Hello {name}!</h1>
    <p>A link was requested to change your password, if you did not do it, then just ignore this letter. If you did it then follow the link  <a href="{link}">{link}</a>.</p>
  </body>
</html>`;
