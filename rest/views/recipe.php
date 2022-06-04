<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:*');
header("Access-Control-Allow-Headers: *");
header('Content-Type:application/json');

include '../controller/Recipe.php';

$recipe = new Recipe();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    $data = json_decode(file_get_contents("php://input", true));

    $allheaders=getallheaders();
    $authorization = $allheaders['Authorization'];

    if($authorization==='post'){

        $name = htmlentities($data->{'name'});
        $imgUrl = $data->{'imageUrl'};
        $price = htmlentities($data->{'price'});
        $from = htmlentities($data->{"from"});
        $delivery = htmlentities($data->{'delivery'});
        $status = htmlentities($data->{'status'});
        $des = htmlentities($data->{'des'});
        
        $recipe->addRecipe($name,$imgUrl,$price,$from,$delivery,$status,$des);

        return;
    }else if($authorization==='put'){

        $id = htmlentities($data->recipeID);
        $name = htmlentities($data->name);
        $imgUrl = htmlentities($data->imgUrl);
        $price = htmlentities($data->price);
        $from = htmlentities($data->from);
        $delivery = htmlentities($data->delivery);
        $status = htmlentities($data->status);
        $des = htmlentities($data->des);

        $recipe->updateRecipe($id,$name,$imgUrl,$price,$from,$delivery,$status,$des);
    }else{
        $id = htmlentities($data->recipeID);

        $recipe->deleteRecipe($id);
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    $recipe->getRecipes();

}
