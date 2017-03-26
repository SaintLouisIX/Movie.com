function sortByDate(){
	var queryYear = document.getElementById("query_year").value;
	var queryMonth = document.getElementById("query_month").value;
	var films = document.getElementById("results").children;
	for(var i=0; i < films.length; i++){
		if ((films[i].getAttribute("data-date_year") == queryYear && films[i].getAttribute("data-date_month") == queryMonth) ||
		    (films[i].getAttribute("data-date_year") == queryYear && queryMonth =='Any') ||
			(queryYear == 'Any' && films[i].getAttribute("data-date_month") == queryMonth) || 
			(queryYear == 'Any' && queryMonth =='Any')){
			films[i].style.display = 'block';
		} else {
			films[i].style.display = 'none';
		}
	}
}	