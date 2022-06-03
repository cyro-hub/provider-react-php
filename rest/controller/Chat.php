<?php
ini_set('display_errors', '1');

include '../model/database.php';
include '../vendor/autoload.php';

use \Firebase\JWT\JWT;
use \Firebase\JWT\Key;

class Chat extends Database{
    public $name;
    public $role;
    public $message;
    public $location;
    public $date;
    private $key = 'example_key';
    public $email;

public function authenticateUser($name){

    try{
        $decoded = JWT::decode(strval($name),new Key($this->key, 'HS256'));

        $this->name = $decoded->{'data'}->{'userName'};

        $this->email = $decoded->{'data'}->{'email'};

    }catch(exception $exp){
        echo json_encode(['message'=>'Failed to add message','status'=>404],true);
    }
}

public function getMessageByName(){
    $sql = "select * from Chat where email = '$this->email'";

    $data = $this->readDB($sql);
    if($data){
        echo json_encode(['data'=>$data,'message'=>'Message was sent successfully','status'=>200],true);
    }else{
        echo json_encode(['message'=>'Failed to read chat update','status'=>404],true);
    }
}

public function get($sql){
    $data = $this->readDB($sql);
    if($data){
        echo json_encode(['data'=>$data,'message'=>'Message was sent successfully','status'=>200],true);
    }else{
        echo json_encode(['message'=>'Failed to read chat update','status'=>404],true);
    }
}

public function addMessageByUser($name,$message,$location){
    $this->message = $message;
    $this->role = 'user';
    $this->location = $location;
    $this->date = date("F j, Y, g:i a");

    $this->authenticateUser($name);

    $sql = "insert into Chat(name,email,message,role,location,date) values('$this->name','$this->email','$this->message','$this->role','$this->location','$this->date')";

    if($this->insertDB($sql)){//using the insert 

        $this->getMessageByName($this->email);
            
    }else{
        echo json_encode(['message'=>'Failed  to send message','status'=>404],true);
    }

}

public function addMessageByAdmin($email,$message,$location){
    $this->email = $email;
    $this->message = $message;
    $this->location = $location;
    $this->date = date("F j, Y, g:i a");
    $this->role = 'admin';

    $sql="select * from users where email = '$this->email'";

    $data = $this->readDB($sql);

    if($data){
        $this->name = $data[0]["userName"];

        $sql = "insert into Chat(name,email,role,message,location,date) values('$this->name','$this->email','$this->role','$this->message','$this->location','$this->date')";

        if($this->insertDB($sql)){//using the insert f
            $sql = "select * from Chat where email='$this->email'";
            $this->get($sql);
    
        }else{
            echo json_encode(['message'=>'Failed  to send message','status'=>404],true);
        }
    }else{
        echo json_encode(['message'=>'Failed to read chat update','status'=>404],true);
    }
   
}

public function getMessagesOfUser($email){
    $sql = "select * from Chat where email = '$email'";

    $this->get($sql);
}

public function getUsers(){
    $sql = "select userName,email from users";
    $this->get($sql);
}

}