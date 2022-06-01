<?php
include '../model/database.php';

class Location extends Database{
    public $region;
    public $town;

    public function addLocation($region,$town){
        $this->region = $region;
        $this->town = $town;

        $sql = "insert into Location(region,town) values('$this->region','$this->town')";

        if($this->insertDB($sql)){
            $sql = 'select * from Location';
            $data = $this->readDB($sql);
            if($data){
                echo json_encode(['data'=>$data,'message'=>'Location added successfully','status'=>200],true);
            }else{
                echo json_encode(['message'=>'Failed to read Location updates','status'=>404],true);
            }
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

    public function deleteLocation($id){
        $sql = "delete from Location where locationID=$id";
        if($this->insertDB($sql)){
            $sql = 'select * from Location';
            $data = $this->readDB($sql);
            if($data){
                echo json_encode(['data'=>$data,'message'=>'Location remove successfully','status'=>200],true);
            }else{
                echo json_encode(['message'=>'Failed to read Location updates','status'=>404],true);
            }
        }else{
            echo json_encode(['message'=>'Failed to delete location','status'=>404],true);
        }
        return;
    }
}


