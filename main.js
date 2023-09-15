const element = document.getElementById('sidebar');
element.style.backgroundColor = baseColors.base_first; // Set the background color to the first color in the palette (Red)

// function load_home(){
//     document.getElementById("ToIncludeIntroduction").innerHTML='<object type="type/html" data="home.html" ></object>';
// }




//////////////////////////////////////////////////////////////////////////////////////////////////
// OLLI
// define global variables
let map, format1Dec, formatSI,
    CO2globalButton = document.getElementById("CO2-global-button"),
    scale = document.getElementById("scale")
    CO2_argentinaButton = document.getElementById("CO2-argentina-button")


// Argentina center 
// -38.45155,-63.5988853
function showMap() {
    /* allows us to create filters within a Leaflet GeoJSON layer */
    L.GeoJSON.include({
        setFilter: function (originalData, _) {
            this.options.filter = _
            this.clearLayers()
            this.addData(originalData)
            return this
        }
    })

    // in potana-dev gab es folgenden Teil
    // map.layout = { }

    /* Set up the map with initial center and zoom level */
    map = L.map('map', {
        center: [-38.45155, -63.5988853], // show Argentina
        zoom: 5, // roughly show Europe from 1 to 18 -- decrease to zoom out, increase to zoom in)
        scrollWheelZoom: false,
        zoomControl: false // to put the zoom butons on the right
    })

    L.control.zoom({
        position: 'topright'
    }).addTo(map)
    /* Carto light-gray basemap tiles with labels */
    map.light = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap<\/a>, &copy; <a href="https://carto.com/attribution">CARTO<\/a>, <a href="http://prtr.ec.europa.eu">E-PRTR</a>'
    })
    /* Current default map. Switch by puting the .addTo above */
    /* Thunderforest green tiles with more information */
    map.green = L.tileLayer('https://tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=9a85f60a13be4bf7bed59b5ffc0f4d86', {
            attribution: 'Maps &copy; <a href="https://www.thunderforest.com">Thunderforest</a>, Data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>, <a href="http://prtr.ec.europa.eu">E-PRTR</a>'
        })
        .addTo(map)

    /* Add the zoom buttons */
    map.sidebar = L.control.sidebar('sidebar', {
        position: 'left'
    }).addTo(map)


    /* On the map, scrolling should zoom */
    map.on('focus', () => {
        map.scrollWheelZoom.enable()
    })
    /* Outside of the map, scrolling should not zoom */
    map.on('blur', () => {
        map.scrollWheelZoom.disable()
    })
    /* This is to put the emissions in the foreground on high zoom levels */
    map.on("zoomend", function (e) {
        for (type in chemicalParkMarkers) {
            if (e.target._zoom > 7 && !chemicalParkMarkers.isBack) {
                chemicalParkMarkers[type].bringToBack()
                chemicalParkMarkers[type].isBack = true
            } else {
                chemicalParkMarkers[type].bringToFront()
                chemicalParkMarkers[type].isBack = false
            }
        }
    })

    // in potana-dev kam noch das hier:
    // map.createPane('labels')
	// map.getPane('labels').style.zIndex = 620; // a value of 650 will make the TileLayer with the labels show on top of markers but below pop-ups.
	// map.getPane('labels').style.pointerEvents = 'none'; // If a user clicks anywhere on the map, the web browser will assume she clicked on the labels tiles, and not on the GeoJSON or on the markers

	// var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
	// 	attribution: '©OpenStreetMap, ©CartoDB'
	// }).addTo(map);

	// var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
	// 	attribution: '©OpenStreetMap, ©CartoDB',
	// 	pane: 'labels'
	// }).addTo(map);
}




/*********************************************************/
/* Definitions of colors, NACE categories etc. */

//////////////////////////////////////////////////////////////////////////////
// BASIC FUNCTIONS


function loadGlobalDefs() {
    // show all numbers with 1,000.00 format
    format1Dec = d3.format(',.1f')
    formatSI = d3.format(',.3f')
}

/* create scale for the index.html */
let createScale = () => {
	var height = 75;
	var width = 130;
	var svg = d3.select("#scale")
		.append("svg")
		.attr("width", width)
		.attr("height", height);

	// The scale you use for bubble size
	var size = d3.scaleSqrt()
		.domain([0, 100]) // What's in the data, min-max
		.range([0, 50]) // Size in pixel
	;
	// Add legend: circles
	var valuesToShow = [2, 10, 50]; // [globalEmissionData.stats.totalMax / 100, globalEmissionData.stats.totalMax / 10, globalEmissionData.stats.totalMax]
	var xCircle = 38;
	var xLabel = 100;
	var yCircle = 74;
	svg
		.selectAll("legend")
		.data(valuesToShow)
		.enter()
		.append("circle")
		.attr("cx", xCircle)
		.attr("cy", function(d) {
			return yCircle - size(d);
		})
		.attr("r", function(d) {
			return size(d);
		})
		.style("fill", "black") // changed by DDT from none to black
		.style("stroke", "black")
		.style("stroke-width", "0.8")
		.style("fill-opacity", "0.4") // added by DDT
		.attr("stroke", "black");

	// Add legend: segments
	svg
		.selectAll("legend")
		.data(valuesToShow)
		.enter()
		.append("line")
		.attr('x1', function(d) {
			return xCircle + size(d);
		})
		.attr('x2', xLabel)
		.attr('y1', function(d) {
			return yCircle - size(d);
		})
		.attr('y2', function(d) {
			return yCircle - size(d);
		})
		.attr('stroke', 'black')
		.style("stroke", "black")
		.style("stroke-width", "0.8")
		.style('stroke-dasharray', ('2,2'));

	// Add legend: labels
	svg
		.selectAll("legend")
		.data(valuesToShow)
		.enter()
		.append("text")
		.attr('x', function(d) {
			return xLabel + (d >= 10 ? 1 : 7);
		})
		.attr('y', function(d) {
			return yCircle - size(d);
		})
		.text(function(d) {
			return format1Dec(d);
		}) // to display in Mt
		.style("font-size", 10)
		.attr('alignment-baseline', 'middle');
};

let emissionColors = {
        "CO2, industrial": 'rgb(241, 177, 48)',
        "CO2, biogenic": 'rgb(234,110,57)'
    }
    // ,
    // chemicalColors = {
    //     "chemical parks": "rgb(0,168,189)",
    //     "polyol plants": "rgb(12,168,118)",
    //     "steel mills": "yellow"
    // }

function toggleLayer(button, layer) {
    return function() {
        button.classList.toggle("is-info");
        if (map.hasLayer(layer)) {
            map.removeLayer(layer);
        } else {
            map.addLayer(layer);
        }
    };
}

function toggleLayerScale(button, layer, scale) {
    return function() {
        button.classList.toggle("is-info");
        if (map.hasLayer(layer)) {
            map.removeLayer(layer);
            scale.style.display = "none";
        } else {
            map.addLayer(layer);
            scale.style.display = "block";
        }
    };
}

function toggleLayerLegend(button, layer, legend) {
    return function() {
        button.classList.toggle('is-info');
        if (map.hasLayer(layer)) {
            map.removeLayer(layer);
            map.removeControl(legend);
        } else {
            map.addLayer(layer);
            map.addControl(legend);
        }
    };
}
////////////////////////////////////////////////////////////////////////
// Global CO2 emissions, grouped by country 

// as points
var CO2_global = new L.GeoJSON.AJAX(['emissions_global-points.geojson'], {
	pointToLayer: function(feature, latlng) {
		return L.circleMarker(latlng, {
			radius: feature.properties.MTonnes, // statt 37.6 sollte dort die totalMax der Emissionen stehen - hier wurde nun der Wert der E-PRTR Json genommen.
			color: "black",
			/*fillColor: feature.properties.color,*/
			fillColor: "black",
			weight: 1,
			opacity: 0.7,
			fillOpacity: 0.4
		}).bindPopup(addCO2globalPopupHandler(feature));
	}
}); //.addTo(map);

function addCO2globalPopupHandler(feature) {
	// let nace = globalModel.emissions.categories.naceCategories.items
	if (feature.properties) {
		let thisEmission =
			formatSI(feature.properties.MTonnes) + " Megatonnes CO<sub>2</sub>/year";
		//if (feature.properties.co2Amount) otherEmission += formatSI(feature.properties.co2Amount) + ' Megatonnes CO<sub>2</sub>/year'
		//if (feature.properties.coAmount) otherEmission += formatSI(feature.properties.coAmount) + ' Megatonnes CO/year'
		//let thisEmission = formatSI(feature.properties.MTonnes) + ' Megatonnes '
		//let color = translucidColor(nace[feature.properties.NACEMainEconomicActivityName].color)
		return `<h2>${feature.properties.name} (${feature.properties.country})</h2>
                        Emissions:
                        <br>${thisEmission}</div>`;
		// <br><br><a href="${feature.properties.FacilityDetails}" target="_blank">More Facility details on E-PRTR page</a>`
	} else {
		console.log(feature);
	}
}


/// Argentina CO2
// as points
var CO2_argentina = new L.GeoJSON.AJAX(['convertcsv.geojson'], {
	pointToLayer: function(feature, latlng) {
		return L.circleMarker(latlng, {
			radius: feature.properties.Tonnes / 100000, // statt 37.6 sollte dort die totalMax der Emissionen stehen - hier wurde nun der Wert der E-PRTR Json genommen.
			color: "black",
			/*fillColor: feature.properties.color,*/
			fillColor: "black",
			weight: 1,
			opacity: 0.7,
			fillOpacity: 0.4
		}).bindPopup(addCO2argentinaPopupHandler(feature));
	}
}); //.addTo(map);

function addCO2argentinaPopupHandler(feature) {
	// let nace = globalModel.emissions.categories.naceCategories.items
	if (feature.properties) {
		let thisEmission =
        formatSI(feature.properties.Tonnes) + " Tonnes CO<sub>2</sub>/year";
		//if (feature.properties.co2Amount) otherEmission += formatSI(feature.properties.co2Amount) + ' Megatonnes CO<sub>2</sub>/year'
		//if (feature.properties.coAmount) otherEmission += formatSI(feature.properties.coAmount) + ' Megatonnes CO/year'
		//let thisEmission = formatSI(feature.properties.MTonnes) + ' Megatonnes '
		//let color = translucidColor(nace[feature.properties.NACEMainEconomicActivityName].color)
		return `<h2>${feature.properties.Name} (${feature.properties.Company})</h2>
                        Emissions:
                        <br>${thisEmission}</div>`;
		// <br><br><a href="${feature.properties.FacilityDetails}" target="_blank">More Facility details on E-PRTR page</a>`
	} else {
		console.log(feature);
	}
}


// ToDo: replace all this with a global data model and assign all buttons, functions etc. to the right model category.
// For now this is just an example

// let globalModel = {
//     emissions: {
//         categories: {
//             gasType: {
//                 buttons: {
//                     containerId: 'gas-type-buttons',
//                     onClick: function(){},
//                     createFunction: function(){}
//                 },
//                 items: {
//                     "CO2, industrial": {
//                         color: emissionColors_D.biogas,
//                         filterButton: document.getElementById('pollutant-filter-CO2-button')
//                     },
//                     "CO2, biogenic": {
//                         color: emissionColors_D.industrial,
//                         filterButton: document.getElementById('pollutant-filter-CO-button')
//                     }
//                 }
//             },
//             // naceCategories: {
//             //     buttons: {
//             //         containerId: 'nace-categories',
//             //         onClick: (button) => {
//             //             return function(){
//             //                 activateCompatButton(compatFilterManualButton)
//             //                 // update nace object
//             //                 toggleNaceButton(button)
//             //                 // only display active emissions
//             //                 updateEmissionsFilter()
//             //             }
//             //         },
//             //         createButtons: () => {
//             //             return new Promise(resolve => {                            
//             //                 let nace = globalModel.emissions.categories.naceCategories
//             //                 let catDiv = document.getElementById('nace-categories')
//             //                 for (var name in nace.items) {
//             //                     let emissionSums = formatSI(globalEmissionData.stats.totals['CO2, industrial'][name]) + ' Megatonnes CO2/year, ' + formatSI(globalEmissionData.stats.totals['CO2, biogenic'][name]) + ' Megatonnes CO/year';
//             //                     nace.items[name].button = document.createElement('a')
//             //                     nace.items[name].button.className = 'button is-small is-activated is-fullwidth nace-button ' + nace.items[name].style
//             //                     nace.items[name].button.title = emissionSums
//             //                     nace.items[name].button.text = name
//             //                     nace.items[name].button.onclick = nace.buttons.onClick(nace.items[name].button)
//             //                     catDiv.append(nace.items[name].button)
//             //                 }
//             //                 nace.buttons.allButtons = document.getElementsByClassName('nace-button')
//             //                 resolve()
//             //             })
//             //         },
//             //         allButtons: []
//             //     },
//             //     items: {
//             //         "Aluminium": {
//             //             style: 'emitters-aluminium',
//             //             color: '#ff0000',
//             //             looping: true,
//             //             catalytic: true,
//             //             active: true,

//             //         },
//             //         "Steel": {
//             //             style: 'emitters-steel',
//             //             color: 'rgb(214,70,111)',
//             //             looping: true,
//             //             catalytic: true,
//             //             active: true
//             //         },
//             //         "Cement": {
//             //             style: 'emitters-cement',
//             //             color: 'rgb(190,85,153)',
//             //             looping: true,
//             //             catalytic: false,
//             //             active: true
//             //         },
//             //         "Cellulose and paper": {
//             //             style: 'emitters-cellulose',
//             //             color: 'rgb(151,133,176)', // find color
//             //             looping: true,
//             //             catalytic: false,
//             //             active: true
//             //         },
//             //         "Refinery": {
//             //             style: 'emitters-refinery',
//             //             color: 'rgb(103,155,186)',
//             //             looping: true,
//             //             catalytic: false,
//             //             active: true
//             //         },
//             //         "Ammonia": {
//             //             style: 'emitters-ammonia',
//             //             color: '#5a6067',
//             //             looping: true,
//             //             catalytic: false,
//             //             active: true
//             //         },
//             //         "Methanol": {
//             //             style: 'emitters-methanol',
//             //             color: '#000000',
//             //             looping: true,
//             //             catalytic: false,
//             //             active: true
//             //         },
//             //         "Etileno": {
//             //             style: 'emitters-etileno',
//             //             color: '#938e99',
//             //             looping: true,
//             //             catalytic: false,
//             //             active: true
//             //         }
//             //     }
//             // }
//         }
//     }
// }

// Define a list of button names
const buttonData = [
    { name: 'aluminium', id: 'emitters-aluminium'},
    { name: 'steel', id: 'emitters-steel'},
    { name: 'cement', id: 'emitters-cement'},
    { name: 'cellulose', id: 'emitters-cellulose'},
    { name: 'thermal', id: 'emitters-thermal'},
    { name: 'refinery', id: 'emitters-refinery'},
    { name: 'biogas', id: 'emitters-biogas'},
    { name: 'bioethanol', id: 'emitters-bioethanol'},
    { name: 'ammonia', id: 'emitters-ammonia'},
    { name: 'methanol', id: 'emitters-methanol'},
    { name: 'etileno', id: 'emitters-etileno'},
];

// Get a reference to the container element
const buttonContainer = document.getElementById('button-container');

// Loop through the button data and create buttons
buttonData.forEach(data => {
    // Create a button element
    const button = document.createElement('button');
  
    // Set the button's text to the name from the data
    button.textContent = data.name;
  
    // Set the button's ID to the ID from the data
    button.id = data.id;
  
    // Add a class for styling (if needed)
    button.classList.add('custom-button-class', 'button', 'is-fullwidth');
  
    // Set the button's background color from the data
    button.style.backgroundColor = emissionTypeColors_D[data.name];

    // Add event listeners or other customizations as needed
    button.addEventListener('click', () => {
      // Define the click behavior for each button
      alert(`You clicked ${data.name}`);
    });
  // Append the button to the container
  buttonContainer.appendChild(button);

});

/*********************************************************/
/* Keep a copy of the loaded jsons, in case we need them */
let globalEmissionData, globalChemicalData

/***********************/
/* Handle interactions */
/***********************/

/*****************/
/* Emissions tab */
let compatFilterManualButton = document.getElementById('compat-filter-manual-button'),
    compatFilterLoopButton = document.getElementById('compat-filter-loop-button')
compatFilterCatButton = document.getElementById('compat-filter-cat-button')
compatFilterButtons = [compatFilterManualButton, compatFilterLoopButton, compatFilterCatButton]

let pollutantFilterCO2biogasButton = document.getElementById('pollutant-filter-CO2-button'),
    pollutantFilterCO2industrialButton = document.getElementById('pollutant-filter-CO-button')


let co2FilteredSumOutput = document.getElementById('sumCO2'),
    coFilteredSumOutput = document.getElementById('sumCO'),
    co2CombinedFilteredSumOutput = document.getElementById('sumCO2combined'),
    coCombinedFilteredSumOutput = document.getElementById('sumCOcombined')

let naceDeselectButton = document.getElementById('nace-deselect-all')

/* styling */
pollutantFilterCO2biogasButton.style.background = emissionColors_D.biogas
pollutantFilterCO2industrialButton.style.background = emissionColors_D.industrial
pollutantFilterCO2biogasButton.style.color = "white"
pollutantFilterCO2industrialButton.style.color = "white"
/**
 *
 *
 * @param {*} button
 * @param {boolean} [forceState=false] if forceState = "active" force active, if forceState != "active" and != false, force inactive
 */
function toggleNaceButton(button, forceState = false){
    let nace = globalModel.emissions.categories.naceCategories
    if (!forceState){
        nace.items[button.text].active = !nace.items[button.text].active
    }
    else {
        nace.items[button.text].active = (forceState == "active")
    }
    if (nace.items[button.text].active) {
        button.classList.add('is-activated', nace.items[button.text].style)
    }
    else {
        button.classList.remove('is-activated', nace.items[button.text].style)
    }
}


/**
 * when clicking on a compat button, switch mode
 *
 * @param {event} event the click event on a compat button
 */
function toggleCompatFilter(event) {
    let nace = globalModel.emissions.categories.naceCategories.items
    activateCompatButton(event.target)
    if (event.target == compatFilterCatButton) {
        for (name in nace) {
            nace[name].active = nace[name].catalytic
            toggleNaceButton(nace[name].button, nace[name].active ? "active" : "not")
        }
    } else if (event.target == compatFilterLoopButton) {
        for (name in nace) {
            nace[name].active = nace[name].looping
            toggleNaceButton(nace[name].button, nace[name].active ? "active" : "not")
        }
    }
    updateEmissionsFilter()
}
for (var i = 0; i < compatFilterButtons.length; i++) {
    compatFilterButtons[i].addEventListener('click', toggleCompatFilter)
}

function activateCompatButton(button) {
    for (var i = 0; i < compatFilterButtons.length; i++) {
        compatFilterButtons[i].classList.remove('is-info')
    }
    button.classList.add('is-info')
}

function returnTogglePollutantFilter(button) {
    return function () {
        button.classList.toggle('is-activated')
        if (button.classList.contains('is-activated')) button.style.background = emissionColors[button.id.includes("CO2") ? "CO2, industrial" : "CO2, biogenic"]
        else button.style.background = '#fff'
        getFilteredTotals()
        toggleFilterEmittersByPollutant(button.id.includes("CO2") ? "CO2, industrial" : "CO2, biogenic")
    }
}

function toggleFilterEmittersByPollutant(pollutant) {
    if (map.hasLayer(markers[pollutant])) {
        map.removeLayer(markers[pollutant])
    } else {
        map.addLayer(markers[pollutant]), AIR
    }
}
pollutantFilterCO2biogasButton.addEventListener('click', returnTogglePollutantFilter(pollutantFilterCO2biogasButton))
pollutantFilterCO2industrialButton.addEventListener('click', returnTogglePollutantFilter(pollutantFilterCO2industrialButton))


function getFilteredTotals() {
    let co2sum = 0,
        cosum = 0,
        co2sumCombined = 0,
        cosumCombined = 0,
        nace = globalModel.emissions.categories.naceCategories.items
    for (name in nace) {
        if (nace[name].active) {
            if (pollutantFilterCO2industrialButton.classList.contains('is-activated')) cosum += globalEmissionData.stats.totals['CO2, biogenic'][name]
            if (pollutantFilterCO2biogasButton.classList.contains('is-activated')) co2sum += globalEmissionData.stats.totals['CO2, industrial'][name]
        }
    }
    for (f in globalEmissionData['CO2, biogenic'].features) {
        let props = globalEmissionData['CO2, biogenic'].features[f].properties
        if (pollutantFilterCO2industrialButton.classList.contains('is-activated') &&
            pollutantFilterCO2biogasButton.classList.contains('is-activated') &&
            nace[props.NACEMainEconomicActivityName].active &&
            props.co2Amount &&
            props.co2Amount > 0) {
            co2sumCombined += props.co2Amount
            cosumCombined += props.MTonnes
        }
    }
    co2CombinedFilteredSumOutput.style.background = '#ddc'
    coCombinedFilteredSumOutput.style.background = '#ddc'
    co2FilteredSumOutput.style.background = '#ddc'
    coFilteredSumOutput.style.background = '#ddc'
    setTimeout(function () {
        co2FilteredSumOutput.style.background = '#fff'
        coFilteredSumOutput.style.background = '#fff'
        co2CombinedFilteredSumOutput.style.background = '#fff'
        coCombinedFilteredSumOutput.style.background = '#fff'
    }, 500)
    co2FilteredSumOutput.textContent = format1Dec(co2sum) + ' Megatonnes/year'
    coFilteredSumOutput.textContent = format1Dec(cosum) + ' Megatonnes/year'
    co2CombinedFilteredSumOutput.textContent = format1Dec(co2sumCombined) + ' Megatonnes/year'
    coCombinedFilteredSumOutput.textContent = format1Dec(cosumCombined) + ' Megatonnes/year'
}

function toggleAllNaceFilter() {
    let nace = globalModel.emissions.categories.naceCategories
    if (naceDeselectButton.text == "Deselect all") {
        activateCompatButton(compatFilterManualButton)
        naceDeselectButton.text = "Select all"
        for (name in nace.items) {
            nace.items[name].active = false
            nace.items[name].button.classList.remove('is-activated')
        }
    } else {
        activateCompatButton(compatFilterLoopButton)
        naceDeselectButton.text = "Deselect all"
        for (name in nace.items) {
            nace.items[name].active = true
            nace.items[name].button.classList.add('is-activated')
        }
    }
    updateEmissionsFilter()

}
naceDeselectButton.addEventListener('click', toggleAllNaceFilter)





/***********************/
/* Chemical plants tab */
// let distanceChemicalPlant = document.getElementById('distance-chemical-plant'),
//     polyolFilterButton = document.getElementById('polyol-filter-button'),
//     chemParkFilterButton = document.getElementById('chem-plant-filter-button'),
//     ethyleneFilterButton = document.getElementById('ethylene-filter-button'),
//     propyleneFilterButton = document.getElementById('propylene-filter-button'),
//     steelMillButton = document.getElementById('steel-mill-button'),
//     steelMillFilterButton = document.getElementById('steel-mill-filter-button'),
//     radiusFilterButton = document.getElementById('radius-filter-button'),
//     ethylenePipelineButton = document.getElementById('ethylene-pipeline-button'),
//     propylenePipelineButton = document.getElementById('propylene-pipeline-button'),
//     plantTypeButtons = {
//         "chemical parks": chemParkFilterButton,
//         "polyol plants": polyolFilterButton,
//         "steel mills": steelMillButton
//     }

// let distanceChemicalPlantSlider = document.getElementById('distance-chemical-plant-slider'),
//     distanceChemicalPlantOutput = document.getElementById('distance-chemical-plant-slider-output'),
//     polyolSlider = document.getElementById('polyol-slider'),
//     polyolOutput = document.getElementById('polyol-slider-output')

// let sizeFilterButton = document.getElementById('size-filter-button')

/**
 * Toggle if polyol plants are shown
 */
// let togglePolyolFilter = () => {
//     polyolFilterButton.classList.toggle('is-info')
//     if (map.hasLayer(chemicalParkMarkers['polyol plants'])) {
//         map.removeLayer(chemicalParkMarkers['polyol plants'])
//     } else {
//         map.addLayer(chemicalParkMarkers['polyol plants'])
//     }
//     updateEmissionsFilter()
// }
// polyolFilterButton.addEventListener('click', togglePolyolFilter)

/**
 * Toggle if chemical plants are shown
 */
// let toggleChemPlantFilter = () => {
//     chemParkFilterButton.classList.toggle('is-info')
//     if (map.hasLayer(chemicalParkMarkers['chemical parks'])) {
//         map.removeLayer(chemicalParkMarkers['chemical parks'])
//     } else {
//         map.addLayer(chemicalParkMarkers['chemical parks'])
//     }
//     updateEmissionsFilter()
// }
// chemParkFilterButton.addEventListener('click', toggleChemPlantFilter)

/**
 * Toggle if only plants with ethylene are shown or all chemical plants
 */
// let toggleEthyleneFilter = () => {
//     ethyleneFilterButton.classList.toggle('is-info')
//     updatePlantFilter()
//     updateEmissionsFilter()
// }
// ethyleneFilterButton.addEventListener('click', toggleEthyleneFilter)
/**
 * Toggle if only plants with propylene are shown or all chemical plants
 */
// let togglePropyleneFilter = () => {
//     propyleneFilterButton.classList.toggle('is-info')
//     updatePlantFilter()
//     updateEmissionsFilter()
// }
// propyleneFilterButton.addEventListener('click', togglePropyleneFilter)

/**
 * Toggle if steel mills are shown as consumers
 */
// let toggleSteelMills = () => {
//     steelMillButton.classList.toggle('is-info')
//     if (steelMillButton.classList.contains('is-info')) {
//         steelMillFilterButton.disabled = false
//         map.addLayer(chemicalParkMarkers['steel mills'])
//         updateEmissionsFilter()
//     } else {
//         steelMillFilterButton.disabled = true
//         map.removeLayer(chemicalParkMarkers['steel mills'])
//         updateEmissionsFilter()
//     }
// }
// steelMillButton.addEventListener('click', toggleSteelMills)
// steelMillFilterButton.disabled = true

/**
 * Toggle if steel mills are filtered
 */
// let toggleSteelMillFilter = () => {
//     steelMillFilterButton.classList.toggle('is-info')
//     updatePlantFilter()
//     updateEmissionsFilter()
// }
// steelMillFilterButton.addEventListener('click', toggleSteelMillFilter)

// function pipelineStyle(feature) {
//     return {
//         color: feature.properties.type[1] == 54 ? "green" : "red", //Outline color
//     };
// }

// function togglePipeline(event, type) {
//     event.target.classList.toggle('is-info')
//     if (event.target.classList.contains('is-info')) {
//         fetch('pipeline-' + type + '.json')
//             .then((response) => {
//                     return response.json()
//                 },
//                 (reject) => {
//                     console.error(reject)
//                 })
//             .then((geojson) => {
//                 globalPipelines[type] = L.geoJson(geojson, {
//                     style: pipelineStyle
//                 })
//                 globalPipelines[type].addTo(map)
//             })
//     } else {
//         map.removeLayer(globalPipelines[type])
//     }

// }
// ethylenePipelineButton.addEventListener('click', (event) => {
//     togglePipeline(event, 'ethylene')
// })
// propylenePipelineButton.addEventListener('click', event => {
//     togglePipeline(event, 'propylene')
// })

/**
 * Decide for each emission if it should be displayed depending on all active filters
//  */
// function updateEmissionsFilter() {
//     let nace = globalModel.emissions.categories.naceCategories.items
//     // let chemParkFilterOn = chemParkFilterButton.classList.contains('is-info')
//     // let polyolPlantFilterOn = polyolFilterButton.classList.contains('is-info')
//     for (marker in markers) {
//         var m = markers[marker]
//         m.setFilter(globalEmissionData[marker], function (feature) {
//             let isVisible = true
//             isVisible = (nace[feature.properties.NACEMainEconomicActivityName].active)
//             // if selected, only show those next to chemParks
//             // if (isVisible && radiusFilterButton.classList.contains('is-info')) {
//             //     isVisible =
//             //         // if the chemical parks are not limited to polyol plants, check for distance to chemParks
//             //         (chemParkFilterOn && decideIfInDistance(feature, 'chemical parks'))
//             //         // and always check for distance to polyol plants
//             //         ||
//             //         (polyolPlantFilterOn && decideIfInDistance(feature, 'polyol plants'))
//             //     // if selected, only show clusters with enough CO for x kt polyol
//             //     if (isVisible && sizeFilterButton.classList.contains('is-info')) {
//             //         isVisible = decideIfInVisibleCluster(feature)
//             //     }
//             // }
//             return isVisible
//         })
//     }
//     getFilteredTotals()
//     // getActiveChemPlants()
// }

/**
 * Checks if the feature is within the radius of a chemical cluster that has enough CO emissions
 *
 * @param {*} feature: an emission feature
 * @returns
 */
// function decideIfInVisibleCluster(feature) {
//     /* used to be 15 / 50000 as of Jan 27 */
//     let minCOavailability = polyolOutput.value * 13.5 / 50000
//     let activePlantTypes = []
//     if (chemParkFilterButton.classList.contains('is-info')) activePlantTypes.push('chemical parks')
//     if (polyolFilterButton.classList.contains('is-info')) activePlantTypes.push('polyol plants')
//     if (steelMillFilterButton.classList.contains('is-info')) activePlantTypes.push('steel mills')
//     // check all distances of the emission if there are any chemical plants within the defined radius    
//     for (d in feature.properties.distances) {
//         for (d in feature.properties.distances) {
//             let chem = feature.properties.distances[d]
//             if (chem.distance < distanceChemicalPlantOutput.value * 1000) {
//                 // if so, find the corresponding chemical plant and see if it has enough CO
//                 // this should probably be globalChemicalData
//                 for (marker in chemicalParkMarkers) {
//                     for (f in chemicalParkMarkers[marker]._layers) {
//                         let feat = chemicalParkMarkers[marker]._layers[f].feature
//                         if (feat.properties.FacilityName == d) {
//                             if (activePlantTypes.includes(feat.properties.type))
//                                 if (feat.properties.availability['CO2, biogenic'] > minCOavailability) return true
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     return false
// }

/**
 * Returns true if the feature is within the defined distance of an active chemical or polyol plant
 *
//  * @param {*} feature: A feature with properties, geometry and
//  * @param {string} typeOfChemicalPlant: either 'chemical parks' or 'polyol plants'
//  */
// function decideIfInDistance(feature, typeOfChemicalPlant) {
//     let minDistance = 99999999 // in meter, must be bigger than the max filter
//     if (feature.properties.distances) {
//         for (d in feature.properties.distances) {
//             let dist = feature.properties.distances[d]
//             if (dist.type == typeOfChemicalPlant && dist.distance < distanceChemicalPlantOutput.value * 1000)
//                 return true
//         }
//     }
//     return false
// }

/**
 * Toggle if only emissions within defined radius are shown or all
 */
// let toggleRadiusFilter = () => {
//     radiusFilterButton.classList.toggle('is-info')
//     updateEmissionsFilter()
// }
// radiusFilterButton.addEventListener('click', toggleRadiusFilter)



/**
 * Toggles if the button is pressed limiting the view to only plants with at least x kt polyol
 */
// let toggleSizeFilter = () => {
//     sizeFilterButton.classList.toggle('is-info')
//     if (sizeFilterButton.classList.contains('is-info')) {
//         radiusFilterButton.classList.add('is-info')
//         polyolSlider.disabled = false
//     } else {
//         polyolSlider.disabled = true
//     }
//     updatePlantFilter()
//     updateEmissionsFilter()
// }
// sizeFilterButton.addEventListener('click', toggleSizeFilter)

// function updatePlantFilter() {
//     let isSizeFilterActive = sizeFilterButton.classList.contains('is-info')
//     let isEthyleneFilterActive = ethyleneFilterButton.classList.contains('is-info')
//     let isPropyleneFilterActive = propyleneFilterButton.classList.contains('is-info')
//     let isSteelMillFilterInActive = steelMillFilterButton.classList.contains('is-info')
//     // This was defined by the consortium. A 50 kt polyol plant needs 13,5 kt of CO (or an equivalent amount of CH4 or H2)
//     let minCOavailability = polyolOutput.value * 13.5 / 50000
//     for (marker in chemicalParkMarkers) {
//         var m = chemicalParkMarkers[marker]
//         m.setFilter(globalChemicalData[marker], feature => {
//             let bool = (!isSizeFilterActive || feature.properties.availability['CO2, biogenic'] > minCOavailability) &&
//                 // polyol plants are considered to have propylene and ethylene availability. This is just a first approximation.
//                 ((marker == "polyol plants") ||
//                     // if steel mill filter is deactivated, always show them
//                     (isSteelMillFilterInActive && marker == "steel mills") ||
//                     ((!isEthyleneFilterActive || feature.properties.hasEthyleneOxide == 1 || feature.properties.hasEthyleneOxide == "1") &&
//                         (!isPropyleneFilterActive || feature.properties.hasPropyleneOxide == 1 || feature.properties.hasPropyleneOxide == "1")))
//             return bool
//         })
//     }
// }

/* Glitch in the slider, reset the value to put button in middle of slider */
// distanceChemicalPlantSlider.value = distanceChemicalPlantSlider.getAttribute("value")
// polyolSlider.value = polyolSlider.getAttribute("value")

// distanceChemicalPlantSlider.addEventListener('input', function (event) {
//     // Update output with slider value
//     distanceChemicalPlantOutput.value = event.target.value
//     for (layer in chemicalParkMarkers) {
//         chemicalParkMarkers[layer].eachLayer((layer) => {
//             // update the popups for all chemical clusters
//             layer.setPopupContent(addConsumerPopupHandler(layer.feature))
//             // Update size of circle
//             return layer.setRadius(event.target.value * 1000)
//         })
//     }
//     // if emissions limited to distance, update filter    
//     if (radiusFilterButton.classList.contains('is-info')) {
//         updateEmissionsFilter()
//     }


// })
// polyolSlider.addEventListener('input', function (event) {
//     // Update output with slider value
//     polyolOutput.value = event.target.value
//     updatePlantFilter()
//     updateEmissionsFilter()
// })

// let numberChemParks = document.getElementById('number-chem-parks'),
//     numberPolyolPlants = document.getElementById('number-polyol-plants'),
//     numberSteelMills = document.getElementById('number-steel-mills')

// function getActiveChemPlants() {
//     numberChemParks.value = chemParkFilterButton.classList.contains('is-info') ? chemicalParkMarkers["chemical parks"].getLayers().length : 0
//     numberPolyolPlants.value = polyolFilterButton.classList.contains('is-info') ? chemicalParkMarkers["polyol plants"].getLayers().length : 0
//     numberSteelMills.value = steelMillButton.classList.contains('is-info') ? chemicalParkMarkers["steel mills"].getLayers().length : 0
// }

/****************/
/* Settings tab */
let mapLayoutGreen = document.getElementById('map-layout-green'),
    mapLayoutLight = document.getElementById('map-layout-light'),
    mapShowConsumers = document.getElementById('map-show-consumers'),
    modifyConsumers = document.getElementById('modify-consumers'),
    modalModifyConsumers = document.getElementById('modal-modify-consumers'),
    // csvChemicalParks = document.getElementById('csv-chemical-parks'),
    // csvPolyolPlants = document.getElementById('csv-polyol-plants'),
    // renewEmissions = document.getElementById('renew-emissions'),
    modifyConsumersCreateLink = document.getElementById('modify-consumers-create-link'),
    modifyConsumersCreateJSON = document.getElementById('modify-consumers-create-json'),
    modifyConsumersLoadData = document.getElementById('modify-consumers-load-data'),
    closeModalList = document.getElementsByClassName('close-modal'),
    resetConsumers = document.getElementById('reset-consumers')

function toggleMapLayout() {
    mapLayoutGreen.classList.toggle('is-info')
    mapLayoutLight.classList.toggle('is-info')
    if (mapLayoutGreen.classList.contains('is-info')) {
        map.removeLayer(map.light)
        map.addLayer(map.green)
    } else {
        map.removeLayer(map.green)
        map.addLayer(map.light)
    }
}
mapLayoutGreen.addEventListener('click', toggleMapLayout)
mapLayoutLight.addEventListener('click', toggleMapLayout)

// function toggleShowConsumers() {
//     mapShowConsumers.classList.toggle('is-info')
//     // polyolFilterButton.classList.remove('is-info')
//     // chemParkFilterButton.classList.remove('is-info')
//     // steelMillButton.classList.remove('is-info')
//     if (mapShowConsumers.classList.contains('is-info')) {
//         polyolFilterButton.disabled = false
//         chemParkFilterButton.disabled = false
//         steelMillButton.disabled = false
//         for (l in chemicalParkMarkers)
//             map.addLayer(chemicalParkMarkers[l])
//     } else {
//         polyolFilterButton.disabled = true
//         chemParkFilterButton.disabled = true
//         steelMillButton.disabled = true
//         steelMillFilterButton.disabled = true
//         for (l in chemicalParkMarkers)
//             map.removeLayer(chemicalParkMarkers[l])
//     }
// }
// mapShowConsumers.addEventListener('click', toggleShowConsumers)

// function putCsvInTextArea(file, textarea) {
//     fetch(file)
//         .then(response => response.text())
//         .then(myBlob => textarea.value = myBlob)
// }

// function toggleModifyConsumers() {
//     modalModifyConsumers.classList.toggle('is-active')
//     if (!modalModifyConsumers.dataset.isInitialized) {
//         putCsvInTextArea('chemicalparks v2.csv', csvChemicalParks)
//         putCsvInTextArea('polyol plants europe v2.csv', csvPolyolPlants)
//         modalModifyConsumers.dataset.isInitialized = true
//     }
// }
// modifyConsumers.addEventListener('click', toggleModifyConsumers)
// for (let i = 0; i < closeModalList.length; i++) {
//     closeModalList[i].addEventListener('click', toggleModifyConsumers)
// }

// function modifyConsumersLink() {
//     var script = document.createElement('script')
//     script.onload = function () {
//         convertCsvsToJSON().then(json => {
//             var compressed = LZString.compressToEncodedURIComponent(JSON.stringify(json))
//             window.prompt("Copy to clipboard: Ctrl+C, Enter", 'https://carbon4pur.github.io/mapping/index.html?c=' + compressed)

//         })
//     }
//     script.src = 'vendor/lz-string.min.js'
//     document.head.appendChild(script)
// }
// modifyConsumersCreateLink.addEventListener('click', modifyConsumersLink)

// function downloadObjectAsJson(exportObj, exportName) {
//     var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
//     var downloadAnchorNode = document.createElement('a');
//     downloadAnchorNode.setAttribute("href", dataStr);
//     downloadAnchorNode.setAttribute("download", exportName + ".json");
//     document.body.appendChild(downloadAnchorNode); // required for firefox
//     downloadAnchorNode.click();
//     downloadAnchorNode.remove();
// }

// function modifyConsumersJSON() {
//     convertCsvsToJSON().then(json => addDistances(globalEmissionData, json))
//         .then(obj => {
//             downloadObjectAsJson(obj.chemParks, "chemicalParks")
//         })
// }
// modifyConsumersCreateJSON.addEventListener('click', modifyConsumersJSON)

function convertCsvsToJSON() {
    return new Promise((resolve) => {
        // only load csv2geojson if needed
        var script = document.createElement('script')
        script.onload = function () {
            let csvs = {
                "chemical parks": csvChemicalParks.value,
                "polyol plants": csvPolyolPlants.value
            }
            let json = {}
            for (type in csvs) {
                csv2geojson.csv2geojson(csvs[type], {
                    latfield: 'latitude',
                    lonfield: 'longitude',
                    delimiter: ';',
                }, (err, geojson) => {
                    if (err) {
                        console.error(err)
                    } else {
                        //console.log(csvs, geojson)
                        json[type] = geojson
                    }
                })
            }
            //console.log(globalChemicalData)
            resolve(json)
        }
        script.src = 'vendor/csv2geojson.js'
        document.head.appendChild(script)
    })
}

// function addDistances(emissions, chemParks) {
//     return new Promise((resolve, reject) => {
//         for (c in chemParks) {
//             deleteOldDistances(chemParks[c].features)
//         }
//         for (e in emissions) {
//             deleteOldDistances(emissions[e].features)
//             if (e != "stats") {
//                 for (c in chemParks) {
//                     if (c != "stats") {
//                         distancesBetweenFeatureLists(emissions[e].features, e, chemParks[c].features, c, groupByType1 = true)
//                     }
//                 }
//             }
//         }
//         resolve({
//             emissions: emissions,
//             chemParks: chemParks
//         })
//     })
// }

// function deleteOldDistances(list) {
//     for (let f1 in list) delete list[f1].properties.distances
// }

// function distancesBetweenFeatureLists(list1, e, list2, c) {
//     for (let f1 in list1) {
//         for (let f2 in list2) {
//             let feat1 = list1[f1],
//                 feat2 = list2[f2]
//             let d = distance(feat1.geometry.coordinates[1], feat1.geometry.coordinates[0], feat2.geometry.coordinates[1], feat2.geometry.coordinates[0])
//             if (d < 100001) {
//                 if (!feat1.properties.distances) feat1.properties.distances = {}
//                 feat1.properties.distances[feat2.properties.FacilityName] = {
//                     distance: d,
//                     type: c
//                 }
//                 if (!feat2.properties.distances) feat2.properties.distances = {}
//                 feat2.properties.distances[feat1.properties.FacilityName] = {
//                     distance: d,
//                     type: feat1.properties.type,
//                     amount: feat1.properties.MTonnes
//                 }
//             }
//         }
//     }

// }

// function distance(lat1, lng1, lat2, lng2) {
//     var rad = Math.PI / 180,
//         lt1 = lat1 * rad,
//         lt2 = lat2 * rad,
//         sinDLat = Math.sin((lat2 - lat1) * rad / 2),
//         sinDLon = Math.sin((lng2 - lng1) * rad / 2),
//         a = sinDLat * sinDLat + Math.cos(lt1) * Math.cos(lt2) * sinDLon * sinDLon,
//         c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
//     return 6371000 * c
// }

// function loadConsumersData() {
//     modifyConsumersLoadData.classList.add('is-loading')
//     convertCsvsToJSON().then(chemParks => addDistances(globalEmissionData, chemParks))
//         .then(obj => {
//             globalEmissionData = obj.emissions
//             globalChemicalData = obj.chemParks
//         })
//         .then(loadChemicalParks(globalChemicalData))
//         .then(() => {
//             modifyConsumersLoadData.classList.remove('is-loading')
//             modalModifyConsumers.classList.remove('is-active')
//         })
// }

// modifyConsumersLoadData.addEventListener('click', loadConsumersData)

// resetConsumers.addEventListener('click', () => {
//     delete modalModifyConsumers.dataset.isInitialized
//     loadChemicalParksFromJSON()
// })


// function createNewEmissionsJSON() {
//     renewEmissions.classList.add('is-loading')
//     window.sortedFeatures = {
//         'stats': {
//             'totalMax': 0,
//             max: {},
//             totals: {
//                 "CO2, industrial": {},
//                 "CO2, biogenic": {}
//             },
//             "Description": "BEFORE CHANGING: PLEASE NOTE: the location for 'FJERNVARME FYN FYNSVÆRKET A/S' has to be changed from (9.80973039123284°, 5.33467590910096°) to 10.404647, 55.428245"
//         }
//     };
//     var actions = ["CO2, industrial", "CO2, biogenic"].map(asyncGetData);
//     var results = Promise.all(actions);
//     results.then(data => { // or just .then(console.log)
//         // iterate over all CO2 plants
//         for (let i = 0; i < sortedFeatures['CO2, industrial'].features.length; i++) {
//             let f = sortedFeatures['CO2, industrial'].features[i];
//             // iterate over all CO plants
//             for (let j = 0; j < sortedFeatures['CO2, biogenic'].features.length; j++) {
//                 let e = sortedFeatures['CO2, biogenic'].features[j];
//                 // check if plants are equal except amount
//                 if (checkEquality(e, f, false)) {
//                     e.properties.co2Amount = f.properties.MTonnes;
//                     f.properties.coAmount = e.properties.MTonnes;
//                 }
//             }
//         }
//         addDistances(sortedFeatures, globalChemicalData)
//         console.log(sortedFeatures)
//         downloadObjectAsJson(sortedFeatures, "emissions")
//         renewEmissions.classList.remove('is-loading')
//     });
// }
// renewEmissions.addEventListener('click', createNewEmissionsJSON)

// var asyncGetData = function asyncGetDataFromSparql(emissionName) {
//     return new Promise(resolve => {
//         sortedFeatures[emissionName] = {
//             type: "FeatureCollection",
//             features: []
//         };
//         /* query e-prtr with variables */
//         var query = makeQueryEPRTR(emissionName);
//         fetch(query)
//             .then(function (response) {
//                 //console.log(response);
//                 return response.json();
//             }, function (reject) {
//                 console.log(reject);
//             })
//             .then(myBlob => showEm(myBlob))
//             .then(col => {
//                 sortedFeatures[emissionName].features = col;
//                 let m = col.reduce((a, b) => a.properties.MTonnes > b.properties.MTonnes ? a : b).properties.MTonnes;
//                 sortedFeatures.stats.max[emissionName] = m;
//                 if (sortedFeatures.stats.totalMax < m) sortedFeatures.stats.totalMax = m;
//                 for (let i = 0; i < col.length; i++) {
//                     let cur = col[i];
//                     if (isNaN(sortedFeatures.stats.totals[emissionName][cur.properties.NACEMainEconomicActivityName])) sortedFeatures.stats.totals[emissionName][cur.properties.NACEMainEconomicActivityName] = 0;
//                     sortedFeatures.stats.totals[emissionName][cur.properties.NACEMainEconomicActivityName] += cur.properties.MTonnes;
//                 }
//                 resolve(sortedFeatures)
//             });
//     })
// };

/* use http://semantic.eea.europa.eu/sparql online query tool to generate query */
// function makeQueryEPRTR(emissionName = "CO2, industrial") {
//     /* CORS headers not set by europa.eu, so we use a sparql proxy */
//     var proxy = "https://cors-anywhere.herokuapp.com/";
//     /* easiest sparql endpoint we could find */
//     var url = "http://semantic.eea.europa.eu/sparql";
//     var query = `PREFIX eprtr: <http://prtr.ec.europa.eu/rdf/schema.rdf#>
// PREFIX facility: <http://prtr.ec.europa.eu/rdf/facility/>
// PREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>
// PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
// PREFIX foaf: <http://xmlns.com/foaf/0.1/>
// SELECT ?FacilityName ?FacilityDetails ?CountryName ?Lat ?Long ?ReportingYear ?NACEMainEconomicActivityName ?PollutantName ?Quantity {
//   ?facility eprtr:facilityName ?FacilityName .
//   ?facility eprtr:inCountry ?country . ?country eprtr:name ?CountryName .
//   ?facility eprtr:latestReport ?latestReport . 
//   ?facility wgs84:lat ?Lat . 
//   ?facility wgs84:long ?Long .
//   ?facility foaf:isPrimaryTopicOf ?FacilityDetails .
//   ?latestReport eprtr:reportingYear ?ReportingYear .
//   ?latestReport eprtr:nACEActivity ?nACEActivity . ?nACEActivity eprtr:name ?NACEMainEconomicActivityName
//   values ?nACEActivity {
//     <http://prtr.ec.europa.eu/rdf/nACEActivity/20.13>
//     <http://prtr.ec.europa.eu/rdf/nACEActivity/23.52>
//     <http://prtr.ec.europa.eu/rdf/nACEActivity/35.11>
//     <http://prtr.ec.europa.eu/rdf/nACEActivity/06.20>
//     <http://prtr.ec.europa.eu/rdf/nACEActivity/23.51>
//     <http://prtr.ec.europa.eu/rdf/nACEActivity/20.15>
//     <http://prtr.ec.europa.eu/rdf/nACEActivity/19.20>
//     <http://prtr.ec.europa.eu/rdf/nACEActivity/24.10>
    
//   }
//   ?pollutantRelease eprtr:facilityReport ?latestReport .   
//   ?pollutantRelease rdfs:label ?PollutantName . 
//   values ?PollutantName {"` + emissionName + `"}  
//   ?pollutantRelease eprtr:totalQuantity ?Quantity . 
// } 
// ORDER BY ?nACEActivity ?FacilityName ?ReportingYear
// LIMIT 10000
// 	`;
//     /* Warning: europa.eu is normally limiting results to 512, add nrOfHits to increase */
//     return proxy + url + "?query=" + encodeURIComponent(query) + '&format=application%2Fsparql-results%2Bjson&nrOfHits=10000';
// }


// function showEm(data) {
//     var r = createFeatureCollection(data.results.bindings);
//     return r;
// }

// function createGeometry(long, lat) {
//     return {
//         type: "Point",
//         coordinates: [parseFloat(long), parseFloat(lat)]
//     };
// }

// function createProperties(obj) {
//     return {
//         CountryName: obj.CountryName.value,
//         FacilityName: obj.FacilityName.value,
//         FacilityDetails: obj.FacilityDetails.value,
//         ReportingYear: obj.ReportingYear.value,
//         MTonnes: obj.Quantity.value / 1E9,
//         NACEMainEconomicActivityName: obj.NACEMainEconomicActivityName.value,
//         PollutantName: obj.PollutantName.value
//     };
// }

// function createFeatureFromObj(obj) {
//     return {
//         geometry: createGeometry(obj.Long.value, obj.Lat.value),
//         properties: createProperties(obj),
//         type: "Feature"
//     };
// }

// function checkEquality(el, ft, checkAmount = true) {
//     var checks = (el.properties.FacilityDetails == ft.properties.FacilityDetails ? 1 : 0) +
//         (el.properties.FacilityName == ft.properties.FacilityName ? 1 : 0) +
//         (el.properties.ReportingYear == ft.properties.ReportingYear ? 1 : 0) +
//         (el.properties.MTonnes == ft.properties.MTonnes ? 1 : 0)
//     return checks > (checkAmount ? 3 : 2);
// }

// function createFeatureCollection(array) {
//     var col = [];
//     for (var i = 0; i < array.length; i++) {
//         var ft = createFeatureFromObj(array[i]);
//         const found = col.some(el => checkEquality(el, ft));
//         if (!found) col.push(ft);
//     }
//     return col;
// }

/***********************/
/* Load data functions */
/***********************/
CO2globalButton.addEventListener("click", toggleLayerScale(CO2globalButton, CO2_global, scale));
CO2_argentinaButton.addEventListener("click", toggleLayerScale(CO2_argentinaButton, CO2_argentina, scale));


/***********************/
/* Load data functions */
/***********************/

// keep reference to the markers for filtering
var markers = {}
var chemicalParkMarkers = {}
var globalPipelines = {}

// /** 
//  * convert json to map layer with circlemarkers
//  * @param {data} an Object loaded from json data containing several geoJSON Objects. Each feature should contain a "properties" with FacilityName, PollutantName, MTonnes and NACEMainEconomicActivityName
//  */
// function loadPRTRlayers(data) {
//     return new Promise((resolve, reject) => {
//         let nace = globalModel.emissions.categories.naceCategories.items
//         for (emission in data) {
//             if (emission != "stats") {
//                 for (f in data[emission].features) {
//                     data[emission].features[f].properties.type = emission
//                 }
//                 markers[emission] = L.geoJson(data[emission], {
//                     pointToLayer: function (feature, latlng) {
//                         return L.circleMarker(latlng, {
//                             radius: Math.sqrt(feature.properties.MTonnes / data.stats.totalMax) * 50,
//                             color: emissionColors[feature.properties.PollutantName],
//                             fillColor: nace[feature.properties.NACEMainEconomicActivityName].color,
//                             weight: 1,
//                             opacity: 0.7,
//                             fillOpacity: 0.4
//                         }).bindPopup(addEmitterPopupHandler(feature))
//                     }
//                 }).addTo(map)
//             }
//         }
//         globalEmissionData = data
//         resolve(data)
//     })
// }

/**
 *Add a popup to a GeoJSON feature of a certain type
 *
 * @param {*} feature A GeoJSON feature with geometry and properties
 * @param {string} type The name of the category, in this case "CO2" or "CO" 
 * @returns {string} a DOM string containing the popup
 */
function addEmitterPopupHandler(feature) {
    let nace = globalModel.emissions.categories.naceCategories.items
    if (feature.properties) {
        let otherEmission = ''
        if (feature.properties.co2Amount) otherEmission += formatSI(feature.properties.co2Amount) + ' Megatonnes CO<sub>2</sub>/year'
        if (feature.properties.coAmount) otherEmission += formatSI(feature.properties.coAmount) + ' Megatonnes CO/year'
        let thisEmission = formatSI(feature.properties.MTonnes) + ' Megatonnes '
        if (feature.properties.type == 'CO2, biogenic') thisEmission += 'CO/year'
        else thisEmission += 'CO<sub>2</sub>/year'
        let color = translucidColor(nace[feature.properties.NACEMainEconomicActivityName].color)
        return `<h2>${feature.properties.FacilityName}</h2>
                        ${feature.properties.CountryName}                    
                        <br><b><i>${feature.properties.NACEMainEconomicActivityName}</i></b>
                        <br>
                        <div class='popup-em' style='background: ${color}'>
                        Emissions:
                        <br>${thisEmission}` + (otherEmission != '' ? `<br />${otherEmission}` : '') + `</div>
                        <br><br><a href="${feature.properties.FacilityDetails}" target="_blank">More Facility details on E-PRTR page</a>`

    } else {
        console.log(feature)
    }
}

/** 
//  * convert json to map layer with circlemarkers
//  * @param {Object} data Object loaded from json data containing several geoJSON Objects. Each feature should contain a "properties" with FacilityName 
//  */
// function loadChemicalParksFromData(data) {
//     // copy distance information to markers. This could be done while creating the json arrays to speedup the load time.
//     addDistances(globalEmissionData, data)
//     //console.log(data)    
//     return new Promise((resolve, reject) => {
//         for (type in data) {
//             if (type != "stats") {
//                 chemicalParkMarkers[type] = convertGeoJSONToChemLayer(data, type).addTo(map)
//                 if (!plantTypeButtons[type].classList.contains('is-info')) {
//                     plantTypeButtons[type].click()
//                 }
//             }
//         }
//         // keep global reference
//         globalChemicalData = data
//         resolve()
//     })
// }

// function loadChemicalParksFromURI(c) {
//     loadScript('vendor/lz-string.min.js', () => {
//         let string = LZString.decompressFromEncodedURIComponent(c)
//         console.log(string, JSON.parse(string))
//         loadChemicalParksFromData(JSON.parse(string))
//     })
// }

// function loadChemicalParks(data) {
//     return new Promise((resolve, reject) => {
//         for (marker in chemicalParkMarkers) {
//             map.removeLayer(chemicalParkMarkers[marker])
//         }
//         chemicalParkMarkers = {}
//         if (url.searchParams.get("c")) {
//             loadChemicalParksFromURI(url.searchParams.get("c"))
//                 .then(resolve())
//         } else {
//             loadChemicalParksFromData(data)
//                 .then(resolve())
//         }
//     })
// }


// function loadChemicalParksFromJSON() {
//     return new Promise((resolve) => {
//         fetch('chemicalParks.json')
//             .then((response) => {
//                     return response.json()
//                 },
//                 (reject) => {
//                     console.error(reject)
//                 })
//             .then(loadChemicalParks)
//             .then(() => resolve())
//     })
// }

// function loadSteelMillsAsChemicalParks() {
//     return new Promise((resolve) => {
//         if (!globalChemicalData['steel mills']) {
//             fetch('steelMills.json')
//                 .then((response) => {
//                         return response.json()
//                     },
//                     (reject) => {
//                         console.error(reject)
//                     })
//                 .then((json) => {
//                     globalChemicalData["steel mills"] = {
//                         type: "FeatureCollection",
//                         features: []
//                     }
//                     new_feats = globalChemicalData["steel mills"].features
//                     for (e in globalEmissionData["CO2, biogenic"].features) {
//                         let emitter = globalEmissionData["CO2, biogenic"].features[e]
//                         for (s in json.bof) {
//                             let steelMill = json.bof[s]
//                             if (emitter.properties.FacilityName == steelMill) {
//                                 new_feats.push(clone(emitter))
//                             }
//                         }
//                     }
//                     for (e in globalEmissionData) {
//                         distancesBetweenFeatureLists(globalEmissionData[e].features, new_feats)
//                     }
//                     chemicalParkMarkers["steel mills"] = convertGeoJSONToChemLayer(globalChemicalData, "steel mills")
//                     resolve()
//                 })
//         } else resolve()
//     })
// }


function loadScript(url, callback) {
    // Adding the script tag to the head as suggested before
    var head = document.head
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url
    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback
    script.onload = callback
    // Fire the loading
    head.appendChild(script)
}

/**
 * Convert a geojson to a layer with circles and popups
 *
 * @param {*} data an object from json containing an array of geoJSON
 * @param {string} type the name of the geoJSON inside the data
 * @returns {layer} a geoJSON layer
 */
function convertGeoJSONToChemLayer(data, type) {
    return L.geoJson(data[type], {
        pointToLayer: function (feature, latlng) {
            feature.properties['type'] = type
            return L.circle(latlng, distanceChemicalPlantOutput.value * 1000, { // radius expected in m, slider in km
                fillColor: chemicalColors[feature.properties.type],
                weight: 0,
                fillOpacity: 0.4
            }).bindPopup(addConsumerPopupHandler(feature, type))
        }
    })
}

/**
 *Add a popup to a GeoJSON feature of a certain type
 *
 * @param {*} feature A GeoJSON feature with geometry and properties
 * @param {string} type The name of the category, in this case "chemical parks" or "polyol plant" 
 * @returns
 */
function addConsumerPopupHandler(feature) {
    if (feature.properties) {
        return `<h2>${feature.properties.FacilityName}</h2>
                ${feature.properties.CountryName}
                <br><b><i class="${feature.properties.type.replace(" ", "-") + "-popup"}">${feature.properties.type}</i></b>
                <br>` + consumerPopupAvailability(feature)
    } else {
        console.log(feature)
    }
}

/**
 * Create a box with available emissions around a consumer
 *
 * @param {*} feature the consumer
 * @returns a DOM string containing a div with the availability
 */
function consumerPopupAvailability(feature) {
    let p = feature.properties
    p.availability = {
        ['CO2, industrial']: 0,
        ['CO2, biogenic']: 0
    }
    if (p.distances != undefined) {
        for (n in p.distances) {
            if (p.distances[n].distance < distanceChemicalPlantOutput.value * 1000) {
                p.availability[p.distances[n].type] += p.distances[n].amount
            }
        }
    }
    return '<div class="popup-em" style="background:' + translucidColor(chemicalColors[feature.properties.type]) + '">Available emissions:<br>(in a radius of ' + distanceChemicalPlantOutput.value + '&nbsp;km)<br>' +
        formatSI(feature.properties.availability['CO2, industrial']) + '&nbsp;Megatonnes CO<sub>2</sub>/year<br>' +
        formatSI(feature.properties.availability['CO2, biogenic']) + '&nbsp;Megatonnes CO/year</div>'
}

/**
 * create a translucid color from a color string for the popups
 *
 * @param {*} colorString
 * @param {number} [opacity=0.6]
 * @returns color
 */
function translucidColor(colorString, opacity = 0.6) {
    let c = d3.color(colorString)
    c.opacity = opacity
    return c
}

/**
 * Create circles with different sizes as a legend
 * @needs globalEmissionData as a global variable
 */




/*************************************/
/* Change layout with get parameters */
/*************************************/
var url = new URL(window.location.href)
if (!mapLayoutLight.classList.contains('is-info') && url.searchParams.get("style") == "light") toggleMapLayout()


/*************************************************/
/* And finally load all json data and display it */
/*************************************************/
document.addEventListener('DOMContentLoaded', (event) => {
    showMap()
    loadGlobalDefs()
    createScale();
    // fetch('emissions.json')
    //     .then((response) => {
    //             return response.json()
    //         },
    //         (reject) => {
    //             console.error(reject)
    //         })
    //     .then(loadPRTRlayers)
    //     .then(createScale)
    //     .then(globalModel.emissions.categories.naceCategories.buttons.createButtons)
    //     .then(getFilteredTotals)
    //     // .then(loadChemicalParksFromJSON)
    //     // .then(loadSteelMillsAsChemicalParks)
    //     // .then(checkIfIntro)
    //     // .then(getActiveChemPlants)
})

/***********************************/
/* Helper functions (cookies etc.) */
/***********************************/
const setCookie = (name, value, days = 100, path = '/') => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString()
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=' + path
}

const getCookie = (name) => {
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=')
        return parts[0] === name ? decodeURIComponent(parts[1]) : r
    }, '')
}

const deleteCookie = (name, path = "/") => {
    setCookie(name, '', -1, path)
}

function clone(obj) {
    var copy;
    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;
    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }
    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }
    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }
    throw new Error("Unable to copy obj! Its type isn't supported.");
}

/***********************************/
/* Intro.js tour                   */
/***********************************/
// function setCookieNoTour() {
//     setCookie('no-tour', 'true')
//     introJs().exit()
// }

// document.getElementById('show-intro').addEventListener('click', () => {
//     deleteCookie('no-tour')
//     startIntro()
// })

// function checkIfIntro() {
//     if (!getCookie('no-tour')) {
//         startIntro()
//     }
// }

// function startIntro() {
//     var intro = introJs()
//     intro.onexit(() => map.sidebar.open('info-content'))
//     intro.setOptions({
//         steps: [{
//                 intro: `Welcome to the Carbon4PUR mapping! If you want, you can follow this short introduction to see the main functions, or you can skip the tour.<br>
//                 <button id="set-cookie-no-tour" class="introjs-button" title="This is the only cookie used on this site. If you don't want to use cookies, the tour will be shown on each reload. Click anywhere outside the tour to make it disappear."><p>Don't show the tour again</p><p style="font-size: x-small; color: #746427;">&#9432; This will set a cookie.</p></button>`
//             },
//             {
//                 element: "#sidebar-close-info-span",
//                 intro: "This closes the sidebar so you can focus on the map."
//             },
//             {
//                 element: '#info-tab-li',
//                 intro: "Here you find information about the map and the data"
//             },
//             {
//                 element: '#emitter-tab-li',
//                 intro: "In this tab, you can filter the bubbles on the map representing emissions."
//             },
//             {
//                 element: '#consumer-tab-li',
//                 intro: 'Here you can filter by chemical parks and polyol plants.'
//             },
//             {
//                 element: '#legal-tab-li',
//                 intro: 'All the background info and data as well as legal information about licenses and data.'
//             },
//             {
//                 element: '#settings-tab-li',
//                 intro: "And if you like another map layout or restart the tour, click here."
//             },
//             {
//                 intro: "Click on any bubble to see more information about it.<br>That's it, now play with it."
//             }
//         ],
//         doneLabel: '<div title="This is the only cookie used on this site. If you don\'t want to use cookies, the tour will be shown on each reload. Click anywhere outside the tour to make it disappear."><span>Done</span><span style="color: #746427;"> &#9432;</span><div>'
//     })
//     introJs.fn.oncomplete(setCookieNoTour)
//     map.sidebar.open('info-content')
//     intro.start()
//     document.getElementById('set-cookie-no-tour').addEventListener('click', setCookieNoTour)
// }

/////////


