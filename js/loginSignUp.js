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
	evt.preventDefault();
    document.getElementById('my-form').style.display ='block'; 
	document.getElementById('Login_tabcontent').style.display = 'block';
	document.getElementById('Login_tablink').className += " active";
}

function closePressed(evt) {
	evt.preventDefault();
	var i, tabcontent, tablink;
	tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById('my-form').style.display='none';
	document.getElementById('login-form').reset();
	document.getElementById('signup-form').reset();
}
