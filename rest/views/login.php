<?php

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:POST');
header("Access-Control-Allow-Headers: *");
header('Content-Type:application/json');

include '../controller/user.php';
include '../vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$user = new User();

$data = json_decode(file_get_contents("php://input", true));

// loging user in the website
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $email = htmlentities($data->email);
    $password = htmlentities($data->password);

    $user->loginUser($email,$password);

}

// deleting user from the user table
if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {

    $id = htmlentities($data->locationID);

    $user->removeUser($id);
}

//getting users form the database
if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    $user->getUsers();
    
}