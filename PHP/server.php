<?php 

    header("Access-Control-Allow-Origin: http://localhost:3000");

    include 'database.php';

    if(isset($_POST)) {
        
            $difficulty = $_POST['difficulty'];
            $topic = $_POST['topic'];
            $score = $_POST['score'];
            $user = $_POST['user'];
            echo "Your topic is " . $topic . " and your level was " . $difficulty . ". Your final score is " . $score . ". Well done, " . $user;

            $query = "INSERT INTO playerscore (user, topic, difficulty, score)
                                VALUES ('$user', '$topic', '$difficulty', '$score')";
    } else {
        echo "Error!";
    }