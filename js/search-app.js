document.addEventListener("DOMContentLoaded", function(){
    
	var searchArr = [];
	
	
	
	document.getElementById('searchBut').addEventListener('click', function(event){
		
		var search = document.getElementById('searchVal').value;
		
		function searchData() {
			searchArr = [];
			
			for (var i = 0; i < hoppyPlaces.length; i++) {
				if (hoppyPlaces[i].beers.style == search) {
					searchArr.push(hoppyPlaces[i]);
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
		
		console.log(searchArr);
		
		
		
	});
	
	

	
	
	
	
	
	
	
	
	//lece pętła po tablicy obektów, sprawdzam if'em czy jest równy stringowi ze zmiennej z wyszukiwarki i jezeli tak to pushem wsadzam objekt do kolejnej tablicy ktora pozniej wyswietlę.
	
    
});


