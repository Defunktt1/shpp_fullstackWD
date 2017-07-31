<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="chatstyle.css">
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Pacifico">
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Montserrat">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <title>Chat</title>
</head>

<body>

<div class="logout">
    <form method="post" action="logout.php">
        <input name="logout" type="submit" id="logout" value="logout">
    </form>
</div>

<div class="container">

    <div class="welcome">
        <div class="logo">Easy Chat</div>
        <div class="username">Welcome <?php if (!empty($_SESSION['username'])) {
                echo $_SESSION['username'];
            } ?></div>
    </div>

    <div class="chat-window" id="chat-window"></div>

    <div class="wrapper-message_chat">
        <form class="form_chat" action="chat_data.php" method="post">
            <input type="text" id="message" name="message" class="message_chat">
            <input type="submit" id="message_submit_button" class="submit_chat" value="Send">
        </form>
    </div>

</div>

<script src="script.js"></script>

</body>
</html>
