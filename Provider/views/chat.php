<?php

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:GET,HEAD,OPTIONS,POST,PUT');
header("Access-Control-Allow-Headers: *");
header('Content-Type:application/json');

include '../controller/Chat.php';

$chat = new Chat();

$data = json_decode(file_get_contents("php://input", true));

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    if($data->post==='user'){
        
        $data = $data->message;
        
        $name = htmlentities($data->name);
        $location = htmlentities($data->location);
        $message = htmlentities($data->message);
    
        $chat->addMessageByUser($name,$message,$location);

    }else if($data->post ==='admin'){
        
        $data = $data->message;

        $email = htmlentities($data->email);
        $location = htmlentities($data->location);
        $message = htmlentities($data->message);

        $chat->addMessageByAdmin($email,$message,$location);
        
    }else if($data->post==='get_message_by_email'){
        
        $email = htmlentities($data->email);

        $chat->getMessagesOfUser($email);
        
    }else if($data->post==='get_message_by_name'){
        
        $credential = htmlentities($data->credential);

        $chat->authenticateUser($credential);
        $chat->getMessageByName();

    }
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        $chat->getUsers();
}