var map;


function initMap() {
	
	var mapStyle = [
		{
			"featureType": "water",
			"elementType": "all",
			"stylers": [
				{
					"hue": "#7fc8ed"
				},
				{
					"saturation": 55
				},
				{
					"lightness": -6
				},
				{
					"visibility": "on"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels",
			"stylers": [
				{
					"hue": "#7fc8ed"
				},
				{
					"saturation": 55
				},
				{
					"lightness": -6
				},
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [
				{
					"hue": "#83cead"
				},
				{
					"saturation": 1
				},
				{
					"lightness": -15
				},
				{
					"visibility": "on"
				}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "geometry",
			"stylers": [
				{
					"hue": "#f3f4f4"
				},
				{
					"saturation": -84
				},
				{
					"lightness": 59
				},
				{
					"visibility": "on"
				}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "labels",
			"stylers": [
				{
					"hue": "#ffffff"
				},
				{
					"saturation": -100
				},
				{
					"lightness": 100
				},
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
				{
					"hue": "#ffffff"
				},
				{
					"saturation": -100
				},
				{
					"lightness": 100
				},
				{
					"visibility": "on"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "labels",
			"stylers": [
				{
					"hue": "#bbbbbb"
				},
				{
					"saturation": -100
				},
				{
					"lightness": 26
				},
				{
					"visibility": "on"
				}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [
				{
					"hue": "#ffcc00"
				},
				{
					"saturation": 100
				},
				{
					"lightness": -35
				},
				{
					"visibility": "simplified"
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [
				{
					"hue": "#ffcc00"
				},
				{
					"saturation": 100
				},
				{
					"lightness": -22
				},
				{
					"visibility": "on"
				}
			]
		},
		{
			"featureType": "poi.school",
			"elementType": "all",
			"stylers": [
				{
					"hue": "#d7e4e4"
				},
				{
					"saturation": -60
				},
				{
					"lightness": 23
				},
				{
					"visibility": "on"
				}
			]
		}
	]
	var wroclaw = {lat: 51.110, lng: 17.035};
	
	map = new google.maps.Map(document.getElementById('map'), {
    center: wroclaw,
    zoom: 13,
//	scrollwheel: false,
	styles: mapStyle,
	
    });
}

var markers = []; //empty array for markers
var marker; //single marker


function showMarkers(array) {
	
	var image = {
		url : './img/marker_icon.png',
	}
	markers.forEach(function(marker) {
		marker.setMap(null);
    });
    markers = [];
	
	for (var i = 0; i < array.length; i++) {  
    	markers.push(marker = new google.maps.Marker({
			position: array[i].position,
			map: map,
			icon: image,
		}));
				
		showContent(marker, i);
		}

		
	function showContent(marker, i) {
		
		var infowindow = new google.maps.InfoWindow();
		
		var markerContent = document.createElement('div');
        var strong = document.createElement('strong');
		var beersList = document.createElement('p');
		var link = document.createElement('a');
		var anchore = document.createTextNode("Czytaj więcej");
		
        strong.textContent = array[i].title
        markerContent.appendChild(strong);
		
        beersList.innerHTML = printBeers(i);
        markerContent.appendChild(beersList);
		
		link.appendChild(anchore);
		link.href = array[i].url;
		markerContent.appendChild(link);
		
		
		marker.addListener('click', function() {
			infowindow.setContent(markerContent);
			infowindow.open(map, marker);
		});

    }
	
	function printBeers(i) {
    	var beersArr = searchArr[i].beers.name;
    	var printThis = "";
		for (var j = 0; j < beersArr.length; j++){
				printThis += "<br>"+beersArr[j];
			}
			return printThis;
		}
}

