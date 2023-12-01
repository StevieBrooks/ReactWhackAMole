<?php 

    header("Access-Control-Allow-Origin: http://localhost:3000");

    $postData = file_get_contents('php://input');
    echo json_encode($postData);



    if(isset($_POST['topic'])) {
        
            $topic = $_POST['topic'];
            echo "Your topic is " . $topic;
    } else {
        echo "Error, soz!";
    }