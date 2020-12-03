<?php
include ('connection.php');
$conn_akt = $conn1;
if (!$conn1) {
  if (!$conn2) {
    echo "Not connection";
  }
  $conn_akt=$conn2;
}

$sql = $conn_akt->prepare("SELECT id, name, description, price, count FROM product where store_id = ? ");
$sql->execute([$_SESSION['store_id']]);
$result = $sql->fetchAll();
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
  echo "<br>";
  echo "<br>";
  $x++;
}
?>

<html>

   <head>
      <title>products</title>
   </head>
   <body>
      <div id="frm">
        <form action="create_product.html" method="POST">
        <p>
          <input type="submit" value="vytvor produkt" id="pass" name="sub" />
        </p>
      </form>
      <form action="sell_product.html" method="POST">
      <p>
        <input type="submit" value="predaj produkt" id="pass" name="sub" />
      </p>
    </form>
    <form action="delete_product.html" method="POST">
    <p>
      <input type="submit" value="zmaz produkt" id="pass" name="sub" />
    </p>
  </form>
      </div>

   </body>
</html>
