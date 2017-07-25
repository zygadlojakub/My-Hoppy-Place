document.addEventListener("DOMContentLoaded", function(){
    
    var searchOne = "ipa";      //z input'a (getElementById("myText").value), jako string
	var searchTwo = "stout";
	
	var result = [];
	
	
	function searchData() {
		for (var i = 0; i < hoppyPlaces.length; i++) {
			if (hoppyPlaces[i].beers.style == searchOne) {
				result.push({});
			}
		}
	}
	searchData();
	
	
	
	//lece pętła po tablicy obektów, sprawdzam if'em czy jest równy stringowi ze zmiennej z wyszukiwarki i jezeli tak to pushem wsadzam objekt do kolejnej tablicy ktora pozniej wyswietlę.
	
    
});


