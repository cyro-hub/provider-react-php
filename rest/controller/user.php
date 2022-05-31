<?php
ini_set('display_errors', '1');

include '../model/database.php';
include '../vendor/autoload.php';

use \Firebase\JWT\JWT;
use \Firebase\JWT\Key;

class User extends Database{
    private $name;
    private $email;
    private $password;
    private $tel;
    private $location;
    private $key = 'example_key';

public function userDetails($name,$email,$password,$tel,$location){
    $this->name=$name;
    $this->email=$email;
    $this->password = password_hash($password, PASSWORD_DEFAULT);
    $this->tel = $tel;
    $this->location=$location;
}


// this is the login of the user
public function loginUser($email,$password){
    $sql = "select email,password,userName from users where email = '$email'";
    
    $data = $this->readDB($sql);
    
    if($this->readDB($sql)){
        foreach($data as $values){
            if(password_verify($password,$values['password'])){
                $payload = [
                    'iss' => 'localhost',
                    'aud' => 'localhost',
                    'iat' => time(),
                    'nbf' => time()+10,
                    'exp' => time()+60*60*12,
                    'data'=>Array('userName'=>$values['userName'],'email'=>$values['email'])
                ];

                try{
                    $jwt = JWT::encode($payload, $this->key, 'HS256');
                    http_response_code(200);
                    echo json_encode(['data'=>$jwt,'message'=>'User successfully login','status'=>200],true);
                }catch(Exception $exp){
                    http_response_code(500);
                    echo json_encode(['data'=>[],'message'=>'Error loging in','status'=>500],true);
                }
            }else{
                echo json_encode(['data'=>[],'message'=>'password does not match','status'=>404],true);
            }
        }
    }else{
        echo json_encode(['data'=>[],'message'=>"$email does not exist!",'status'=>500],true);
    }
}

// this is the registration of the user
public function registerUser(){
    $sql = "insert into users(userName,email,password,tel,location) values('$this->name','$this->email','$this->password','$this->tel','$this->location')";

    if($this->insertDB($sql)){
        echo json_encode(['message'=>'Registration successful','status'=>200],true);
    }else{
        echo json_encode(['message'=>'Registration failed','status'=>404],true);
    }
}
//removing user from the database
public function removeUser($userID){
    $sql = "delete from users where userID=$userID";

    if($this->insertDB($sql)){//using the insert function from the Database class to delete user
        echo json_encode(['message'=>'User remove successfully','status'=>200],true);
    }else{
        echo json_encode(['message'=>'Failed to remove user','status'=>404],true);
    }
}

// user token verification
public function verifyToken($jwt){
    try{

        $decoded = JWT::decode(strval($jwt),new Key($this->key, 'HS256'));

        $email = $decoded->{'data'}->{'email'};

        $sql = "select email,userName,password from users where email = '$email'";

        if($this->readDB($sql)){
            echo json_encode(['message'=>true,'status'=>200],true);
        }else{
            echo json_encode(['message'=>false,'status'=>404],true);
        }

        
    }catch(exception $exp){
        echo json_encode(['message'=>false,'status'=>404],true);
    }
}

public function getUsers(){
    $sql = 'select * from users';

    if($this->readDB($sql)){
        $data = $this->readDB($sql);
        echo json_encode(['data'=>$data,'message'=>'Successfully read the Database','status'=>200],true);
    }else{
        echo json_encode(['data'=>[],'message'=>'Could not get users from the Database','status'=>404],true);
    }
}
}

?>