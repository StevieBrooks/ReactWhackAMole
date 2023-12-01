<?php 

    include 'database.php';

    if(isset($_POST['score_submit'])) {
        $player = mysqli_real_escape_string($con, $_POST['user']);
        $topic = mysqli_real_escape_string($con, $_POST['topic']);
        $difficulty = mysqli_real_escape_string($con, $_POST['difficulty']);
        $score = isset($_POST['score']) ? intval($_POST['score']) : null;

        if(!isset($user) || $user == "") {
            $error = "Please type a valid username.";
            header("Location: App.js?error=" . urlencode($error));
        } else {
            $query = "INSERT INTO playerscore (user, topic, difficulty, score)
                                VALUES ('$player', '$topic', '$difficulty', '$score')";
            if(!mysqli_query($con, $query)) {
                die(mysqli_error($con));
            } else {
                header("Location: App.js");
                exit();
            }
        }
    }