<?php
ini_set('display_errors', '1');
include '../model/database.php';

class Recipe extends Database{
    public $name;
    public $imgUrl;
    public $imgImage;
    public $price;
    public $from;
    public $delivery;
    public $status;
    public $des;

    public function addRecipe($name,$imageName,$imgUrl,$price,$from,$delivery,$status,$des){
        $this->name = $name;
        $this->imageName = $imageName;
        $this->imgUrl = $imgUrl;
        $this->price = number_format($price, 2);
        $this->from = $from;
        $this->delivery = $delivery?1:0;
        $this->status = $status?1:0;
        $this->des = $des;

        $sql = "insert into Recipe(name,imageName,imageUrl,price,location,status,delivery,description
        ) values('$this->name','$this->imageName','$this->imgUrl',$this->price,'$this->from',$this->status,$this->delivery,'$this->des')";
        // echo $sql;
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

    public function updateRecipe($id,$name,$imageName,$imgUrl,$price,$from,$delivery,$status,$des){
        $price = number_format($price, 2);
        $delivery=$delivery?1:0;
        $status=$status?1:0;
        
        $sql = "update Recipe set name='$name',imageUrl='$imgUrl',price=$price,location='$from',delivery='$delivery',status='$status',description='$des',imageName='$imageName' where recipeID=$id";

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

    public function getRecipesByStatus(){
        $sql = 'select * from Recipe where status=1';
        
        if($this->readDB($sql)){
            $data = $this->readDB($sql);
            echo json_encode(['data'=>$data,'message'=>'Successfully read the Database','status'=>200],true);
        }else{
            echo json_encode(['data'=>[],'message'=>'Could not get recipes from the Database','status'=>404],true);
        }
    }
}