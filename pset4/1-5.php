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

<!--------------- Task 1 ------------------------>

<strong>Task 1:</strong>
<h3>Sum of numbers from -1000 to 1000:</h3>
<p><?= task1(); ?></p>
<hr>

<!--------------- Task 2 ------------------------>

<strong>Task 2:</strong>
<h3>Sum of numbers from -1000 to 1000 if the last number is 2, 3 or 7</h3>
<p><?= task2(); ?></p>
<hr>

<!--------------- Task 3 ------------------------>

<strong>Task 3:</strong>
<p>Pyramid</p>
<p><?= task3(); ?></p>
<hr>

<!---Task 4 and 5-->
<div>
    <form action="" method="post">
        <label for="dim1"><strong>Task 4: <br>
            </strong>Board
        </label><br>
        Enter first dimension (from 1 to 50): <input id="dim1" name="row" type="number" min="1" max="50">
        Enter second dimension (from 1 to 50): <input type="number" name="col" min="1" max="50">
        <table cellspacing="0px" cellpadding="0px" border="1px">
            <?php task4(); ?>
        </table>
        <input type="submit" name="submit1">
        <hr>
        <!-- task 5 -->
        <label for="int"><strong>Task 5: </strong><br>Sum of elements in number</label><br>
        Enter an integer: <input id="int" name="num" type="number">
        <p><?= task5(); ?></p>
        <input type="submit" name="submit2">

    </form>
</div>

<?php
function task1()
{
    $result = array_sum(range(-1000, 1000));

    return $result;
}

function task2()
{
    $result = 0;
    $arr = range(-1000, 1000);
    foreach ($arr as $value) {
        if (abs($value) % 10 == 2 || abs($value) % 10 == 3 || abs($value) % 10 == 7) {
            $result += $value;
        }
    }

    return $result;
}

function task3()
{
    $height = 50;
    for ($i = 1; $i <= $height; $i++) {
        $stars = str_repeat('*', $i);
        echo $stars . '<br/>';
    }
}

function task4()
{
    if (isset($_POST['submit1'])) {
        if (!empty($_POST['row']) && !empty($_POST['col'])) {
            $rowAmount = $_POST['row'];
            $colAmount = $_POST['col'];
        } else { // if fields are empty...
            echo "empty fields";
            return;
        }
        for ($i = 1; $i <= $rowAmount; $i++) {
            echo "<tr>";
            for ($col = 1; $col <= $colAmount; $col++) {
                $total = $i + $col;
                if ($total % 2 == 0) {
                    echo "<td height=40px width=40px bgcolor=#FFFFFF></td>";
                } else {
                    echo "<td height=40px width=40px bgcolor=#000000></td>";
                }
            }
            echo "</tr>";
            echo "</hr>";
        }
    }
}

function task5()
{
    if (isset($_POST['submit2'])) {
        if (!empty($_POST['num'])) {
            $number = $_POST['num'];
        } else { // if field is empty
            echo "empty field";
            return false;
        }
        $sum = array_sum(str_split($number));

        return $sum;
    }
}

?>
</body>
</html>