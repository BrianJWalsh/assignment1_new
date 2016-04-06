var artistArray = ["artist1.jpg", "artist2.jpg", "artist3.jpg"];
var artworkArray = ["artwork1.jpg", "artwork2.jpg", "artwork3.jpg"]

$(document).ready(function() {

	displayRandomImages();
	
});

function displayRandomImages(){
	
	var artistNumber = Math.floor(Math.random() * 3);
	var artworkNumber = artistNumber;
	$('#artistRandom').append('<img id="artist" src="/images/' + artistArray[artistNumber] +  '" />');
	$('#artworkRandom').append('<img id="artwork" src="/images/' + artworkArray[artworkNumber] +  '" />');
}; 