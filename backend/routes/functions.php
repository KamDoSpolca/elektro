<?php

function connectToDBS($servername, $dbname, $username, $password, $serverID) {
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        if(file_exists($serverID.'tempSQL.sql')){
          $query = file_get_contents($serverID.'tempSQL.sql');
          $sql = $conn->prepare($query);
          $sql->execute();
          unLink($serverID.'tempSQL.sql');
        }

        return $conn;
    } catch (PDOException $e) {
        echo "Connection failed:";
        return null;
    }
}

function validateData($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES);
    return $data;
}

function createTempSQL($serverID, $sql){
  $SqlFile = fopen($serverID.'tempSQL.sql', 'a');
  $query = $sql.PHP_EOL;
  fwrite($SqlFile,$query);
  fclose($SqlFile);
}
