<?php
include ('connection.php');

if (!$conn1) {
  echo "nieeeeeeeeeeje2";
}

$sql = $conn1->prepare("SELECT name, adress, city, contact FROM store ");
$sql->execute(); //[$password]
$result = $sql->fetchAll();             //fetchColumn();
$x=0;
while ($x<sizeof($result)){
  echo $result[$x]['name'];
  echo "<br>";
  echo $result[$x]['adress'];
  echo "<br>";
  echo $result[$x]['city'];
  echo "<br>";
  echo $result[$x]['contact'];
  echo "<br>";
  echo "<br>";
  $x++;
}

?>
