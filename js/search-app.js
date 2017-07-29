document.addEventListener("DOMContentLoaded", function(){

	
	document.getElementById('searchBut').addEventListener('click', function(event){
		
		var search = document.getElementById('searchVal').value.toLowerCase();
		
		function searchData() {
			searchArr = [];
			
			for (var i = 0; i < hoppyPlaces.length; i++) {
				for (var j = 0; j < hoppyPlaces[i].beers.style.length; j++) {
					if (hoppyPlaces[i].beers.style[j] == search) {
					searchArr.push(hoppyPlaces[i]);
					break;
					}
				}
			}
			emptyArr();
		}
		searchData();
		
		function emptyArr() {
			if (searchArr.length === 0) {
				alert ('Niestety :( Musisz poszukać czegoś innego')
			}
		}
		showMarkers(searchArr);
		
	});
    
});


