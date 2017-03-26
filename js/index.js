$(document).ready(function() {

	// Load the trailers sliders
	$('#movie-trailer-slider').jCarouselLite({
		btnNext: '.md-next-button',
		btnPrev: '.md-prev-button',
		visible: 2,
		auto: 1000,
		speed: 2000
	});

	// Load the movies of the month slider
	$('#featured-movies-slider').jCarouselLite({
		btnNext: '.mm-next-button',
		btnPrev: '.mm-prev-button',
		visible: 4,
		auto: 1000,
		speed: 2000
	});

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