
<?php
include ('connection.php');
$id1 = $_POST['idd'];
if (!$conn1) {
  echo "nieeeeeeeeeeje2";
}
foreach ($connection as $key => $value){
  $sql = $connection[$key]->prepare("DELETE FROM product where id = ? ");
  $sql->execute([$id1]);
}
 ?>
