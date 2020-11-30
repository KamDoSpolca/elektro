<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start();
require_once ('functions.php');
//require_once ('UserClass.php');
//require_once ('class/MessageClass.php');

//$user = new User;

 /**Define connections to databases**/
$conn3 = connectToDBS('25.60.143.173', 'test1', 'jurco123', 'heslo123','1');
$conn2 = connectToDBS('25.91.222.86', 'test1', 'jurco1', 'heslo123','2');
$conn1 = connectToDBS('25.108.247.116', 'test1', 'jaros1', 'heslo123','3');

$connection = ['conn1' => $conn1,
                'conn2' => $conn2,
                 'conn3' => $conn3];
