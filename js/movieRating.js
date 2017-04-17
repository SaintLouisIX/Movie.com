$(document).ready(function() {

	// Simple Stars Rating System
	var rating = $('.movie-rating li');

	rating.hover(
		function() {
			$(this).css({'background-position': '0 -18px'});
			$(this).prevAll().css({'background-position': '0 -18px'});
			$(this).nextAll().css({'background-position': '0 0'});
		},
		function() {
			$(this).css({'background-position': ''});
			$(this).prevAll().css({'background-position': ''});
			$(this).nextAll().css({'background-position': ''});
		}
	);

	rating.click(function() {
		$(this).addClass('rated');
		$(this).prevAll().addClass('rated');
		$(this).nextAll().removeClass('rated');
	});

});