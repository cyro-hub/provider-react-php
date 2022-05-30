<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:POST');
header("Access-Control-Allow-Headers: *");
header('Content-Type:application/json');

include '../controller/Recipe.php';

$recipe = new Recipe();

$data = json_decode(file_get_contents("php://input", true));

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    echo json_encode(htmlentities($data->{'image'}->{'File'}));
    // echo 'hello';
}
