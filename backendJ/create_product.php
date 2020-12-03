<?php
  include ('connection.php');
  $name = $_POST['nazov'];
  $descr = $_POST['popis'];
  $price = $_POST['cena'];
  $count = $_POST['pocet'];


  $name = stripcslashes($name);
  $descr = stripcslashes($descr);
  $price = stripcslashes($price);
  $count = stripcslashes($count);

  if (!$conn1) {
    echo "Not connection";
  }

  $store_id =  $_SESSION['store_id'];
  $sql = "INSERT INTO product (name, description, price, count, store_id) VALUES ('$name','$descr','$price','$count',$store_id)";
  foreach ($connection as $key => $value){
    if ($connection[$key]->query($sql) == TRUE) {
      echo "New record created successfully";
    } else {
      echo "chyba";
    }
  }
?>
