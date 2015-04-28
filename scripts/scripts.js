
/* Set up map and markers */
(function initialize() {
  // instantiate the map with the initial center coordinates
  var map = new google.maps.Map(document.getElementById("googleMap"), {
    center: { 
      "lat": 46.075136001950504, 
      "lng": 14.181976318359375, 
    },
    zoom: 9
  });

  // load json data
  map.data.loadGeoJson('https://api.myjson.com/bins/2c42x');

  var infowindow = new google.maps.InfoWindow({
    content: ""
  });

  // click event for each marker
  map.data.addListener('click', function(event) {
      var title = event.feature.getProperty("title");
      var desc = event.feature.getProperty("description");
      infowindow.setContent("<div style='width:150px; margin-left:20px; text-align:center;'><h3>"+title+"</h3><p>"+desc+"</p></div>");
      infowindow.setPosition(event.feature.getGeometry().get());
      infowindow.setOptions({pixelOffset: new google.maps.Size(0,-30)});
      infowindow.open(map);
  });
})();
