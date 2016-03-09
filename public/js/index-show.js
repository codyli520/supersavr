$( document ).ready(function() {
    google.charts.load("44", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
});


 function drawChart() {
        
        var data = new google.visualization.DataTable();

// Declare columns
        data.addColumn('string', 'Type');
        data.addColumn('number', 'Amount');
        data.addRows([
            ['Saving',Number(saving)],
            ['Needs',Number(needs)]
            ]);
        /*var data = google.visualization.arrayToDataTable([
          ['Goal', 'Saving'],
          ['Saving',  473],
          ['Goal',   27]
        ]);*/

        var options = {
            pieHole: 0.4,
            legend: {position: 'bottom', 'textStyle': { 'color': 'gray' } },
            backgroundColor: 'transparent'
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));

        /*if('color0'){
          options.backgroundColor = sessionStorage.getItem('color0');
        }*/
        chart.draw(data, options);
}

function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}
