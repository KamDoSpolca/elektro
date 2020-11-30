
<?php
require_once('connection/connection.php');
if (!$conn1) {
  echo "nieeeeeeeeeeje1";
}
if (!$conn2) {
  echo "nieeeeeeeeeeje2";
}

?>
<html>

   <head>
      <title>Login Page</title>
   </head>
   <body>
      <div id="frm">
        <form action="process.php" method="POST">
        <p>
          <label>email:</label>
          <input type="text" id="email" name="email" />
        </p>
        <p>
          <label>Password:</label>
          <input type="password" id="pass" name="pass" />
        </p>
        <p>
          <input type="submit" id="pass" name="sub" />
        </p>
      </form>
      </div>
   </body>
</html>
