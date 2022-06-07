<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:*');
header("Access-Control-Allow-Headers: *");
header('Content-Type:application/json');

include '../controller/Order.php';

$order = new Orders();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    $data = json_decode(file_get_contents("php://input", true));

    if($data->post === 'add_order'){
        
        $token = htmlentities($data->token);
        $total = htmlentities($data->total);

        $order->addOrder($token,$data->order,$total);
        
    }else if($data->post === 'delete_order'){
        
        $id=htmlentities($data->orderID);

        $order->deleteOrder($id);
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    
    $order->getOrders();

}