<?php
  include ('connection.php');
  header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

 header("Content-Type: application/json");



 $entityBody = file_get_contents('php://input');
   $request = json_decode($entityBody);

  $email = $request->email;
    $password = $request->password;
 
  if (!$conn1) {
    echo "Not connection";
  }

  $sql = $conn1->prepare("SELECT email, password,store_id FROM user WHERE email=? and password = ? ");
  $sql->execute([$email, $password]);
  $result = $sql->fetchAll();

  if(sizeof($result)>0){
    if($result[0]['email'] == $email && $result[0]['password'] == $password){
      http_response_code(200);
      echo json_encode("Login success!!!");
      $_SESSION['store_id'] = $result[0]['store_id'];
    }
    else{
     // header("Location: http://localhost/elektro1/backendJ/index.php");
      http_response_code(403);
      echo json_encode("Failed to login"); 
  }
  }
    
  

?>

