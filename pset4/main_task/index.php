<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .error {
            color: #FF0000;
        }

        label {
            display: block;;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>

<form action="handler.php" method="post">
    <fieldset>
        <legend>Poll of developer's opinion</legend>
        <h3>What is your favourite programming language?</h3>
        <label for="scratch"><input type="radio" id="scratch" name="lang" value="scratch">Scratch</label>
        <label for="pascal"><input type="radio" id="pascal" name="lang" value="pascal">Pascal</label>
        <label for="haskell"><input type="radio" id="haskell" name="lang" value="haskell">Haskell</label>
        <label for="lisp"><input type="radio" id="lisp" name="lang" value="lisp">Lisp</label>
        <label for="cobol"><input type="radio" id="cobol" name="lang" value="cobol">COBOL</label>
        <input type="submit" name="submit" value="Submit">
    </fieldset>
</form>

</body>
</html>
