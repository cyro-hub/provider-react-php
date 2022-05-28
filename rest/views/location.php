<?php

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:*');
header("Access-Control-Allow-Headers: *");
header('Content-Type:application/json');

include '../controller/Location.php';

$location = new Location();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input", true));
    $region = htmlentities($data->region);
    $town = htmlentities($data->town);

    $location->addLocation($region,$town);
}


if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    $location->getLocations();

}

if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
// ADD code for updating location
}