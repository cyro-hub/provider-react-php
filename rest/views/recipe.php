<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:*');
header("Access-Control-Allow-Headers: *");
header('Content-Type:application/json');

include '../controller/Recipe.php';
include '../model/image.php';

$recipe = new Recipe();
$image = new Image();

$data = json_decode(file_get_contents("php://input", true));

$allheaders=getallheaders();
$authorization = $allheaders['Authorization'];

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    echo json_encode($data->{'image'});
    // if($authorization==='post'){

    //     $name = htmlentities($data->{'name'});
    //     $file = $data->{'image'};
    //     $price = htmlentities($data->{'price'});
    //     $from = htmlentities($data->{"from"});
    //     $delivery = htmlentities($data->{'delivery'});
    //     $status = htmlentities($data->{'status'});
    //     $des = htmlentities($data->{'des'});
        
    //     $image->uploadImageToServer($file);

    //     // if($uploaded->status===200){
    //     //     $recipe->addRecipe($name,$uploaded->imgUrl,$price,$from,$delivery,$status,$des);
    //     // }else{
    //     //     $recipe->error();
    //     // }
    //     return;
    // }else if($authorization==='put'){

    //     $id = htmlentities($data->recipeID);
    //     $name = htmlentities($data->name);
    //     $imgUrl = htmlentities($data->imgUrl);
    //     $price = htmlentities($data->price);
    //     $from = htmlentities($data->from);
    //     $delivery = htmlentities($data->delivery);
    //     $status = htmlentities($data->status);
    //     $des = htmlentities($data->des);

    //     $recipe->updateRecipe($id,$name,$imgUrl,$price,$from,$delivery,$status,$des);
    // }else{
    //     $id = htmlentities($data->recipeID);

    //     $recipe->deleteRecipe();
    // }
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    $recipe->getRecipes();

}
