<?php

if ($_SERVER['REQUEST_METHOD'] == 'GET')
    header('Location: index.php');

$server = "localhost";
$username = "root";
$password = "123123";
$dbname = "chat";

// Create connection
$conn = mysqli_connect("localhost", $username, $password, $dbname);

// Check connection
if (!$conn)
    die("Connection failed: " . mysqli_connect_error());
