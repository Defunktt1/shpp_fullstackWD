<?php

// redirect back if method = get
if ($_SERVER['REQUEST_METHOD'] == 'GET')
    header('Location: login.php');

session_start();


require 'sqlconnect.php';

// form validation
$err = '';
if (empty($_POST['name'])) {
    $err = 'Please, provide your name';
    $_SESSION['error'] = $err;
    header('Location: index.php');
} else if (empty($_POST['password'])) {
    $err = 'Please, provide your password';
    $_SESSION['error'] = $err;
    header('Location: index.php');
} else if ((empty($_POST['name'])) && (empty($_POST['password']))) {
    $err = 'Please, provide your name and password';
    $_SESSION['error'] = $err;
    header('Location: index.php');
}

$name = sqlProtection($_POST["name"]);
$password = sqlProtection($_POST["password"]);
$_SESSION['username'] = $name;

// get data from database
$selectQuery = "SELECT * FROM users WHERE name = '$name' OR password = '$password'";
$result = mysqli_query($conn, $selectQuery);
$fetchedArray = mysqli_fetch_assoc($result);


// login if user in database
if (mysqli_num_rows($result) > 0) {
    while ($fetchedArray) {
        if ($fetchedArray['name'] == $name && $fetchedArray['password'] == $password) {
            $_SESSION['user_id'] = $fetchedArray['id'];
            header('Location: chat.php');
        } else if ($fetchedArray['name'] == $name && $fetchedArray['password'] != $password) {
            $err = 'Wrong password';
            $_SESSION['error'] = $err;
            header('Location: index.php');
        }
    }
    // else create new user
} else {
    $query = mysqli_prepare($conn, "INSERT INTO users (name, password) VALUES (?, ?)"); // prepare sql statement
    mysqli_stmt_bind_param($query, 'ss', $name, $password); // binds variables to a prepared statement, "ss" means type of variables (string)
    mysqli_stmt_execute($query); // execute query
    mysqli_stmt_close($query); // close connection

    // if there are no errors
    if (!mysqli_stmt_error($query)) {
        header('Location: chat.php');
    } else { // else show mysql error
        echo mysqli_stmt_error($query);
    }
}

// protect from SQL injection
function sqlProtection($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}