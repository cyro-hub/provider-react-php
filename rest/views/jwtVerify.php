<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:*');
header("Access-Control-Allow-Headers: *");
header('Content-Type:application/json');

ini_set('display_errors', '1');

include '../controller/user.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $allheaders=getallheaders();

    $jwt = $allheaders['Authorization'];

    $user = new User();

    $user->verifyToken($jwt);

}