<?php
ini_set('display_errors', '1');

include '../model/database.php';

class Analysis extends Database{
    public function getAnalysis(){
        $max = "select max(total) as highest, name from Orders group by name order by highest desc limit 3";
        $min = "select max(total) as lowest, name from Orders group by name order by lowest limit 3";
    
        $maxData = $this->readDB($max);
        $minData = $this->readDB($min);
        if($maxData&&$minData){
            echo json_encode(['max'=>$maxData,
                              'min'=>$minData,
                              'status'=>200],true);
        }else{
            echo json_encode(['message'=>'Failed to get the highest 3','status'=>404],true);
        }
    }

}