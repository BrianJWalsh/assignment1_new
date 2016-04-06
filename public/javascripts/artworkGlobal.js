var artworkListData = [];

$(document).ready(function() {

    // Populate the user table on initial page load
    //populateArtistTable();
	populateArtworkTable();
	

});


function populateArtworkTable() {

    // Empty content string
    var artworkTableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/artwork/artworklist', function( data ) {

		artworkListData = data;
        // For each item in our JSON, add a table row and cells to the content string
	
        $.each(data, function(){
            artworkTableContent += '<tr>';
            artworkTableContent += '<td>' + this.id + '</td>';
			artworkTableContent += '<td>' + this.title + '</td>';
			artworkTableContent += '<td><img src="' + this.thumbnailUrl + '" height=80 width =80></td>';
			artworkTableContent += '<td>' + this.all_artists + '</td>';
			artworkTableContent += '<td>' + this.dateText + '</td>';
			artworkTableContent += '<td>' + this.medium + '</td>';
            artworkTableContent += '<td><a href="' + this.url + '" rel="' + this.url + '">Click</a></td>';
            artworkTableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#artworkList table tbody').html(artworkTableContent);
        $("table").addClass( "table table-striped table-bordered tablesorter" );
		
		$("#artworkTable").tablesorter({ sortList: [[0, 0], [4, 0]] });
		stylingArtworkTable()
    });
};

function stylingArtworkTable(){
	
		
		$("tr td:contains('17')").each(function(){
		  $(this).parents('tr').css("background-color","#fbe9e7");
		});
		
		$("tr td:contains('18')").each(function(){
		  $(this).parents('tr').css("background-color","#f3e5f5");
		});
		
		$("tr td:contains('19')").each(function(){
		  $(this).parents('tr').css("background-color","#CD9B9B");
		});
		
		$("tr td:contains('reprented')").each(function(){
		  $(this).parents('tr').css("background-color","#D1EEEE");
		});
		
		$("tr td:contains('not')").each(function(){
		  $(this).parents('tr').css("background-color","#eceff1");
		});
		
	}