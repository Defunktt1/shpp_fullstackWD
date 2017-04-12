<?php

$lang = "";

if (!isset($_POST["lang"])) {
    die("Wrong input!");
} else {
    $lang = $_POST["lang"];
}

$fileTxt = 'data.json';

$arrData = array();

if(file_exists($fileTxt)) {
    $jsonData = file_get_contents($fileTxt);
    $arrData = json_decode($jsonData, true);
}

(isset($arrData[$lang])) ? $arrData[$lang] ++ : $arrData[$lang] = 1;

$jsonData = json_encode($arrData, JSON_PRETTY_PRINT);
file_put_contents('data.json', $jsonData);

header('Content-Type: application/json');
echo $jsonData;

if (isset($_POST['submit'])) {
    header('Location: chart.html');
}

