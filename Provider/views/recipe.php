<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:*');
header("Access-Control-Allow-Headers: *");
header('Content-Type:application/json');

include '../controller/Recipe.php';

$recipe = new Recipe();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    $data = json_decode(file_get_contents("php://input", true));

    if($data->post==="add_recipe"){

        $data = $data->recipe;
        
        $name = htmlentities($data->{'name'});
        $imgUrl = $data->{'imageUrl'};
        $price = htmlentities($data->{'price'});
        $from = htmlentities($data->{"from"});
        $delivery = htmlentities($data->{'delivery'});
        $status = htmlentities($data->{'status'});
        $des = htmlentities($data->{'des'});
        $imageName = htmlentities($data->{'imageName'});
        
        $recipe->addRecipe($name,$imageName,$imgUrl,$price,$from,$delivery,$status,$des);

        return;
    }else if($data->post==='update_recipe'){
        
        $data = $data->recipe;
        
        $id = htmlentities($data->recipeID);
        $name = htmlentities($data->{'name'});
        $imgUrl = $data->{'imageUrl'};
        $price = htmlentities($data->{'price'});
        $from = htmlentities($data->{"from"});
        $delivery = htmlentities($data->{'delivery'});
        $status = htmlentities($data->{'status'});
        $des = htmlentities($data->{'des'});
        $imageName = htmlentities($data->{'imageName'});

        $recipe->updateRecipe($id,$name,$imageName,$imgUrl,$price,$from,$delivery,$status,$des);
        
    }else if($data->post==='delete_recipe'){
        
        $id = htmlentities($data->recipeID);

        $recipe->deleteRecipe($id);
        
    }else if($data->post===''){
        // echo 'heooe';
        $recipe->getRecipesByStatus();
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    $recipe->getRecipes();

}
