
/* Set up map and markers */
(function initialize() {
  // custom syles for our styled map
  var customStyles = [
    // give the map a bit of a red tint
    {
      stylers: [
        { hue: "#343434" },
        { saturation: -50 }
      ]
    },
    // hide road labels, since we can't read Slovene anyway
    {
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];

  // initial map options
  var mapOptions = {
    center: { 
      "lat": 46.075136001950504, 
      "lng": 14.181976318359375, 
    },
    zoom: 10,
    mapTypeControlOptions: {
      // a default road map and our custom map id, add more ids here for additional custom maps
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'custom_map']
    }
  };

  // instantiate a styled map
  var styledMap = new google.maps.StyledMapType( customStyles, { name: "Styled Map" } );
  // instantiate the map with the custom map options
  var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

  // set the styled map to the custom_map id from our map options
  map.mapTypes.set('custom_map', styledMap);
  // display custom map type first
  map.setMapTypeId('custom_map');

  // load json marker data
  map.data.loadGeoJson('https://api.myjson.com/bins/2c42x');

  var infowindow = new google.maps.InfoWindow({
    content: ""
  });

  // click event for each marker to display the info windows
  map.data.addListener('click', function(event) {
      var title = event.feature.getProperty("title");
      var desc = event.feature.getProperty("description");
      // our content
      infowindow.setContent("<div style='width:150px; margin-left:20px; text-align:center;'><h3>"+title+"</h3><p>"+desc+"</p></div>");
      // set position on the marker
      infowindow.setPosition(event.feature.getGeometry().get());
      // move it up a little
      infowindow.setOptions({pixelOffset: new google.maps.Size(0,-30)});
      // show the info
      infowindow.open(map);
  });
})();
