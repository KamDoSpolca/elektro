<?php
  include ('connection.php');
  $role = $_POST['role'];
  $name = $_POST['name'];
  $password1 = $_POST['pass1'];
  $password2 = $_POST['pass2'];
  $email = $_POST['email'];
  $store_id = $_POST['store_id'];

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {header("Location: http://localhost/elektro1/backendJ/registration.html");}
  $role = validateData($role);
  $name = validateData($name);
  $password1 = validateData($password1);
  $password2 = validateData($password2);
  $email = validateData($email);
  $store_id = validateData($store_id);

  if (!$conn1) {
    echo "not connection";
  }

  $store_id = $_SESSION['store_id'];
  $sql = "INSERT INTO user (role, name, email, password,store_id) VALUES ('$role','$name','$email','$password1','$store_id')";
  $ccount = 1;
  foreach ($connection as $key => $value){
    if($conn1==null and $ccount==1){createTempSQL(strval($ccount),$sql.';');}
    if($conn2==null and $ccount==2){createTempSQL(strval($ccount),$sql.';');}
    if($conn3==null and $ccount==3){createTempSQL(strval($ccount),$sql.';');}
    else{
      if ($connection[$key]->query($sql) == TRUE) {
        echo "New record created successfully";
      } else {
        echo "         je to zle";
      }
    }

    $ccount++;
  }

?>
