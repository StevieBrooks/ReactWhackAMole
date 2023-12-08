<?php
    header("Access-Control-Allow-Origin: http://localhost:3000");

    include 'database.php';

    if(isset($_POST['submit'])) {
        $user = mysqli_real_escape_string($con, $_POST['user']);
        $rating = intval($_POST['rating']);
        $comment = mysqli_real_escape_string($con, $_POST['comment']);

        // need to figure out how to use date and display that properly
        // another tweak - make new feedback display instantly

        if(!isset($user) || $user == "" || !isset($rating) || $rating == "" || !isset($comment) || $comment == "") {
            $error = "Please complete every section of form";
            header("Location: localhost:3000?error=" . urlencode($error));
        } else {
            $query = "INSERT INTO playerfeedback (user, rating, comment)
                        VALUES ('$user', '$rating', '$comment')";
            if(!mysqli_query($con, $query)) {
                echo "Error: Query executed unsuccessfully " . mysqli_error($con);
            } else {
                header("Location: localhost:3000");
                exit();
            }
        }
    }