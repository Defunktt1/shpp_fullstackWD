<?php

// redirect back if method = get
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    header('Location: login.php');
}

session_start();


// form validation
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
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

    $name = ($_POST["name"]);
    $password = ($_POST["password"]);

    $arr = [];
    $jsonFile = 'users.json';

    if (file_exists($jsonFile)) {
        $users = file_get_contents($jsonFile);
        $arr = json_decode($users, true);
    }

    if (isset($arr[$name]) && $arr[$name]["password"] != $password) {
        $err = 'Wrong password';
        $_SESSION['error'] = $err;
        header('Location: index.php');
    } else if (isset($arr[$name]) && $arr[$name]["password"] == $password) {
        $_SESSION['username'] = $name;
        header('Location: chat.php');
    } else {
        $userId = count($arr) + 1;
        $arr[$name]["id"] = $userId;
        $arr[$name]["username"] = $name;
        $arr[$name]["password"] = $password;
        $_SESSION['username'] = $name;
        $data = json_encode($arr, JSON_PRETTY_PRINT);
        file_put_contents($jsonFile, $data);
        header('Location: chat.php');
    }
}
