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
         if (document.getElementById('columnchart_material') != null ){
         var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
         chart.draw(data, google.charts.Bar.convertOptions(options));}
     }
 });

 $(document).ready(function() {
 // executes when HTML-Document is loaded and DOM is ready
console.log("document is ready");
  
// popover trigger

  
  
// enable toggles everywhere
  $('[data-toggle="tooltip"]').tooltip();

  
 
  
// enable popovers everywhere  
  
$('[data-toggle="popover"]').popover();
  
  
  $('.body').scrollspy({ target: '#navbar-example2' })
  
  
  
  
  // http://stackoverflow.com/questions/17534661/make-anchor-link-go-some-pixels-above-where-its-linked-to
  // The function actually applying the offset
function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 100);
  }
}

// Captures click events of all <a> elements with href starting with #
$(document).on('click', 'a[href^="#"]', function(event) {
  // Click events are captured before hashchanges. Timeout
  // causes offsetAnchor to be called after the page jump.
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});

// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);
  
  
// document ready  
});



