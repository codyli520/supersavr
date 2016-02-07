$( document ).ready(function() {
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
});


 function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Goal', 'Saving'],
          ['Saving',  473],
          ['Goal',   27]
        ]);

        var options = {
            pieHole: 0.4,
            legend: {position: 'none'}
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
}