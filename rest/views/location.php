<?php

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:*');
header("Access-Control-Allow-Headers: *");
header('Content-Type:application/json');

include '../controller/Location.php';

$location = new Location();

$data = json_decode(file_get_contents("php://input", true));

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $allheaders=getallheaders();
    $authorization = $allheaders['Authorization'];
   
    if($authorization==='location'){
        $region = htmlentities($data->region);
        $town = htmlentities($data->town);
        //posting locations into the database
        $location->addLocation($region,$town);
    }else{
        $id = htmlentities($data->locationID);
        //removing location from the database
        $location->deleteLocation($id);
    }
    
}


if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    $location->getLocations();

}
