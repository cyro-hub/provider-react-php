<?php

header("Content-Type:application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include '../controller/user.php';
include '../vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$user = new User();

$data = json_decode(file_get_contents("php://input", true));

// loging  and registering user in the website
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    if($data->post==="login"){
        
        $data = $data->user;
        
        $email = htmlentities($data->email);
        $password = htmlentities($data->password);
        
        // logint the user into the site
        $user->loginUser($email,$password);
        
    }else if($data->post === 'register'){
        
        $data = $data->user;
        
        $email = htmlentities($data->email);
        $password = htmlentities($data->password);
        $tel = htmlentities($data->tel);
        $userName = htmlentities($data->name);
        $location = htmlentities($data->location);
        
        // registering the user into the website
        $user->userDetails($userName,$email,$password,$tel,$location);
        $user->registerUser();
        
    }else{

        $id = htmlentities($data->userID);
        // removing the user
        $user->removeUser($id);
        
    }
}

//getting users form the database
if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    $user->getUsers();
    
}