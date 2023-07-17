
var myMap = L.map("map", {
    center: [41.74472401460008, -72.70585209595349],
    zoom: 9
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// An array containing each city's name, location, and population
var cities = [{ name: "Tolland County", location: [41.856091268283905, -72.35328823054982], MaleDeath: 25, FemaleDeath: 4 },
{ name: "Middlesex County", location: [41.557174834352054, -72.65787603855522], MaleDeath: 26, FemaleDeath: 10 },
{ name: "New London County", location: [41.410061278159304, -72.08660183052402], MaleDeath: 75, FemaleDeath: 41 },
{ name: "New Haven County", location: [41.360076125906005, -72.94314923375956], MaleDeath: 346, FemaleDeath: 107 },
{ name: "Litchfield County", location: [41.75409568537964, -73.12777056628137], MaleDeath: 46, FemaleDeath: 15 },
{ name: "Windham County", location: [41.74546334265901, -72.14278319227361], MaleDeath: 23, FemaleDeath: 13 },
{ name: "Fairfield County", location: [41.15634329102451, -73.34143285254382], MaleDeath: 153, FemaleDeath: 68 },
{ name: "Hartford County", location: [41.74472401460008, -72.70585209595349], MaleDeath: 235, FemaleDeath: 94 },
];


// Looping through the cities array, create one marker for each city, bind a popup containing its name and population, and add it to the map.
for (var i = 0; i < cities.length; i++) {
    var city = cities[i];
    L.marker(city.location)
        .bindPopup(`<h1>${city.name}</h1> <hr> <h3> MaleDeath 2022: ${city.MaleDeath}</h3> <hr> <h3> femaleDeath 2022: ${city.FemaleDeath}`)
        .addTo(myMap);
}

