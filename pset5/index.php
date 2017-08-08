<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Chat</title>
    <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="styles/indexstyle.css">
</head>

<body>
<div class="container">
    <div class="login-form">
        <p class="logo">Easy Chat</p>
        <form action="login.php" method="post">
            <label><b>Enter your name</b></label><br>
            <input type="text" name="name" required><br>
            <label><b>Enter your password</b></label><br>
            <div class="heal"></div>
            <input type="password" name="password" required><br>

            <div class="field">
                <input type="submit" name="submit" value="Submit">
            </div>

            <span class="error">
            <?php
            if (isset($_SESSION['error'])) {
                echo $_SESSION['error'];
                unset($_SESSION['error']);
            } ?>
        </span>

        </form>
    </div>
</div>
</body>
</html>
