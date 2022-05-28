<?php

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:POST');
header("Access-Control-Allow-Headers: *");
header('Content-Type:application/json');

include '../controller/user.php';
include '../vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input", true));
    $email = htmlentities($data->email);
    $password = htmlentities($data->password);
    $tel = htmlentities($data->tel);
    $userName = htmlentities($data->name);
    $location = htmlentities($data->location);

    $user = new User();
    $user->userDetails($userName,$email,$password,$tel,$location);
    $user->registerUser();
}