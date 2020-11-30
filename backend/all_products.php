<?php
include ('connection.php');
//echo $_SESSION['store_id'];
if (!$conn1) {
  echo "nieeeeeeeeeeje2";
}

$sql = $conn1->prepare("SELECT id, name, description, price, count, store_id FROM product");
$sql->execute(); //[$password]
$result = $sql->fetchAll();             //fetchColumn();
$x=0;
while ($x<sizeof($result)){
  echo $result[$x]['id'];
  echo "<br>";
  echo $result[$x]['name'];
  echo "<br>";
  echo $result[$x]['description'];
  echo "<br>";
  echo $result[$x]['price'];
  echo "<br>";
  echo $result[$x]['count'];
  //$_SESSION['id_prod'] = $result[$x]['id'];
  echo "<br>";
  if($result[$x]['store_id'] == 1){echo 'Brno';}
  if($result[$x]['store_id'] == 2){echo 'Bratislava';}
  if($result[$x]['store_id'] == 3){echo 'Kosice';}
  echo "<br>";
  echo "<br>";
  $x++;
}
//echo $result[0]['email'];
//echo "<br>";
?>
