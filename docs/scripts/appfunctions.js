 $(document).ready(function() {

     $('.nav-sub .toggle').click(function(e) {
         $(this).closest('li').toggleClass('active');
         e.preventDefault();
         e.stopPropagation();
     });


     google.charts.load('current', { 'packages': ['bar'] });
     google.charts.setOnLoadCallback(drawChart);
     function drawChart() {
         var data = google.visualization.arrayToDataTable([
             ['Quarter', 'Your Score', 'Your Facility*', 'All Facilities'],
             ['Q2 2016', 15, 12, 13],
             ['Q3 2016', 17, 14, 13],
             ['Q4 2016', 17, 15, 14],
             ['Q1 2017', 16, 14, 13]
         ]);
         var options = {
             chart: {
                 title: 'Success Metric 5',
                 subtitle: 'Hospital has access to cardiology expertise 24/7, ideally onsite cardiologist. (17 possible points)',
             },

             bars: 'verticaL', // Required for Material Bar Charts
             height: 400,
             hAxis: { format: 'decimal' },
             vAxis: { format: 'decimal', viewWindow: { max: 17, min: 0 } },
             colors: ['#E87D1E', '#0088AA', '#A1A0A4']
         };
         var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
         chart.draw(data, google.charts.Bar.convertOptions(options));
     }
 });