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

/* Login and Sign up forms */
function openTab(evt, tabName) {
    var i, tabcontent, tablink;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function menuLoginPressed(evt) {
	event.preventDefault();
    document.getElementById('my-form').style.display ='block'; 
	document.getElementById('Login_tabcontent').style.display = 'block';
	document.getElementById('Login_tablink').className += " active";
}
