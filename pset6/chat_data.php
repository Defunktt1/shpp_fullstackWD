<?php

session_start();

if ($_SERVER['REQUEST_METHOD'] == 'GET')
    header('Location: login.php');


require ('sqlconnect.php');

if (isset($_POST['id'])) {
    $last_id = $_POST['id'];

    $selectQuery = "SELECT messages.id as message_id, TIME(time) as time, name, message FROM messages
                    JOIN users ON messages.user_id = users.id WHERE messages.id > '$last_id'
                    AND time >= DATE_SUB(NOW(), interval 1 hour);";

    $result = mysqli_query($conn, $selectQuery);
    $selectArray = [];
    if (mysqli_num_rows($result) > 0) {
        while ($fetchedArray = mysqli_fetch_assoc($result)) {
            $selectArray[] = [
                                    'time' => $fetchedArray['time'],
                                    'user_name'=> $fetchedArray['name'],
                                    'message_text' => $fetchedArray['message'],
                                    'message_id' => $fetchedArray['message_id']
                                   ];
        }
    }
    header('Content-Type: application/json');
    echo json_encode($selectArray);
}

mysqli_close($conn);
