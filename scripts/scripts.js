
/* Set up map and markers */
function initialize() {
  var map = new google.maps.Map(document.getElementById("googleMap"), {
    center: { 
      "lat": 46.075136001950504, 
      "lng": 14.181976318359375, 
    },
    zoom: 9
  });

  map.data.loadGeoJson('https://api.myjson.com/bins/2c42x');
};

google.maps.event.addDomListener(window, 'load', initialize);
