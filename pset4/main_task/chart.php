<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Chart</title>
</head>
<body>

<div id="chartDiv"></div>
<?php
$jsonFile = 'data.json';
$data = file_get_contents($jsonFile);
if (empty($data)) {
    echo "No one voted yet";
}
?>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script type="text/javascript">

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        $.ajax({
            url: "data.json",
            dataType: 'json',
            success: function (data) {
                var key;
                var table = [];

                for (key in data) {
                    table.push([key, data[key]]);
                }
                renderData(table);
            }
        });

        function renderData(getData) {
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Prefered language');
            data.addColumn('number', 'Votes');
            data.addRows(getData);

            var options = {
                title: 'Population by age',
                is3D: 'true',
                width: 800,
                height: 600
            };

            var chart = new google.visualization.PieChart(document.getElementById('chartDiv'));
            chart.draw(data, options);
        }
    }
</script>

</body>
</html>

