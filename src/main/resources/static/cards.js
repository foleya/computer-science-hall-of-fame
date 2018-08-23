/*
 * This file has pre-written code to get a shuffled deck ID.
 * It is your job to fill in the main function so that when a user clicks
 * the button cards are drawn and added to the page. You can have it
 * draw just one card at a time or multiple.
 * 
 * See https://deckofcardsapi.com/
 */

var container = document.getElementById("cards");
var drawButton = document.getElementById("draw");

var request = new XMLHttpRequest();
// this will open the connection and allow us to get data
// first param is what we want to do "GET", second param is the json url
request.open("GET", "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
// when the AJAX response loads...
request.onload = function() {
	var data = JSON.parse(request.responseText);
	main(data.deck_id);
};
request.send();

function main(deckId) {
	console.log(deckId);
	// You must write all code inside this main function because only here
	// is the deckId available to use.
	
	drawButton.addEventListener("click", function() {
						
		request.open("GET", "https://deckofcardsapi.com/api/deck/" + deckId + "/draw/?count=1");
		
		request.onload = function () {
			
			var data = JSON.parse(request.responseText);
			renderHTML(data);
		}
		request.send();
		
	});
}

function renderHTML(data){
	for (var card of data.cards) {
		var htmlString = "<p>"
						 + toTitleCase(card.value)
						 + " of " + toTitleCase(card.suit)
						 + "</p><img src='" 
						 + card.image
						 + "'>";
		container.insertAdjacentHTML("beforeend", htmlString);
	}
	
}

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}