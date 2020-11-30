<?php
include ('connection.php');
$id1 = $_POST['idd'];
$count = $_POST['count'];
if (!$conn1) {
  echo "Not connection";
}

foreach ($connection as $key => $value){
  $sql = $connection[$key]->prepare("UPDATE product SET count=count-? where id = ? ");
  $sql->execute([$count,$id1]);
}

 ?>
