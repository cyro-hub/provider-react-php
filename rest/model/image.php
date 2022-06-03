<?php

class Image{
    public $size;
    public $ext;
    public $destination;
    public $name;

    public function uploadImageToServer($image){
        $this->size = $image->size;
        $this->name = $image->name;
        $this->ext = end(explode('.',$image->name));
        $this->destination = "../image/".date('YmdHis'); 

        $moveResult = move_uploaded_file($this->name, $this->destination);
        // Check to make sure the move result is true before continuing
        if ($moveResult != true) {
            echo "ERROR: File not uploaded. Try again.";
            unlink($this->name); // Remove the uploaded file from the PHP temp folder
            exit();
        }else{
            echo ' success';
        }
        unlink($this->name);

    }


    //use destruct to remove image from temp folder
    //unlink($fileTmpLoc);
}