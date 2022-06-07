<?php
ini_set('display_errors', '1');

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:*');
header("Access-Control-Allow-Headers: *");
header('Content-Type:application/json');

include '../controller/user.php';

$user = new User();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
   $jwt = json_decode(file_get_contents("php://input", true));
   
   $user->verifyToken($jwt);

}