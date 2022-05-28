<?php

class Database{
    protected $localhost;
    protected $dbUserName;
    protected $dbPassword;
    protected $dbName;

    public function setCredentials(){
        $this->localhost = 'localhost';
        $this->dbUserName = 'root';
        $this->dbPassword = 'bongbuin';
        $this->dbName = 'Provider';
    }

    protected function Connect(){ 
    $this->setCredentials();
        $con = new mysqli($this->localhost,$this->dbUserName,$this->dbPassword,$this->dbName);

        if ($con->connect_error) {
            die("Connection failed: " . $con->connect_error);
        }else{
            return $con;
        }
    }

    protected function readDB($sql){
        if($this->Connect()->query($sql)){
            $result = $this->Connect()->query($sql);
            $this->Connect()->close();
            $data = [];
            while($row = mysqli_fetch_assoc($result)){
                $data[]=$row;
            }
            return $data;
        }else{
            $this->Connect()->close();
            return false;
        }
    }

    protected function insertDB($sql){
        if($this->Connect()->query($sql)){      
            $this->Connect()->close();
            return true;
        }else{            
            $this->Connect()->close();
            return false;
        }
    }
}


?>