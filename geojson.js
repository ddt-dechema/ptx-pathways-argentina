



// Function to add the GeoJSON layer to the map
    // Function to add the GeoJSON layer to the map
// function addGeoJSONLayer(filterProperty, filterValue) {
//     fetch(geojsonURL)
//         .then(response => response.json())
//         .then(data => {
//             // Filter the GeoJSON data based on the specified property and value
//             var filteredData = data.features.filter(feature => feature.properties[filterProperty] === filterValue);
//             // console.log(filterValue);
//             // console.log(emissionTypeColors_D[filterValue]);

//             // TO DO DDT
//             // filterProperty - industry type oder point source type
//             // filter value --> Farben
            
//             // Create a GeoJSON layer and add it to the map
//             geojsonLayer = L.geoJSON(filteredData, {
//                 pointToLayer: function (feature, latlng) {
//                     return L.circleMarker(latlng, {
//                         radius: feature.properties.Tonnes / 100000, // statt 37.6 sollte dort die totalMax der Emissionen stehen - hier wurde nun der Wert der E-PRTR Json genommen.
//                         color: emissionTypeColors_D[filterValue],
//                         /*fillColor: feature.properties.color,*/
//                         fillColor: emissionTypeColors_D[filterValue],
//                         weight: 1,
//                         opacity: 0.7,
//                         fillOpacity: 0.4
//                     }).bindPopup(addCO2argentinaPopupHandler(feature));
//             }}) // .addTo(map);

//             layers[filterValue] = geojsonLayer;
//             console.log(layers);
//             geojsonLayer.addTo(map);
//         })
//         .catch(error => {
//             console.error(`Error loading GeoJSON data: ${error}`);
//         });
//     }

// Add event listener to the button
// document.getElementById('industrial-CO2-button').addEventListener('click', function() {
//     addGeoJSONLayer('source', 'Industrial point source');
// });
// document.getElementById('biogenic-CO2-button').addEventListener('click', function() {
//     addGeoJSONLayer('source', 'Biogenic point source');
// });

// Function to toggle layer visibility
// function toggleLayer(layer) {
//     console.log(layer);
//     if (map.hasLayer(layer)) {
//         map.removeLayer(layer);
//     } else {
//         layer.addTo(map);
//     }
//     }

// Add event listeners to toggle buttons
// var toggleButtons = document.querySelectorAll('.toggle-layer-button');
// toggleButtons.forEach(button => {
//     button.addEventListener('click', function () {

//         var layerName = button.getAttribute('data-layer');
//         // console.log(layerName);
//         var layer = layers[layerName];
//         // console.log(layer)
//         if (layer) {
//             toggleLayer(layer);
//         }
//     });
// });


