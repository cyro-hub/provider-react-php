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

    public function setRecipe($name,$imgUrl,$price,$from,$delivery,$status,$des){
        $this->name = $name;
        $this->imgUrl = $imgUrl;
        $this->price = $price;
        $this->from = $from;
        $this->delivery = $delivery;
        $this->status = $status;
        $this->des = $des;
    }

    public function addRecipe(){

    }
}