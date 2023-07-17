var myMap = L.map("map", {
    center: [41.682555, -72.652228],
    zoom: 9.25,
    //layers:[baseLayer, heatmapLayer]
  });
// var baseMaps = {
//     street: baseLayer,
//     counties:      ,
// };
var baseLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

var link = 'total.json';
//ERROR: trying to read json with d3
// Getting the data with d3
var ODs = []
d3.json(link).then(function(response) {
    //Create marker for cluster group
    

    //Looping through the data
    for (var i = 0; i < response.length; i++) {
    
         if (response[i].latitude) {   
         ODs.push([response[i].latitude, response[i].longitude])
         }

         }

     }
 );
var heat = L.heatLayer(ODs, {
    radius: 10,
    blur: 30
}).addTo(myMap)

//var data = {
    //max: 10000,
    //data: ODs
//};
// var cfg = {
//     "radius": 2,
//     "maxOpacity": .8,
//     "scaleRadius": true,
//     "useLocalExtrema": true,
//     latField: [2],
//     lngField:[1],
//     vauleField: [0]
// };

// var heatmapLayer = new HeatmapOverlay(cfg)


// heatmapLayer.setData(data)