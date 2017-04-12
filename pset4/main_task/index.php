<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

<form action="handler.php" method="POST">
    <fieldset>
        <h3>How old are you?</h3>
        <label for="1"><input type="radio" id="1" name="lang" value="0-16">0-16</label>
        <hr>
        <label for="2"><input type="radio" id="2" name="lang" value="17-23">17-23</label>
        <hr>
        <label for="3"><input type="radio" id="3" name="lang" value="24-32">24-32</label>
        <hr>
        <label for="4"><input type="radio" id="4" name="lang" value="33-45">33-45</label>
        <hr>
        <label for="5"><input type="radio" id="5" name="lang" value="46-60">46-60</label>
        <hr>
        <label for="6"><input type="radio" id="6" name="lang" value="61-more">61-more</label>
        <hr>
        <input type="submit" name="submit" value="Submit">
    </fieldset>
</form>

</body>
</html>
