<?php

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:*');
header("Access-Control-Allow-Headers: *");
header('Content-Type:application/json');

include '../controller/Contact.php';

$contact = new Contact();

$data = json_decode(file_get_contents("php://input", true));

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $allheaders=getallheaders();
    $authorization = $allheaders['Authorization'];

    if($authorization==='contact'){
        $region = htmlentities($data->region);
        $name = htmlentities($data->name);
        $town = htmlentities($data->town);
        $message = htmlentities($data->message);

        $contact->addContactInfo($name,$region,$town,$message);
    }else{
        $id = htmlentities($data->contactID);

        $contact->deleteContact($id);
    }
}

if($_SERVER['REQUEST_METHOD']=='GET'){

    $contact->getContacts();

}