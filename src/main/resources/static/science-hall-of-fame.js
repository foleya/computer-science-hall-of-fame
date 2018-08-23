var shof = "https://dwolverton.github.io/fe-demo/data/computer-science-hall-of-fame.json";
var btn = document.getElementById("load-more"); // create a pointer reference to the button in index.jsp
var swapiContainer = document.getElementById("results");

// when the button is clicked...
btn.addEventListener("click", function() {
	var request = new XMLHttpRequest();
	// this will open the connection and allow us to get data
	// first param is what we want to do "GET", second param is the json url
	request.open("GET", shof);

	// when the AJAX response loads...
	request.onload = function() {
		
		console.log(request.responseText);
		var data = JSON.parse(request.responseText);
		var dataCompleteSortedByYear = data.complete.sort(function(a, b) {return a.year - b.year});

		renderHTML(dataCompleteSortedByYear);
		
		btn.classList.add("hide-me")
		
	};

	request.send();
	
});

// created to render the HTML to the page, can reuse this by making modifications 
function renderHTML(dataCompleteSortedByYear){
	for (var entry of dataCompleteSortedByYear) {
		var htmlString = "<p>"
						 + entry.firstName 
						 + " " + entry.lastName 
						 + ": " + entry.innovation
						 + " (" + entry.year
						 + ")</p>";
		swapiContainer.insertAdjacentHTML("beforeend", htmlString);
	}
	
}