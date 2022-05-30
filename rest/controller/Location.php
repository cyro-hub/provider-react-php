<?php
include '../model/database.php';
include '../vendor/autoload.php';

class Location extends Database{
    public $region;
    public $town;

    public function addLocation($region,$town){
        $this->region = $region;
        $this->town = $town;

        $sql = "insert into Location(region,town) values('$this->region','$this->town')";

        if($this->insertDB($sql)){
            echo json_encode(['message'=>'Inserted location successful','status'=>200],true);
        }else{
            echo json_encode(['message'=>'Failed to add location','status'=>404],true);
        }
        return;
    }

    public function getLocations(){
        $sql = 'select * from Location';

        if($this->readDB($sql)){
            $data = $this->readDB($sql);
            echo json_encode(['data'=>$data,'message'=>'Successfully read the Database','status'=>200],true);
        }else{
            echo json_encode(['data'=>[],'message'=>'Could not get locations from the Database','status'=>404],true);
        }
    }

    public function updateLocation($region,$town,$id){
        $sql = "update Location set region = '$region',town = '$town' where locationID = $id";
        if($this->insertDB($sql)){
            echo json_encode(['message'=>'Location updated successfully','status'=>200],true);
        }else{
            echo json_encode(['message'=>'Failed to update location','status'=>404],true);
        }
        return;
    }

    public function deleteLocation($id){
        $sql = "delete Location where locationID=$id";
        if($this->insertDB($sql)){
            echo json_encode(['message'=>'Location deleted successfully','status'=>200],true);
        }else{
            echo json_encode(['message'=>'Failed to delete location','status'=>404],true);
        }
        return;
    }
}


