

var map;
var wroclaw = {lat: 51.110, lng: 17.035};
var marker;
var markersArray = [];

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
    center: wroclaw,
    zoom: 14,
	mapTypeId: 'terrain'
    });
	
	
	//Markers
	for (var i = 0; i < hoppyPlaces.length; i++) {  
    	marker = new google.maps.Marker({
			position: hoppyPlaces[i].position,
			map: map,
			clickable: true,
			visible: true
		});
		markersArray.push(marker);
		
		var infowindow = new google.maps.InfoWindow();

		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				infowindow.setContent(hoppyPlaces[i].title);
				infowindow.open(map, marker);
			}
		})(marker, i));
		
		
    }
}


	 