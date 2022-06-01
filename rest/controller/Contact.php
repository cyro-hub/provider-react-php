<?php
include '../model/database.php';

class Contact extends Database{
    public $name;
    public $region;
    public $town;
    public $message;

    public function addContactInfo($name,$region,$town,$message){
        $this->name=$name;
        $this->region=$region;
        $this->town=$town;
        $this->message=$message;

        $sql = "insert into Contact(name,region,town,message) values('$this->name','$this->region','$this->town','$this->message')";

        if($this->insertDB($sql)){
            echo json_encode(['message'=>'Successfully added contact info','status'=>200],true);
        }else{
            echo json_encode(['message'=>'Failed to add contact','status'=>404],true);
        }
        return;
    }

    public function deleteContact($id){
        $sql = "delete from Contact where contactID=$id";
        if($this->insertDB($sql)){
            $sql = 'select * from Contact';
            $data = $this->readDB($sql);
            if($data){
                echo json_encode(['data'=>$data,'message'=>'Contact remove successfully','status'=>200],true);
            }else{
                echo json_encode(['message'=>'Failed to read Contact updates','status'=>404],true);
            }
        }else{
            echo json_encode(['message'=>'Failed to delete contact','status'=>404],true);
        }
        return;
    }

    public function getContacts(){
        $sql = 'select * from Contact';
        
        if($this->readDB($sql)){
            $data = $this->readDB($sql);
            echo json_encode(['data'=>$data,'message'=>'Successfully read the Database','status'=>200],true);
        }else{
            echo json_encode(['data'=>[],'message'=>'Could not get locations from the Database','status'=>404],true);
        }
    }

}