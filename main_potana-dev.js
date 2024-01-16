// define global variables
let map, format1Dec, formatSI;
/***********************/
/* Einladen der Button-Informationen */
let ethylenePipelineButton = document.getElementById("ethylene-button"),
	propylenePipelineButton = document.getElementById("propylene-button"),
	pvButton = document.getElementById("pv-button"),
	windButton = document.getElementById("wind-button"),
	waterButton = document.getElementById("water-button"),
	//waterEUButton = document.getElementById("water-eu-button"),
	waterStressButton = document.getElementById("water-stress-button"),
	waterBWSButton = document.getElementById("water-bws-button"),
	waterAfricaButton = document.getElementById("water-africa-button"),
	waterGermanyButton = document.getElementById("water-germany-button"),
	emitterButton = document.getElementById("emitter-button"),
	totalPipelineButton = document.getElementById("total-pipeline-button"),
	kenyaPipelineButton = document.getElementById("kenya-button"),
	pipelineDEButton = document.getElementById("pipeline-de-button"),
	// protectedGermanyButton = document.getElementById("protectedgermany-button"),
	protectedSouthmericaButton = document.getElementById("protectedsouthamerica-button"),
	protectedAsiaButton = document.getElementById("protectedasia-button"),
	protectedEuropeButton = document.getElementById("protectedeurope-button"),
	protectedAfricaButton = document.getElementById("protectedafrica-button"),
/* 	protectedMexicoButton = document.getElementById("protectedmexico-button"),
	protectedArgentinaButton = document.getElementById("protectedargentina-button"),
	protectedChileButton = document.getElementById("protectedchile-button"),
	protectedChinaButton = document.getElementById("protectedchina-button"),
	protectedKazakhstanButton = document.getElementById("protectedkazakhstan-button"),
	protectedNorthEuropeButton = document.getElementById("protectednortheurope-button"),
	protectedSouthEuropeButton = document.getElementById("protectedsoutheurope-button"), */
	countryButton = document.getElementById("country-button"),
	renewablesButton = document.getElementById("renewables-button"),
	usaPipelineButton = document.getElementById("usa-button"),
	powerplantsButton = document.getElementById("powerplants-button"),
	GHGUSAButton = document.getElementById("GHG-USA-button"),
	CO2globalButton = document.getElementById("CO2-global-button"),
	CO2globalpanesButton = document.getElementById("CO2-global-panes-button"),
	scale_global = document.getElementById("scale_global"),
	scale_legend = document.getElementById("scale"),
	chemicalparksEuButton = document.getElementById("chemicalparks-eu-button"),
	refineriesEuButton = document.getElementById("refineries-eu-button"),
	refineriesGlobalButton = document.getElementById("refineries-global-button"),
	petroGlobalOffButton = document.getElementById("petro-ref-global-off-button"),
	petroGlobalOnButton = document.getElementById("petro-ref-global-on-button"),
	GridDEButton = document.getElementById("grid-de-button")
	;

function showMap() {
	/* allowsf us to create filters within a Leaflet GeoJSON layer */
	L.GeoJSON.include({
		setFilter: function(originalData, _) {
			this.options.filter = _;
			this.clearLayers();
			this.addData(originalData);
			return this;
		}
	});

	/* Set up the map with initial center and zoom level */
	map = L.map("map", {
		center: [51.65892, 6.41601], // roughly show Europe
		zoom: 3, // roughly show Europe (from 1 to 18 -- decrease to zoom out, increase to zoom in)
		scrollWheelZoom: false,
		zoomControl: false // to put the zoom butons on the right
	});

	map.layout = {
		items: {
			light: {
				layer: L.tileLayer(
					"https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
						attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>, <a href="http://prtr.ec.europa.eu">E-PRTR</a>'
					}
				).addTo(map),
				/* ".addto(map)" hinzufügen, wenn man das defaultmäßig haben will */
				button: document.getElementById("map-layout-light")
			},
			green: {
				layer: L.tileLayer(
					"https://tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=9a85f60a13be4bf7bed59b5ffc0f4d86", {
						attribution: 'Maps &copy; <a href="https://www.thunderforest.com">Thunderforest</a>, Data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>, <a href="http://prtr.ec.europa.eu">E-PRTR</a>'
					}
				),
				button: document.getElementById("map-layout-green")
			}
		},
		toggle: function() {
			for (var layout in map.layout.items) {
				let l = map.layout.items[layout];
				l.button.classList.toggle("is-info");
				if (l.button.classList.contains("is-info")) {
					map.addLayer(l.layer);
				} else {
					map.removeLayer(l.layer);
				}
			}
		}
	};
	for (var layout in map.layout.items) {
		let l = map.layout.items[layout];
		l.button.addEventListener("click", map.layout.toggle);
	}

	/* Add the zoom buttons */
	L.control
		.zoom({
			position: "topright"
		})
		.addTo(map);

	/* Add the sidebar */
	map.sidebar = L.control
		.sidebar("sidebar", {
			position: "left"
		})
		.addTo(map);

	/* On the map, scrolling should zoom */
	map.on("focus", () => {
		map.scrollWheelZoom.enable();
	});
	/* Outside of the map, scrolling should not zoom */
	map.on("blur", () => {
		map.scrollWheelZoom.disable();
	});



	map.createPane('labels')
	map.getPane('labels').style.zIndex = 620; // a value of 650 will make the TileLayer with the labels show on top of markers but below pop-ups.
	map.getPane('labels').style.pointerEvents = 'none'; // If a user clicks anywhere on the map, the web browser will assume she clicked on the labels tiles, and not on the GeoJSON or on the markers

	var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
		attribution: '©OpenStreetMap, ©CartoDB'
	}).addTo(map);

	var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
		attribution: '©OpenStreetMap, ©CartoDB',
		pane: 'labels'
	}).addTo(map);
}

/***********************/
/* Implement Mapbox-Styles */
/***********************/

var mbAttr =
	'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
	'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
	'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	mbUrl =
	"https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGluaGR1dHJhbiIsImEiOiJjazdxMWhzN2YwMWZ5M2h0bDZvdmgxdDN5In0.T3gSsacrZXZOTqmx-zknUw";

var pvTileLayer = L.tileLayer(mbUrl, {
		id: "dinhdutran/ck7x7q0gm142w1ipaudrqah67",
		tileSize: 512,
		zoomOffset: -1,
		attribution: mbAttr
	}),
	windTileLayer = L.tileLayer(mbUrl, {
		id: "dinhdutran/ck7x7ug5w055h1ir1fcycofg5",
		tileSize: 512,
		zoomOffset: -1,
		attribution: mbAttr
	}),
	waterTileLayer = L.tileLayer(mbUrl, {
		id: "dinhdutran/ck7xgtwbu1efl1imd3tmuoklt",
		tileSize: 512,
		zoomOffset: -1,
		attribution: mbAttr
	});

//////////////////////////////////////////////////////////////////////////////
// BASIC FUNCTIONS

function loadGlobalDefs() {
	// show all numbers with 1,000.00 format
	format1Dec = d3.format(',.1f');
	formatSI = d3.format(',.3f');
}

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

////////////////////////////////////////////////////////////////////////////////////
// LEGENDS


var legend_EE = L.control({
	position: "bottomright"
});

legend_EE.onAdd = function(map) {
	var div_EE = L.DomUtil.create("div", "info legend_EE");

	for (var i = 0; i < grades_powerEE.length; i++) {
		div_EE.innerHTML += '<i style="background:' + grades_powerEE[i] + '"></i> ' + labels_powerEE[i] + "<br>";
	}
	return div_EE;
};


var legend_power = L.control({
	position: "bottomright"
});

legend_power.onAdd = function(map) {
	var div_power = L.DomUtil.create("div", "info legend_power");
	// loop through our density intervals and generate a label with a colored square for each interval
	for (var i = 0; i < grades_power.length; i++) {
		div_power.innerHTML +=
			'<i style="background:' + grades_power[i] + '"></i> ' + 
			labels_power[i] + '<br>';
	}
	return div_power;
};


/* create scale for the index.html */
let createScale_global = () => {
	var height = 75;
	var width = 130;
	var svg = d3.select("#scale_global")
		.append("svg")
		.attr("width", width)
		.attr("height", height);

	// The scale you use for bubble size
	var size = d3.scaleSqrt()
		.domain([0, 10000]) // What's in the data, min-max
		.range([0, 50]) // Size in pixel
	;
	// Add legend: circles
	var valuesToShow = [20, 1000, 5000]; // [globalEmissionData.stats.totalMax / 100, globalEmissionData.stats.totalMax / 10, globalEmissionData.stats.totalMax]
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


////////////////////////////////////////////////////////////////////////////////////
// LOADING DATA

// EEZ BOUNDARIES 
var eez_boundaries = new L.GeoJSON.AJAX([
	"geofiles/eez_boundaries_v11.geojson"
]);

// PANES
var country_panes = new L.GeoJSON.AJAX(['geofiles/country_panes.json'], {
	onEachFeature: function(feature, layer) {
		layer.bindPopup(feature.properties.name);
	}
}) //.addTo(map)
;
// Group both layers - EEZ boundaries and country panes
var country_layers = L.layerGroup([eez_boundaries, country_panes]);

////////////////////////////////////////
// POWER PLANTS - NON EE
var power_plants = new L.GeoJSON.AJAX(
	["geofiles/powerplants_global-nonEE.geojson"], {
		pointToLayer: function(feature, latlng) {
			return L.circleMarker(latlng, {
				radius: 2,
				color: powerplantsColors[feature.properties.primary_fuel],
				/*fillColor: feature.properties.color,*/
				fillColor: powerplantsColors[feature.properties.primary_fuel],
				weight: 1,
				opacity: 0.7,
				fillOpacity: 0.4
			}).bindPopup(addPowerPlantPopupHandler(feature));
		}
	}
);

////////////////////////////////////////
// RENEWABLE PLANTS
var renewables_plants = new L.GeoJSON.AJAX(
	["geofiles/powerplants_global-EE.geojson"], {
		pointToLayer: function(feature, latlng) {
			return L.circleMarker(latlng, {
				radius: 2,
				color: powerplantsColors[feature.properties.primary_fuel],
				/*fillColor: feature.properties.color,*/
				fillColor: powerplantsColors[feature.properties.primary_fuel],
				weight: 1,
				opacity: 0.7,
				fillOpacity: 0.4
			}).bindPopup(addPowerPlantPopupHandler(feature));
		}
	}
);

function addPowerPlantPopupHandler(feature) {
	// let nace = globalModel.emissions.categories.naceCategories.items
	if (feature.properties) {
		return `<h2>${feature.properties.name}</h2>
                        ${feature.properties.country_long} (${feature.properties.country})                    
                        <br>primary fuel: <i>${feature.properties.primary_fuel}</i><br>
                        <a href="${feature.properties.url}" target="_blank">Source</a>`;
	} else {
		console.log(feature);
	}
}


////////////////////////////////////////
// Electrical Grid
// Germany
function gridStyle(feature) {
    return {
		color: feature.properties.voltage == 380000 ? "orange" : "green", //Outline color
		weight: 1,
    };
}



var grid_de_layer = new L.GeoJSON.AJAX(["geofiles/Hochspannungsnetze_DE.geojson"], {
// var CO2_global_panes = new L.GeoJSON.AJAX(['geojson_co2.php'], {
	style: gridStyle,
	onEachFeature: function(feature, layer) {
		layer.bindPopup('<h2>' + feature.properties.name + '(' + feature.properties.short_name +')</h2>Operator: ' +feature.properties.operator+ '<br>Voltage: ' +feature.properties.voltage + '(' + feature.properties.frequency+ 'Hz)'),
		layer.bindTooltip('<h2>' + feature.properties.name + '(' + feature.properties.short_name +')</h2>Operator: ' +feature.properties.operator+ '<br>Voltage: ' +feature.properties.voltage + '(' + feature.properties.frequency+ 'Hz)')
		}})
		//.addTo(map)
		;

// GHG USA - data from EPA
// legend-toggability should be changed when  main_emissions.js and main.js are merged

var GHG_USA = new L.GeoJSON.AJAX(["geofiles/emissions-USA.geojson"], {
	pointToLayer: function(feature, latlng) {
		return L.circleMarker(latlng, {
			radius: Math.sqrt(feature.properties.MTonnes / 37.6) * 50, // statt 37.6 sollte dort die totalMax der Emissionen stehen - hier wurde nun der Wert der E-PRTR Json genommen.
			color: "rgba(190, 85, 153, 0.6)",
			/*fillColor: feature.properties.color,*/
			fillColor: "rgba(190, 85, 153, 0.6)",
			weight: 1,
			opacity: 0.7,
			fillOpacity: 0.4
		}).bindPopup(addGHGUSAPopupHandler(feature));
	}
});

function addGHGUSAPopupHandler(feature) {
	// let nace = globalModel.emissions.categories.naceCategories.items
	if (feature.properties) {
		let thisEmission =
			formatSI(feature.properties.MTonnes) + " Megatonnes CO/year";
		//if (feature.properties.co2Amount) otherEmission += formatSI(feature.properties.co2Amount) + ' Megatonnes CO<sub>2</sub>/year'
		//if (feature.properties.coAmount) otherEmission += formatSI(feature.properties.coAmount) + ' Megatonnes CO/year'
		//let thisEmission = formatSI(feature.properties.MTonnes) + ' Megatonnes '
		//let color = translucidColor(nace[feature.properties.NACEMainEconomicActivityName].color)
		return `<h2>${feature.properties.FacilityName} (${feature.properties.CompanyName})</h2>
                        ${feature.properties.CityName} (${feature.properties.StateName}, USA)                    
                        <br>
                        Emissions:
                        <br>${thisEmission}</div>`;
		// <br><br><a href="${feature.properties.FacilityDetails}" target="_blank">More Facility details on E-PRTR page</a>`
	} else {
		console.log(feature);
	}
}

////////////////////////////////////////////////////////////////////////
// Global CO2 emissions, grouped by country 

// as points
var CO2_global = new L.GeoJSON.AJAX(['geofiles/emissions_global-points.geojson'], {
	pointToLayer: function(feature, latlng) {
		return L.circleMarker(latlng, {
			radius: Math.sqrt(feature.properties.MTonnes / 10065) * 50, // statt 37.6 sollte dort die totalMax der Emissionen stehen - hier wurde nun der Wert der E-PRTR Json genommen.
			color: "black",
			/*fillColor: feature.properties.color,*/
			fillColor: "black",
			weight: 1,
			opacity: 0.7,
			fillOpacity: 0.4
		}).bindPopup(addCO2globalPopupHandler(feature));
	}
}); //.addTo(map);

// totalMax:

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

// as panes
var CO2_global_panes = new L.GeoJSON.AJAX(['geofiles/emissions_global-panes_simplified0.025.json'], {
// var CO2_global_panes = new L.GeoJSON.AJAX(['geojson_co2.php'], {
	style: style,
	onEachFeature: function(feature, layer) {
		layer.bindPopup('<h2>' + feature.properties.country_name_en +
			' (' + feature.properties.iso_a3 + ')</h2><p>' + feature.properties.MTonnes + ' MTonnes CO<sub>2</sub>/year'),
		layer.bindTooltip('<h2>' + feature.properties.country_name_en +
			' (' + feature.properties.iso_a3 + ')</h2><p>' + feature.properties.MTonnes + ' MTonnes CO<sub>2</sub>/year')
			// mouseover: highlightFeature,
			// // mouseout: resetHighlight,
			// //click: zoomToFeature
			// });
			layer.on('mouseover', highlightFeature);
		layer.on('mouseout', function() {
			CO2_global_panes.resetStyle(this);
		});
	}
	})//.addTo(map)
	;

function style(feature) {
	return {
		fillColor: getColor(feature.properties.MTonnes),
		weight: 2,
		opacity: 1,
		color: 'white',
		dashArray: '3',
		fillOpacity: 0.7
	};
}

function highlightFeature(e) {
	var layer = e.target;

	layer.setStyle({
		weight: 5,
		color: '#666',
		dashArray: '',
		fillOpacity: 0.7
	});

	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
		layer.bringToFront();
	}
}

//do not use this function, as one must always name the layer which is to be reset
// function resetHighlight(e) {
//     CO2_global_pane.resetStyle(this);
// }

function onEachFeature(feature, layer) {
	layer.on({
		mouseover: highlightFeature,
		mouseout: resetHighlight,
		click: zoomToFeature
	});
}

var legend_co2panes = L.control({position: 'topright'});

legend_co2panes.onAdd = function (map) {

    var div_co2legend = L.DomUtil.create('div', 'info legend_co2panes'),
        grades = [0, 10, 20, 50, 100, 200, 500, 1000],
        labels = [];
		div_co2legend.innerHTML += 'Total Emissions (2018) in <br> Mt CO<sub>2</sub> per year<br>'
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div_co2legend.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div_co2legend;
};

var legend_water = L.control({position: 'topright'});

legend_water.onAdd = function (map) {
    var div_waterlegend = L.DomUtil.create('div', 'info legend_water'),
        watergrades = [0, 20, 40, 60, 80],
        labels = [];
		div_waterlegend.innerHTML += 'Annual freshwater withdrawals<br> [% of internal resources]<br>'
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < watergrades.length; i++) {
        div_waterlegend.innerHTML +=
            '<i style="background:' + getWaterColor(watergrades[i] + 1) + '"></i> ' +
            watergrades[i] + (watergrades[i + 1] ? '&ndash;' + watergrades[i + 1] + '<br>' : '+');
    }
    return div_waterlegend;
};

var legend_BWS = L.control({position: 'topright'});

legend_BWS.onAdd = function (map) {
    var div_BWSlegend = L.DomUtil.create('div', 'info legend_water'),
        watergrades = [0, 1, 2, 3, 4],
        labels = [];
		div_BWSlegend.innerHTML += 'Baseline water stress score<br>'
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < watergrades.length; i++) {
        div_BWSlegend.innerHTML +=
            '<i style="background:' + getwaterBWSColor(watergrades[i] + 1) + '"></i> ' +
            watergrades[i] + (watergrades[i + 1] ? '&ndash;' + watergrades[i + 1] + '<br>' : '+');
    }
    return div_BWSlegend;
};
// legend_co2panes.addTo(map);



////////////////////////////////////////
// Chemical parks
var chemicalparks_eu = new L.GeoJSON.AJAX(
	["geofiles/chemicalparks-europe.geojson"], {
		pointToLayer: function(feature, latlng) {
			return L.circleMarker(latlng, {
				radius: 4,
				// color: powerplantsColors[feature.properties.primary_fuel],
				/*fillColor: feature.properties.color,*/
				// fillColor: powerplantsColors[feature.properties.primary_fuel],
				weight: 1,
				opacity: 0.7,
				fillOpacity: 0.4
			}).bindPopup(addParkPopupHandler(feature))
			;
		}
	}
);
function addParkPopupHandler(feature) {
	// let nace = globalModel.emissions.categories.naceCategories.items
	if (feature.properties) {
		return `<h2>${feature.properties.FacilityName}</h2>
                        ${feature.properties.Country} `;
	} else {
		console.log(feature);
	}
}
////////////////////////////////////////
// Refineries EUROPE
var refineries_eu = new L.GeoJSON.AJAX(
	["geofiles/refineries_europe.geojson"], {
		pointToLayer: function(feature, latlng) {
			return L.circleMarker(latlng, {
				radius: 4,
				// color: powerplantsColors[feature.properties.primary_fuel],
				/*fillColor: feature.properties.color,*/
				// fillColor: powerplantsColors[feature.properties.primary_fuel],
				weight: 1,
				opacity: 0.7,
				fillOpacity: 0.4
			}).bindPopup(addRefineryPopupHandler(feature))
			;
		}
	}
);
// Refineries GLOBAL (OSM)

var refineries_global = new L.GeoJSON.AJAX(["geofiles/refineries_global.geojson"], {
	onEachFeature: function(feature, layer) {
		layer.bindPopup(feature.properties.name),
		layer.bindTooltip(feature.properties.name)
			// mouseover: highlightFeature,
			// // mouseout: resetHighlight,
			// //click: zoomToFeature
			// });
			layer.on('mouseover', highlightFeature);
		layer.on('mouseout', function() {
			CO2_global_panes.resetStyle(this);
		});
	}
}
);


// var petro_ref_global_off = new L.GeoJSON.AJAX(["geojson_petro_off.php"], {
var petro_ref_global_off = new L.GeoJSON.AJAX(["geofiles/refineries_petro-global_off.geojson"], {
		pointToLayer: function(feature, latlng) {
			return L.circleMarker(latlng, {
				radius: 4,
				// color: powerplantsColors[feature.properties.primary_fuel],
				fillColor: '#16B8E0',
				// fillColor: powerplantsColors[feature.properties.primary_fuel],
				weight: 1,
				opacity: 0.7,
				fillOpacity: 0.4
			}).bindPopup(PetroRefPopupHandler(feature))
			;
		}
	}
);

// var petro_ref_global_on = new L.GeoJSON.AJAX(["geojson_petro_on.php"], {
var petro_ref_global_on = new L.GeoJSON.AJAX(["geofiles/refineries_petro-global_on.geojson"], {
	pointToLayer: function(feature, latlng) {
		return L.circleMarker(latlng, {
			radius: 4,
			// color: powerplantsColors[feature.properties.primary_fuel],
			fillColor: '#fffff',
			// fillColor: powerplantsColors[feature.properties.primary_fuel],
			weight: 1,
			opacity: 0.7,
			fillOpacity: 0.4
		}).bindPopup(PetroRefPopupHandler(feature))
		;
	}
}
);
function addRefineryPopupHandler(feature) {
	// let nace = globalModel.emissions.categories.naceCategories.items
	if (feature.properties) {
		return `<h2>${feature.properties.Name} (${feature.properties.Country})</h2>
		Owners: ${feature.properties.Owners}`;
	} else {
		console.log(feature);
	}
}

function PetroRefPopupHandler(feature) {
	// let nace = globalModel.emissions.categories.naceCategories.items
	if (feature.properties) {
		return `<h2>${feature.properties.refinery_name} </h2>
		Type of Hydrocarbon Reserve: ${feature.properties.reserve_info},<br>
		located in ${feature.properties.country_name_en} (${feature.properties.iso_a3})`;
	} else {
		console.log(feature);
	}
}
// ////////////////////////////
// protected area layer

var protectedSouthAfricaLayer = new L.GeoJSON.AJAX(['geofiles/protected_areas-africa.json'], { // additional Madagascar shapefile is included here via QGis
	style: areaStyle,
	onEachFeature: function(feature, layer) {
		layer.bindPopup(feature.properties.iso);
	}
}); //.addTo(map)
var protectedNorthAfricaLayer = new L.GeoJSON.AJAX(['geofiles/protected_areas-northafrica.json'], {
	style: areaStyle,
	onEachFeature: function(feature, layer) {
		layer.bindPopup(feature.properties.NAME);
	}
}); //.addTo(map)

// Group both layers
var protectedAfricaLayer = L.layerGroup([protectedNorthAfricaLayer, protectedSouthAfricaLayer]);


var protectedMexicoLayer = new L.GeoJSON.AJAX(['geofiles/protected_areas-mexico.json'], {
	style: areaStyle,
	onEachFeature: function(feature, layer) {
		layer.bindPopup(feature.properties.NAME);
	}
}); //.addTo(map)

var protectedArgentinaLayer = new L.GeoJSON.AJAX(['geofiles/protected_areas-argentina.json'], {
	style: areaStyle,
	onEachFeature: function(feature, layer) {
		layer.bindPopup(feature.properties.NAME);
	}
}); //.addTo(map)

var protectedChileLayer = new L.GeoJSON.AJAX(['geofiles/protected_areas-chile.json'], {
	style: areaStyle,
	onEachFeature: function(feature, layer) {
		layer.bindPopup(feature.properties.NAME);
	}
}); //.addTo(map)
// Group layers
var protectedSouthamericaLayer = L.layerGroup([protectedMexicoLayer, protectedArgentinaLayer, protectedChileLayer]);


var protectedChinaLayer = new L.GeoJSON.AJAX(['geofiles/protected_areas-china.json'], {
	style: areaStyle,
	onEachFeature: function(feature, layer) {
		layer.bindPopup(feature.properties.NAME);
	}
}); //.addTo(map)

var protectedKazakhstanLayer = new L.GeoJSON.AJAX(['geofiles/protected_areas-kazahkstan.json'], {
	style: areaStyle,
	onEachFeature: function(feature, layer) {
		layer.bindPopup(feature.properties.NAME);
	}
}); //.addTo(map)

// Group layers
var protectedAsiaLayer = L.layerGroup([protectedChinaLayer, protectedKazakhstanLayer]);


var protectedGermanyLayer = new L.GeoJSON.AJAX(['geofiles/protected_areas-germany.json'], {
	style: areaStyle,
	onEachFeature: function(feature, layer) {
		layer.bindPopup(feature.properties.NAME);
	}
}); //.addTo(map)

var protectedNorthEuropeLayer = new L.GeoJSON.AJAX(['geofiles/protected_areas-northeurope.json'], {
	style: areaStyle,
	onEachFeature: function(feature, layer) {
		layer.bindPopup(feature.properties.NAME);
	}
}); //.addTo(map)

var protectedSouthEuropeLayer = new L.GeoJSON.AJAX(['geofiles/protected_areas-southeurope.json'], {
	style: areaStyle,
	onEachFeature: function(feature, layer) {
		layer.bindPopup(feature.properties.NAME);
	}
}); //.addTo(map)
// Group layers
var protectedEuropeLayer = L.layerGroup([protectedGermanyLayer, protectedNorthEuropeLayer, protectedSouthEuropeLayer]);

// water stress withdrawal
// Europe
// var waterEULayer = new L.GeoJSON.AJAX(['geofiles/water_stress-europe.json'], {
// 	style: waterEUstyle,
// 	onEachFeature: function(feature, layer) {
// 		layer.bindPopup('<h2>' + feature.properties.admin +
// 		' (' + feature.properties.gu_a3 + ')</h2><p>' + feature.properties.water_stress + ' % of internal resources')
// 	}
// 	//     onEachFeature: function (feature, layer ) {
// 	//      layer.bindPopup(feature.properties.NAME_OF_WA)
// 	//    }
// }); //.addTo(map)

//global
var waterGlobalLayer = new L.GeoJSON.AJAX(['geofiles/water_stress-global.json'], {
	// var waterGlobalLayer = new L.GeoJSON.AJAX(['geojson_water.php'], {
	style: waterStyle,
	onEachFeature: function(feature, layer) {
		layer.bindPopup('<h2>' + feature.properties.country_name_en +
		' (' + feature.properties.iso_a3 + ')</h2><p>' + feature.properties.water_stress + ' % of internal resources'),
		layer.bindTooltip('<h2>' + feature.properties.country_name_en +
		' (' + feature.properties.iso_a3 + ')</h2><p>' + feature.properties.water_stress + ' % of internal resources'),
			layer.on('mouseover', highlightFeature);
		layer.on('mouseout', function() {
			waterGlobalLayer.resetStyle(this);
		});
	}
}); //.addTo(map)

//BWS
var waterBWSLayer = new L.GeoJSON.AJAX(['geofiles/water_stress-global_bws.json'], {
	// var waterBWSLayer = new L.GeoJSON.AJAX(['geojson_water_bws.php'], {
	style: waterBWSstyle,
	onEachFeature: function(feature, layer) {
		layer.bindPopup('<h2>' + feature.properties.country_name_en +
		' (' + feature.properties.iso_a3 + ')</h2><p>' + feature.properties.bws_indicator + ' % of internal resources'),
		layer.bindTooltip('<h2>' + feature.properties.country_name_en +
		' (' + feature.properties.iso_a3 + ')</h2><p>' + feature.properties.bws_indicator + ' % of internal resources'),
		layer.on('mouseover', highlightFeature);
		layer.on('mouseout', function() {
			waterBWSLayer.resetStyle(this);
		});
	}
}); //.addTo(map)

// water resources layer in africa

var waterAfricaLayer = new L.GeoJSON.AJAX(['geofiles/water-africa.json'], {
	style: waterResourcesStyle,
	//     onEachFeature: function (feature, layer ) {
	//      layer.bindPopup(feature.properties.NAME_OF_WA)
	//    }
}); //.addTo(map)

// water resources germany
var waterAfricaLayer = new L.GeoJSON.AJAX(['geofiles/water-africa.json'], {
	style: waterResourcesStyle,
	//     onEachFeature: function (feature, layer ) {
	//      layer.bindPopup(feature.properties.NAME_OF_WA)
	//    }
}); //.addTo(map)


var waterGermanyReservoir = new L.GeoJSON.AJAX(['geofiles/water_reservoir_Germany.geojson'], {
	style: waterResourcesStyle,
	//     onEachFeature: function (feature, layer ) {
	//      layer.bindPopup(feature.properties.NAME_OF_WA)
	//    }
}); //.addTo(map)
var waterGermanyRivers = new L.GeoJSON.AJAX(['geofiles/water_rivers_Germany.geojson'], {
	style: waterResourcesStyle,
	//     onEachFeature: function (feature, layer ) {
	//      layer.bindPopup(feature.properties.NAME_OF_WA)
	//    }
}); //.addTo(map)
var waterGermanyLakes = new L.GeoJSON.AJAX(['geofiles/water_lakes_Germany.geojson'], {
	style: waterResourcesStyle,
	//     onEachFeature: function (feature, layer ) {
	//      layer.bindPopup(feature.properties.NAME_OF_WA)
	//    }
}); //.addTo(map)

var waterGermanyLayer = L.layerGroup([waterGermanyReservoir, waterGermanyRivers,waterGermanyLakes]);





// ////////////////////////////
// PIPELINES
//BWS
var pipeline_de = new L.GeoJSON.AJAX(['geofiles/pipelines_gas_DE.geojson'], {
	// var waterBWSLayer = new L.GeoJSON.AJAX(['geojson_water_bws.php'], {
	// style: waterBWSstyle,
	onEachFeature: function(feature, layer) {
		layer.bindPopup('<h2>' + feature.properties.name + '</h2>Operator: ' +feature.properties.operator+ '<br>Substance: ' +feature.properties.substance),
		layer.bindTooltip('<h2>' + feature.properties.name + '</h2>Operator: ' +feature.properties.operator+ '<br>Substance: ' +feature.properties.substance),
		layer.on('mouseover', highlightFeature);
		layer.on('mouseout', function() {
			pipeline_de.resetStyle(this);
		});
	}
}); //.addTo(map)

/*pollutantFilterCO2Button = document.getElementById('pollutant-filter-CO2-button'),
pollutantFilterCOButton = document.getElementById('pollutant-filter-CO-button')


/* toggle-bility von Linien Daten */
function togglePipeline(event, type) {
	event.target.classList.toggle("is-info");
	if (event.target.classList.contains("is-info")) {
		fetch("geofiles/pipelines-" + type + ".json")
			.then(
				response => {
					return response.json();
				},
				reject => {
					console.error(reject);
				}
			)
			.then(geojson => {
				globalPipelines[type] = L.geoJson(geojson, {
					// style: pipelineStyle
				});
				globalPipelines[type].addTo(map);
			});
	} else {
		map.removeLayer(globalPipelines[type]);
	}
}

// ////////////////////////////
// 
/* toggle-bility von Punktquellen Daten */
function toggleEmitter(event, type) {
	event.target.classList.toggle("is-info");
	if (event.target.classList.contains("is-info")) {
		fetch("data.json")
			.then(
				response => {
					return response.json();
				},
				reject => {
					console.error(reject);
				}
			)
			.then(geojson => {
				markers[type] = L.geoJson(geojson, {
					pointToLayer: function(feature, latlng) {
						return L.circleMarker(latlng, {
							radius: 30,
							color: "#99d1e1",
							/*fillColor: feature.properties.color,*/
							fillColor: "#99d1e1",
							weight: 1,
							opacity: 0.7,
							fillOpacity: 0.4
						}).bindPopup(addPopupHandler(feature));
					}
				});
				markers[type].addTo(map);
			});
	} else {
		map.removeLayer(markers[type]);
	}
}

function addPopupHandler(feature) {
	return `<h2>${feature.properties.FacilityName}</h2>
        ${feature.properties.CountryName}`;
}


////////////////////////////////////////////////////////////////////////////////////
// BUTTONS

pvButton.addEventListener("click", toggleLayer(pvButton, pvTileLayer));
windButton.addEventListener("click", toggleLayer(windButton, windTileLayer));
waterButton.addEventListener("click", toggleLayer(waterButton, waterTileLayer));
waterAfricaButton.addEventListener("click", toggleLayer(waterAfricaButton, waterAfricaLayer));
waterGermanyButton.addEventListener("click", toggleLayer(waterGermanyButton, waterGermanyLayer));
//waterEUButton.addEventListener("click", toggleLayerLegend(waterEUButton, waterEULayer, legend_water));
waterStressButton.addEventListener("click", toggleLayerLegend(waterStressButton, waterGlobalLayer, legend_water));
waterBWSButton.addEventListener("click", toggleLayerLegend(waterBWSButton, waterBWSLayer, legend_BWS));

CO2globalButton.addEventListener("click", toggleLayerScale(CO2globalButton, CO2_global, scale_global));
CO2globalpanesButton.addEventListener("click", toggleLayerLegend(CO2globalpanesButton, CO2_global_panes, legend_co2panes));
GHGUSAButton.addEventListener("click", toggleLayerScale(GHGUSAButton, GHG_USA, scale_legend));

powerplantsButton.addEventListener("click", toggleLayerLegend(powerplantsButton, power_plants, legend_power));
emitterButton.addEventListener("click", event => {
	toggleEmitter(event, "emitter");
});

protectedAfricaButton.addEventListener("click", toggleLayer(protectedAfricaButton, protectedAfricaLayer));
protectedSouthmericaButton.addEventListener("click", toggleLayer(protectedSouthmericaButton, protectedSouthamericaLayer));
protectedAsiaButton.addEventListener("click", toggleLayer(protectedAsiaButton, protectedAsiaLayer));
protectedEuropeButton.addEventListener("click", toggleLayer(protectedEuropeButton, protectedEuropeLayer));
// protectedArgentinaButton.addEventListener("click", toggleLayer(protectedArgentinaButton, protectedArgentinaLayer));
// protectedChileButton.addEventListener("click", toggleLayer(protectedChileButton, protectedChileLayer));
// protectedChinaButton.addEventListener("click", toggleLayer(protectedChinaButton, protectedChinaLayer));
// protectedKazakhstanButton.addEventListener("click", toggleLayer(protectedKazakhstanButton, protectedKazakhstanLayer));
// protectedMexicoButton.addEventListener("click", toggleLayer(protectedMexicoButton, protectedMexicoLayer));
// protectedGermanyButton.addEventListener("click", toggleLayer(protectedGermanyButton, protectedGermanyLayer));
// protectedNorthEuropeButton.addEventListener("click", toggleLayer(protectedNorthEuropeButton, protectedNorthEuropeLayer));
// protectedSouthEuropeButton.addEventListener("click", toggleLayer(protectedSouthEuropeButton, protectedSouthEuropeLayer));

countryButton.addEventListener("click", toggleLayer(countryButton, country_layers));
renewablesButton.addEventListener("click", toggleLayerLegend(renewablesButton, renewables_plants, legend_EE));
refineriesEuButton.addEventListener("click", toggleLayer(refineriesEuButton, refineries_eu));
refineriesGlobalButton.addEventListener("click", toggleLayer(refineriesGlobalButton, refineries_global));
chemicalparksEuButton.addEventListener("click", toggleLayer(chemicalparksEuButton, chemicalparks_eu));
petroGlobalOffButton.addEventListener("click", toggleLayer(petroGlobalOffButton, petro_ref_global_off));
petroGlobalOnButton.addEventListener("click", toggleLayer(petroGlobalOnButton, petro_ref_global_on));
GridDEButton.addEventListener("click", toggleLayer(GridDEButton, grid_de_layer));
pipelineDEButton.addEventListener("click", toggleLayer(pipelineDEButton, pipeline_de));

ethylenePipelineButton.addEventListener("click", event => {
	togglePipeline(event, "ethylene");
});
propylenePipelineButton.addEventListener("click", event => {
	togglePipeline(event, "propylene");
});
totalPipelineButton.addEventListener("click", event => {
	togglePipeline(event, "total-simplified1percent");
});
kenyaPipelineButton.addEventListener("click", event => {
	togglePipeline(event, "kenya");
});
usaPipelineButton.addEventListener("click", event => {
	togglePipeline(event, "usa");
});


/***********************/
/* Load data functions */
/***********************/

// keep reference to the markers for filtering
var globalPipelines = {};

document.addEventListener("DOMContentLoaded", event => {
	showMap();
	loadGlobalDefs();
	createScale_global();
});