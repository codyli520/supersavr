$( document ).ready(function() {
          
    $('.nav-header').html('<a class="navbar-brand"><button type="button" class="btn btn-default btn-sm" onclick="location.href=&quot;../index.html&quot;"> <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></button>&nbsp;Goal</a>');
            
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    
});
  
function drawChart() {
    var data = google.visualization.arrayToDataTable([
          ['Item', 'Dollars Saved'],
          ['Groceries',     11],
          ['Restaurants & Fast Food',      2],
          ['Uber & Transit',  2],
          ['Clothes', 2],
          ['Misc',    7]
    ]);

    var options = {
        title: 'Money Saved'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}