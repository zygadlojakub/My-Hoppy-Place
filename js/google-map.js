var map;
var wroclaw = {lat: 51.110, lng: 17.035};


function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
    center: wroclaw,
    zoom: 14,
	mapTypeId: 'terrain'
    });
	var marker = new google.maps.Marker({
    	position: {lat: 51.1050, lng: 17.035},
    	map: map,
		clickable: true,
//		cursor: 'test',
		title: 'test title',
		visible: true,
		
    });
}



//var locations = [
//        {lat: 51.1050, lng: 17.035},
//        {lat: 51.1000, lng: 17.020},
//        {lat: 51.1084, lng: 17.038},
//        {lat: 51.1200, lng: 17.000},
//]
	 