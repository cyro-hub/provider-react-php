<?php

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:*');
header("Access-Control-Allow-Headers: *");
header('Content-Type:application/json');

include '../controller/Location.php';

$location = new Location();

$data = json_decode(file_get_contents("php://input", true));

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $region = htmlentities($data->region);
    $town = htmlentities($data->town);

    $location->addLocation($region,$town);
}


if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    $location->getLocations();

}

if ($_SERVER['REQUEST_METHOD'] == 'PUT') {

    $region = htmlentities($data->region);
    $town = htmlentities($data->town);
    $id = htmlentities($data->locationID);

    $location->updateLocation($region,$town,$id);
}

if ($_SERVER['REQUEST_METHOD'] == "DELETE") {

    $id = htmlentities($data->locationID);

    $location->deleteLocation($id);
}
