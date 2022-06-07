<?php
ini_set('display_errors', '1');

include '../model/database.php';
include '../vendor/autoload.php';

use \Firebase\JWT\JWT;
use \Firebase\JWT\Key;

class Orders extends Database{
public $name;
public $email;
public $orderID;
public $order;
public $total;
public $location;
private $key = 'example_key';

public function minOrderPerUser(){
   

    $data = $this->readDB($sql);
    if($this->insertDB($sql)){
        echo json_encode(['min'=>$data,'message'=>'the lowest 3','status'=>200],true);
    }else{
        echo json_encode(['message'=>'Failed to get the lowest 3','status'=>404],true);
    }
}

public function authenticateUser($token){

    try{
        $decoded = JWT::decode(strval($token),new Key($this->key, 'HS256'));

        $this->name = $decoded->{'data'}->{'userName'};

        $this->email = $decoded->{'data'}->{'email'};

        $this->location = $decoded->{'data'}->{'location'};

    }catch(exception $exp){
        echo json_encode(['message'=>'Failed to add message','status'=>404],true);
        return;
    }
}

public function addOrder($token,$order,$total){
    $this->authenticateUser($token);

    $this->orderID = date('Ymdhis').'-'.$this->name;
    $this->order = json_encode($order);
    $this->total = $total;

    $sql = "INSERT INTO `Orders` (`id`, `OrderID`, `email`, `name`, `details`, `total`, `location`) VALUES (NULL, '$this->orderID', '$this->email', '$this->name', '$this->order',$this->total,'$this->location')";
// echo $sql;
    if($this->insertDB($sql)){
        echo json_encode(['data'=>$this->orderID,'message'=>'Order added successfully','status'=>200],true);
    }else{
        echo json_encode(['message'=>'Failed to add order','status'=>404],true);
    }
    return;
}

public function getOrders(){
    $sql = 'select * from Orders';

    if($this->readDB($sql)){
        $data = $this->readDB($sql);
        echo json_encode(['data'=>$data,'message'=>'Successfully read the Database','status'=>200],true);
    }else{
        echo json_encode(['data'=>[],'message'=>'Could not get order from the Database','status'=>404],true);
    }
}

public function deleteOrder($id){
    $sql = "delete from Orders where id=$id";
        if($this->insertDB($sql)){
            $sql = 'select * from Orders';
            $data = $this->readDB($sql);
            if($data){
                echo json_encode(['data'=>$data,'message'=>'Order remove successfully','status'=>200],true);
            }else{
                echo json_encode(['message'=>'Failed to read Order updates','status'=>404],true);
            }
        }else{
            echo json_encode(['message'=>'Failed to delete Order','status'=>404],true);
        }
        return;
}
}