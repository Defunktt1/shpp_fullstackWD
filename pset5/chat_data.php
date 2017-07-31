<?php

if($_SERVER['REQUEST_METHOD'] == 'GET'){
    header('Location: login.php');
}

session_start();

$messages = 'messages.json';
if (isset($_POST['msg']) && isset($_POST['ts']) && !empty($_SESSION['username'])) {
    $message = $_POST['msg'];
    $time = $_POST['ts'];
    $username = $_SESSION['username'];
    $message = str_replace(":)", '<img src="smiles/smile.png">', $message);
    $message = str_replace(":(", '<img src="smiles/sad.png">', $message);
    $messageData = ['time' => $time, 'user' => $username, 'message' => $message];

    $jsonData = [];

    if (file_exists($messages)) {
        $jsonData = file_get_contents($messages);
        $arrData = json_decode($jsonData, true);
    }

    $arrData[] = $messageData;
    $jsonData = json_encode($arrData, JSON_PRETTY_PRINT);
    file_put_contents($messages, $jsonData);
    header('Content-Type: application/json');
    echo $jsonData;

} else {
    if (file_exists($messages)) {
        $jsonData = file_get_contents($messages);
    }

    header('Content-Type: application/json');
    echo $jsonData;
}
