 $( document ).ready(function() {
 
	 $('.nav-sub .toggle').click(function(e){
	    $(this).closest('li').toggleClass('active');
	    e.preventDefault();
	    e.stopPropagation(); 
	 });

});