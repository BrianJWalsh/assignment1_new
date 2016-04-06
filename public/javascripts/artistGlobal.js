// Userlist data array for filling in info box
var artistListData = [];


// DOM Ready =============================================================
$(document).ready(function() {
	
    populateArtistTable();

});

// Functions =============================================================

// Fill table with data
function populateArtistTable() {

    // Empty content string
    var artistTableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/artist/artistlist', function( data ) {

		artistListData = data;
        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            artistTableContent += '<tr>';
            artistTableContent += '<td>' + this.id + '</td>';
            artistTableContent += '<td>' + this.fc + '</td>';
            artistTableContent += '<td>' + this.gender + '</td>';		
            artistTableContent += '<td>' + this.birthYear + '</td>';
            artistTableContent += '<td>' + this.totalWorks + '</td>';
            artistTableContent += '<td><a href="' + this.url + '" rel="' + this.url + '">Click</a></td>';
            artistTableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#artistList table tbody').html(artistTableContent);
		$("table").addClass( "table table-bordered tablesorter" );
		
		//wait until ajax call is finished before triggering these functions
		$("#artistTable").tablesorter();
		stylingArtistTable();
    });
};

function stylingArtistTable(){

   $("tr td:contains('Male')").each(function(){
	  $(this).text() === 'Male';
	  $(this).parents('tr').css("background-color","#D1EEEE");
	});
	
	$("tr td:contains('Female')").each(function(){
	  $(this).text() === 'Female';
	  $(this).parents('tr').css("background-color","#f3e5f5");
	});
	
	$("tr td:contains('null')").each(function(){
	  $(this).text() === 'null';
	  $(this).parents('tr').css("background-color","#CD9B9B");
	});
	
}
