<?php

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:*');
header("Access-Control-Allow-Headers: *");
header('Content-Type:application/json');

include '../controller/Location.php';

$location = new Location();


if ($_SERVER['REQUEST_METHOD'] == 'POST') {

$data = json_decode(file_get_contents("php://input", true));

    if($data->post ==='add_location'){
        $data = $data->location;
        
        $region = htmlentities($data->region);
        $town = htmlentities($data->town);

        // //posting locations into the database
        $location->addLocation($region,$town);
        
    }else if($data->post === 'get_regions'){

        $location->getRegions();

    }
    else if($data->post === 'get_towns'){
    
        $region = htmlentities($data->region);

        $location->getTowns($region);

    }
    else if($data->post ===  'remove_location'){
        
        $id = htmlentities($data->locationID);

        //removing location from the database
        $location->deleteLocation($id);
    }
    
}


if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    $location->getLocations();

}
