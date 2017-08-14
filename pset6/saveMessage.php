<?php

session_start();

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    header('Location: login.php');
}

require ('sqlconnect.php');

$username = $_SESSION['username'];

$selectId = "SELECT id FROM users WHERE name = '$username'";
$queryIdRes = mysqli_query($conn, $selectId);
$valueId = mysqli_fetch_assoc($queryIdRes);
$_SESSION['user_id'] = $valueId['id'];
$user_id = $_SESSION['user_id'];

if (isset($_POST['msg'])) {
    $message = test_input($_POST['msg']);

    $query = mysqli_prepare($conn, "INSERT INTO messages (message, user_id) VALUES (?, ?)");
    mysqli_stmt_bind_param($query, 'si', $message, $user_id); //si means string and integer
    mysqli_stmt_execute($query);
    mysqli_stmt_close($query);
}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

mysqli_close($conn);
