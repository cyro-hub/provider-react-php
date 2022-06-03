<?php

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:GET,HEAD,OPTIONS,POST,PUT');
header("Access-Control-Allow-Headers: *");
header('Content-Type:application/json');

include '../controller/Chat.php';

$chat = new Chat();

$data = json_decode(file_get_contents("php://input", true));

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $allheaders=getallheaders();
    $authorization = $allheaders['Authorization'];

    if($authorization==='user'){
        $name = htmlentities($data->name);
        $location = htmlentities($data->location);
        $message = htmlentities($data->message);
    
        $chat->addMessageByUser($name,$message,$location);

    }else if($authorization==='admin'){

        $email = htmlentities($data->email);
        $location = htmlentities($data->location);
        $message = htmlentities($data->message);

        $chat->addMessageByAdmin($email,$message,$location);
    }else if($authorization==='messages'){
        $email = htmlentities($data->email);

        $chat->getMessagesOfUser($email);
    }else if($authorization==='userMessage'){
        $credential = htmlentities($data->credential);

        $chat->authenticateUser($credential);
        $chat->getMessageByName();

    }
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        $chat->getUsers();
}