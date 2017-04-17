$(document).ready(function() {

	// Load the trailers sliders
	$('#movie-trailer-slider').jCarouselLite({
		btnNext: '.md-next-button',
		btnPrev: '.md-prev-button',
		visible: 2,
		auto: 1000,
		speed: 3000,
		//hoverPause: true	// IS NOT WORKING 
	});

	// Load the movies of the month slider
	$('#featured-movies-slider').jCarouselLite({
		btnNext: '.mm-next-button',
		btnPrev: '.mm-prev-button',
		visible: 4,
		auto: 1000,
		speed: 3000, 
		//hoverPause: true	// IS NOT WORKING
	});

});