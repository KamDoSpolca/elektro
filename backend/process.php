<?php
  include ('connection.php');
  $email = $_POST['email'];
  $password = $_POST['pass'];

  $email = stripcslashes($email);
  $password = stripcslashes($password);

  if (!$conn1) {
    echo "Not connection";
  }

  $sql = $conn1->prepare("SELECT email, password,store_id FROM user WHERE email=? and password = ? ");
  $sql->execute([$email, $password]);
  $result = $sql->fetchAll();

  if(sizeof($result)>0){
    if($result[0]['email'] == $email && $result[0]['password'] == $password){
      echo "Login success!!!";
      $_SESSION['store_id'] = $result[0]['store_id'];
    }
  }
    else{
      header("Location: http://localhost/app/index.php");
      echo "Failed to login";

  }
?>
<html>

   <head>
      <title>reg Page</title>
   </head>
   <body>
      <div id="frm">
        <form action="registration.html" method="POST">
        <p>
          <input type="submit" value="registracia" id="pass" name="sub" />
        </p>
      </form>
      </div>

      <div id="frm2">
        <form action="products.php" method="POST">
        <p>
          <input type="submit"  value="produkty" id="pass2" name="sub2" />
        </p>
      </form>
      </div>
   </body>
</html>
