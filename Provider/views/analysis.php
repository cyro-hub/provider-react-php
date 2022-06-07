<?php

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:*');
header("Access-Control-Allow-Headers: *");
header('Content-Type:application/json');

include '../controller/Analysis.php';

$analysis = new Analysis();
if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    $analysis->getAnalysis();

}