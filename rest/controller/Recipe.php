<?php
include '../model/database.php';

class Recipe extends Database{
    public $name;
    public $imgUrl;
    public $price;
    public $from;
    public $delivery;
    public $status;
    public $des;

    public function addRecipe($name,$imgUrl,$price,$from,$delivery,$status,$des){
        $this->name = $name;
        $this->imgUrl = $imgUrl;
        $this->price = $price;
        $this->from = $from;
        $this->delivery = $delivery;
        $this->status = $status;
        $this->des = $des;

        $sql = "insert into Recipe(name,imgUrl,price,from,delivery,status,description) values('$this->name','$this->imgUrl','$this->price','$this->from','$this->delivery,$this->status,$this->des')";

        if($this->insertDB($sql)){
            $sql = 'select * from Recipe';
            $data = $this->readDB($sql);
            if($data){
                echo json_encode(['data'=>$data,'message'=>'Recipe added successfully','status'=>200],true);
            }else{
                echo json_encode(['message'=>'Failed to read recipe updates','status'=>404],true);
            }
        }else{
            echo json_encode(['message'=>'Adding recipe failed','status'=>404],true);
        }
    }

    public function deleteRecipe($id){
        $sql = "delete from Recipe where recipeID = $id";

        if($this->insertDB($sql)){
            $sql = 'select * from Recipe';

            $data = $this->readDB($sql);
            if($data){
                echo json_encode(['data'=>$data,'message'=>'Recipe remove successfully','status'=>200],true);
            }else{
                echo json_encode(['message'=>'Failed to read Recipe updates','status'=>404],true);
            }
        }else{
            echo json_encode(['message'=>'Failed to delete recipe','status'=>404],true);
        }
        return;
    }

    public function updateRecipe($id,$name,$imgUrl,$price,$from,$delivery,$status,$des){
        $sql = "update Recipe set name='$name',imgUrl='$imgUrl',price='$price',from='$from',delivery='$delivery',status='$status',description='$des' where recipeID=$id";

        if($this->insertDB($sql)){
            $sql = 'select * from Recipe';

            $data = $this->readDB($sql);
            if($data){
                echo json_encode(['data'=>$data,'message'=>'Recipe updated successfully','status'=>200],true);
            }else{
                echo json_encode(['message'=>'Failed to read Recipe updates','status'=>404],true);
            }
        }else{
            echo json_encode(['message'=>'Failed to update recipe','status'=>404],true);
        }
        return;
    }

    public function getRecipes(){
        $sql = 'select * from Recipe';

        if($this->readDB($sql)){
            $data = $this->readDB($sql);
            echo json_encode(['data'=>$data,'message'=>'Successfully read the Database','status'=>200],true);
        }else{
            echo json_encode(['data'=>[],'message'=>'Could not get recipes from the Database','status'=>404],true);
        }
    }

    public function error(){
        echo json_encode(['message'=>'Adding recipe failed','status'=>404],true);
    }
}