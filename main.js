
var table_all = document.getElementById('table-all-emissions');
var table_selected = document.getElementById('table-selected-emissions');

// Define a GeoJSON URL
var geojsonURL = 'argentina_emissions.geojson';

// not necessary anymore - only one layer
// var activeLayers; // Declare a variable to hold the active map layers

////////////////////////////////////////////////////
//
//  CATEGORIES
//   
//  LAYERS & COLORS
//
////////////////////////////////////////////////////

var geojsonLayer; // Declare a variable to hold the GeoJSON layer
// var aluminiumLayer, steelLayer, cementLayer, paperLayer, thermalLayer, refineryLayer, biogasLayer, bioethanolLayer, ammoniaLayer, methanolLayer, etilenoLayer;   // Add more variables for other layers
var layer;
// Declare variables for GeoJSON layers
var layers = {};

// Declare counter for each type of industry
var counts = [];

// Group layers by source type
var allLayers = [
        { name_en: 'Ammonia', name_es: 'Amoniaco', name: 'Ammonia', id: 'button-ammonia', industry: 'industrial'},
        { name_en: 'Ethylene', name_es: 'Etileno', name: 'Etileno', id: 'button-etileno', industry: 'industrial'},
        { name_en: 'Methanol', name_es: 'Metanol', name: 'Methanol', id: 'button-methanol', industry: 'industrial'},
        { name_en: 'Aluminium', name_es: 'Aluminio', name: 'Aluminium', id: 'button-Aluminium', industry: 'industrial'},
        { name_en: 'Steel', name_es: 'Acero', name: 'Steel', id: 'button-Steel', industry: 'industrial'},
        { name_en: 'Cement', name_es: 'Cemento', name: 'Cement', id: 'button-cement', industry: 'industrial'},
        { name_en: 'Pulp and Paper', name_es: 'Celulosa y Papel', name: 'Pulp and Paper', id: 'button-paper', industry: 'industrial'},
        { name_en: 'Refineries', name_es: 'Refinerías', name: 'Refinery', id: 'button-refinery', industry: 'industrial'},
        { name_en: 'Fossil Thermal Power Plant', name_es: 'Termoeléctricas Fuentes Fósiles', name: 'Fossil Thermal Power Plant', id: 'button-thermal', industry: 'industrial'},
        { name_en: 'Biogas Power Plant', name_es: 'Termoeléctricas Biogás', name: 'Biogas Power Plant', id: 'button-biogas', industry: 'biogenic'},
        { name_en: 'Bioethanol', name_es: 'Bioetanol', name: 'Bioethanol', id: 'button-bioethanol', industry: 'biogenic'},
        { name_en: 'Biomass Power Plant', name_es: 'Termoeléctricas Biomasa', name: 'Biomass Power Plant', id: 'button-biomass', industry: 'biogenic'}
    ];
    // 12 in total

var industrialLayers = [];
var biogenicLayers = [];

// var industrialLayers = [
//     "Ammonia", 
//     "Etileno",
//     "Methanol", 
//     "Aluminium", 
//     "Steel", 
//     "Cement", 
//     "Pulp and paper",
//     "Refinery", 
//     "Fossil thermal power plant"
//     ];
// var biogenicLayers = [
//     "Biogas Power Plant", 
//     "Bioethanol",
//     "Biomass Power Plant"
// ];

allLayers.forEach(data => {
    if(data.industry=="industrial") {
        industrialLayers.push(data.name);}
    });
allLayers.forEach(data => {
    if(data.industry=="biogenic") {
        biogenicLayers.push(data.name);}
    });


let baseColors = {
    "ptx_first": "rgb(0, 182, 157)",
    "ptx_second": "rgb(191, 226, 71)",
    "ptx_fourth": "rgb(255, 187, 0)"
    }, 
    emissionColors_D = {
        "industrial": "rgb(84, 114, 155)",
        "biogenic": "rgb(57, 137, 126)" 
    },
    emissionTypeColors_D = {
        "Ammonia": "rgb(241, 219, 38, 1)",
        "Etileno": "rgb(241, 219, 38, 0.8)",
        "Methanol": "rgb(241, 219, 38, 0.6)",
        
        "Aluminium": "rgb(113, 184, 210, 1)",
        "Steel": "rgb(113, 184, 210, 0.8)",
        "Cement": "rgb(113, 184, 210, 0.6)",
        
        "Pulp and Paper": "rgb(209, 146, 198, 1)",
        
        "Refinery": "rgb(164, 146, 220, 1)",
        "Fossil Thermal Power Plant": "rgb(164, 146, 220, 0.8)",
        
        "Biogas Power Plant": "rgb(143, 196, 146, 1)",
        "Bioethanol": "rgb(143, 196, 146, 0.8)",
        "Biomass Power Plant": "rgb(143, 196, 146, 0.6)"
    }

////////////////////////////////////////////////////
//
//   LANGUAGE
//
////////////////////////////////////////////////////
let lang; // Default language
           
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('lang')) {
    lang = urlParams.get('lang');
    // lang_init = urlParams.get('lang');
} else {
    lang = 'es';
}

if (lang != "es" && lang != "en") {
    window.location.replace("index.html?lang=es");
    // if possible (and requested)
    // TODO: show popup ,that the desired language is not available
}

// Prepare tables for the data which will be loaded and can be filtered
if (lang==="en") {
    var table = "<table>\
        <tr>\
            <th id='table_header_industry_type'>Industry</th>\
            <th style='text-align: right;' id='table_header_total_emissions'>Total Emissions (kilotonnes)</th>\
            <th style='text-align: right;' id='table_header_number_entries'>Number of Entries</th>\
        </tr>";
} else if (lang==="es") {
    var table = "<table>\
        <tr>\
            <th id='table_header_industry_type'>Industria</th>\
            <th style='text-align: right;' id='table_header_total_emissions'>Emisiones totales (kilotoneladas)</th>\
            <th style='text-align: right;' id='table_header_number_entries'>Número de entradas</th>\
        </tr>";
}

// let buttonData;
// // Define a list of button names
// if (lang=="es") {
//     buttonData = [
//         { name_lang: 'Amoniaco', name: 'Ammonia', id: 'button-ammonia', industry: 'industrial'},
//         { name_lang: 'Etileno', name: 'Etileno', id: 'button-etileno', industry: 'industrial'},
//         { name_lang: 'Metanol', name: 'Methanol', id: 'button-methanol', industry: 'industrial'},
//         { name_lang: 'Aluminio', name: 'Aluminium', id: 'button-Aluminium', industry: 'industrial'},
//         { name_lang: 'Acero', name: 'Steel', id: 'button-Steel', industry: 'industrial'},
//         { name_lang: 'Cemento', name: 'Cement', id: 'button-cement', industry: 'industrial'},
//         { name_lang: 'Celulosa y papel', name: 'Pulp and paper', id: 'button-paper', industry: 'biogenic'},
//         { name_lang: 'Refinerías', name: 'Refinery', id: 'button-refinery', industry: 'industrial'},
//         // { name_lang: 'Termoeléctricas fuentes fósiles', name: 'Thermal power plant', id: 'button-thermal', industry: 'industrial'},
//         { name_lang: 'Termoeléctricas fuentes fósiles', name: 'Fossil thermal power plant', id: 'button-thermal', industry: 'industrial'},
//         { name_lang: 'Termoeléctricas Biogás', name: 'Biogas Power Plant', id: 'button-biogas', industry: 'biogenic'},
//         { name_lang: 'Bioetanol', name: 'Bioethanol', id: 'button-bioethanol', industry: 'biogenic'},
//         { name_lang: 'Termoeléctricas Biomasa', name: 'Biomass Power Plant', id: 'button-biomass', industry: 'biogenic'},
//     ];
// } else if(lang=="en") {
//     buttonData = [
//         { name_lang: 'Ammonia', name: 'Ammonia', id: 'button-ammonia', industry: 'industrial'},
//         { name_lang: 'Etileno', name: 'Etileno', id: 'button-etileno', industry: 'industrial'},
//         { name_lang: 'Methanol', name: 'Methanol', id: 'button-methanol', industry: 'industrial'},
//         { name_lang: 'Aluminium', name: 'Aluminium', id: 'button-Aluminium', industry: 'industrial'},
//         { name_lang: 'Steel', name: 'Steel', id: 'button-Steel', industry: 'industrial'},
//         { name_lang: 'Cement', name: 'Cement', id: 'button-cement', industry: 'industrial'},
//         { name_lang: 'Pulp and paper', name: 'Pulp and paper', id: 'button-paper', industry: 'biogenic'},
//         { name_lang: 'Refinery', name: 'Refinery', id: 'button-refinery', industry: 'industrial'},
//         { name_lang: 'Fossil thermal power plant', name: 'Fossil thermal power plant', id: 'button-thermal', industry: 'industrial'},
//         { name_lang: 'Biogas Power Plant', name: 'Biogas Power Plant', id: 'button-biogas', industry: 'biogenic'},
//         { name_lang: 'Bioethanol', name: 'Bioethanol', id: 'button-bioethanol', industry: 'biogenic'},
//         { name_lang: 'Biomass Power Plant', name: 'Biomass Power Plant', id: 'button-biomass', industry: 'biogenic'},
//     ];
// }

// Get a reference to the container element
const buttonContainer = document.getElementById('button-container');

// Loop through the button data and create buttons
allLayers.forEach(data => {
    // Create a button element
    const button = document.createElement('button');
  
    // Set the button's text to the name from the data
    if(lang=="en") {
        button.textContent = data.name_en;
    } else if (lang=="es") {
        button.textContent = data.name_es;
    }
    // Text wird aber über die en.js  bzw. es.js sowieso überschrieben!
    // Aber damit es konsistent mit der Tabelle ist, müssen Textänderungen an beiden Stellen vorgenommen werden.
    
    // Set the button's ID to the ID from the data
    button.id = data.id;
  
    // Add a class for styling (if needed)
    button.classList.add('btn', 'btn-block', 'custom-button-class', 'toggle-layer-button', 'button', 'is-fullwidth', );
    button.classList.add(data.id);
  
    // Set the button's background color from the data
    button.style.backgroundColor = emissionTypeColors_D[data.name];

    // add "data-layer" name for each button
    button.setAttribute('data-layer', data.name);
    button.setAttribute('industry-type', data.industry)
    // Add event listeners or other customizations as needed
    // button.addEventListener('click', () => {
    //   // Define the click behavior for each button
    // //   alert(`You clicked ${data.name}`);
    // //   addGeoJSONLayer("industry", `${data.name}`);

    //     // var layerName = button.getAttribute('data-layer');
    //     // console.log(layerName);
    //     // var layer = layers[layerName];
    //     // console.log(layer)
    //     // if (layer) {
    //     //     toggleLayer(layer);
    //     // }
    // });
  // Append the button to the container
  buttonContainer.appendChild(button);

});

function updateContent(language) {
    // not necessary anymore, because another language toggler is used
    // $('#language_button_es, #language_button_en').removeClass('lang_active');
    
    let translations = window['translations_' + language];
    let current_url = window.location.href;
    console.log(lang)
    if(!current_url.includes('lang')) {
        current_url+="?lang="+lang;
    }
    console.log(current_url);
    let url_en, url_es;
    if (lang=="en") {
        url_en=current_url;
        url_es=current_url.replace('en','es');
    } else if (lang=="es"){
        url_es=current_url;
        url_en=current_url.replace('es','en');
    }
    
    // console.log(translations)
    // if (!translations) {
    // 	// Handle cases where the selected language is not found
    // 	lang = 'es';
    // 	console.log('Language not found. Falling back to spanish.');
    // 	translations = window['translations_' + lang];
    // 	// console.log(translations)
    // 	window.location.replace("index.html?lang=es");
    // }	
    // console.log(language);
    // console.log('updateContent before: ' + language);

    // not necessary anymore, because another language toggler is used
    // if(language==="es") {
    // 	$("#language_button_es").addClass('lang_active');
    // } else if (language==="en") {
    // 	$("#language_button_en").addClass('lang_active');
    // }
    // in the context of wordpress, jQuery functionalities must be called like this:

    // (function ($) {
    // ... 
    // code 
    // ...
    // })(jQuery);
    
    (function ($){
        $("#introduction_title").html(translations.introduction_title);
        $("#introduction_title").html(translations.introduction_title);
        
        $("#introduction_text").html(translations.introduction_text);
        $("#project").html(translations.project);	
        $("#language_picker").html(translations.language_picker);	
        $("#languge_switch_link").html(translations.languge_switch_link);	
        
        $("#sidebar_title").html(translations.sidebar_title);
        $("#sidebar_header_filters").html(translations.sidebar_header_filters);
        $("#filter_title").html(translations.filter_title);
        $("#filter_text").html(translations.filter_text);
        $("#filter_text").html(translations.filter_text);
        
        $("#manual_filter_title").html(translations.manual_filter_title);

        $("#emission_type").html(translations.emission_type);
        $("#toggle-industrial-button").html(translations.industrial_button);
        $("#toggle-biogenic-button").html(translations.biogenic_button);
        $("#only_selected_plants").html(translations.only_selected_plants);
        $("#toggle-all-button").html(translations.deselect_all_button);
        
        $("#statistics_title").html(translations.statistics_title);
        $("#statistics").html(translations.statistics);
        $("#statistics_total").html(translations.statistics_total);		
        $("#table_emissions_title").html(translations.table_emissions_title);		
        
        $("#circle_title").html(translations.circle_title);
        $("#circle_size").html(translations.circle_size);
        $("#zoom_factor").html(translations.zoom_factor);		
        $("#scale_title").html(translations.scale_title);
        $("#disclaimer_title").html(translations.disclaimer_title);
        
        // $("#ToIncludeIntroduction").load("introduction.html", function() {
        // }); 

        // $("#ToIncludeData").load("data.html", function() {
        // }); 
        $("#data_title").html(translations.data_title);
        $("#methods").html(translations.methods);
        $("#sources").html(translations.sources);			
        $("#download_text").html(translations.download_text);
        $("#download_csv").html(translations.download_csv);
        $("#download_geojson").html(translations.download_geojson);		

        $("#map_programming").html(translations.map_programming);	
        $("#contact").html(translations.contact);
        $("#disclaimer").html(translations.disclaimer);
        $("#legal").html(translations.legal);
        
        // update button and table texts, which are generated in main.js
        // here, classes are used, because the button texts and the rows in the table, where total emissions are calculated
        // are updated to the same text.
        $('.button-Aluminium').html(translations.button_Aluminium);
        $('.button-Steel').html(translations.button_Steel);
        $('.button-cement').html(translations.button_cement);
        $('.button-refinery').html(translations.button_refinery);
        $('.button-thermal').html(translations.button_thermal);
        $('.button-ammonia').html(translations.button_ammonia);
        $('.button-etileno').html(translations.button_etileno);
        $('.button-methanol').html(translations.button_methanol);
        $('.button-bioethanol').html(translations.button_bioethanol);
        $('.button-biogas').html(translations.button_biogas);
        $('.button-paper').html(translations.button_paper);
        $('.button-biomass').html(translations.button_biomass);

        $('#table_header_industry_type').html(translations.table_header_industry_type);
        $('#table_header_total_emissions').html(translations.table_header_total_emissions);
        $('#table_header_number_entries').html(translations.table_header_number_entries);

        $('#link_english').attr('href', url_en);
        $('#link_spanish').attr('href', url_es);

        // console.log('updatedContent: ' + language)
    })(jQuery);
};

(function ($) {
    $('#language-toggle').on('click', function(){
        // let zoomlevel = map.getZoom();
        // let center = map.getCenter();
        // let style=getActiveLayers();
        // console.log(style)
        // console.log('current language before click: ' + lang);
        // console.log('lang_init: ' + lang_init)
        // if (lang_init !="es" && lang_init != 'null') {
        //     updateContent(lang_init)    
        //     lang_init='null';
        //     console.log('lang_init: '+ lang_init)
        //     console.log(typeof(lang_init))
        // } 
        //     if (lang_init!="en" || lang_init != "es") {
        // 
        // }
        // else {
        if (lang==="en") {
            updateContent("es"); 
            lang="es";
        // Change Map Labels to language as well	
        // Auf Wunsch vom PtX Hub soll ausschließlich die spanischen Beschriftung angezeigt werden
        // Dadurch ist ein Reload nicht mehr notwendig
        // showMap('reload', lang, zoomlevel, center, style);
        // toggleAllLayers();
        } else if (lang==="es") {
            updateContent("en"); 
            lang="en";
            // Change Map Labels to language as well
            // Auf Wunsch vom PtX Hub soll ausschließlich die spanischen Beschriftung angezeigt werden
            // Dadurch ist ein Reload nicht mehr notwendig
            // showMap('reload', lang, zoomlevel, center, style);
            // toggleAllLayers();
        }
        // }
        // console.log('current language after click: ' + lang);
    });
})(jQuery);


////////////////////////////////////////////////////
//
//  CALCULATIONS for the 2nd TAB - total emissions and emissions per categories
//
////////////////////////////////////////////////////

const element = document.getElementById('sidebar');
element.style.backgroundColor = baseColors.ptx_first; // Set the background color to the first color in the palette (Red)

// Initialize an object to store total emissions for each industry type
var totalEmissions = {};
var totalEmissions_total = 0;
var formattedEmissions_total = 0;
var formattedEmissions_selected = 0;

var allLayersVisible = true; // Initial state, all layers are visible
var biogenicLayersVisible = true; // Initial state, biogenic layers are visible
var industrialLayersVisible = true; // Initial state, industrial layers are visible

// Add a button to the HTML and set its click event to toggleAllLayers
var toggleAllButton = document.getElementById('toggle-all-button'); // Replace with your button's ID
    toggleAllButton.addEventListener('click', toggleAllLayers);

var toggleBiogenicButton = document.getElementById('toggle-biogenic-button'); // Replace with your button's ID
    toggleBiogenicButton.addEventListener('click', toggleBiogenicLayers);
    // toggleBiogenicButton.style.backgroundColor = emissionColors_D['biogenic'];
    // toggleBiogenicButton.style.color="white";
    toggleBiogenicButton.classList.add('toggle-biogenic-button');


var toggleIndustrialButton = document.getElementById('toggle-industrial-button'); // Replace with your button's ID
    toggleIndustrialButton.addEventListener('click', toggleIndustrialLayers);
    // toggleIndustrialButton.style.backgroundColor = emissionColors_D['industrial'];
    // toggleIndustrialButton.style.color="white";
    toggleIndustrialButton.classList.add('toggle-industrial-button');

// Specify the property you want to find the maximum value for
var propertyToFindMax = 'CO2_emissions_t';
// Initialize a variable to store the maximum value
var maxEmissionsArgentina = -Infinity; // Start with negative infinity as an initial value
// var maxEmissionsArgentina_Mt = -Infinity; // Start with negative infinity as an initial value
// var maxRadius_Mt = -Infinity; // Start with negative infinity as an initial value
var maxRadius_kt = -Infinity; // Start with negative infinity as an initial value

var radius_slider = document.getElementById('radius_slider');
var radius_slider_output = document.getElementById('radius_slider_output');
var sliderValue = 1;
var sliderValue_old = 1;

// Add an event listener to the slider
radius_slider.addEventListener('input', function () {
    // Get the current slider value
    sliderValue = parseFloat(radius_slider.value);

    // maxRadius_Mt=maxEmissionsArgentina/1000000 * sliderValue;
    maxRadius_kt=maxEmissionsArgentina/1000 * sliderValue;
    radius_slider_output.innerHTML = sliderValue;    
    createScale(sliderValue);

    // Call the function to update circle sizes
    for (const [key, layername] of Object.entries(layers)) {
        // console.log(`${key}: ${value}`);
        updateCircleSizes(sliderValue_old, sliderValue, layername);
        // console.log("sliderValue: ",sliderValue)
      }
        
    sliderValue_old=sliderValue;
    // console.log('AFTER CHANGE Old Value: ' + sliderValue_old);
    // console.log('New Value: ' + sliderValue);
});

// Function to update circle sizes
function updateCircleSizes(oldValue, newValue, layer) {
    layer.eachLayer(function (featureLayer) {
        // Get the current radius of the circle marker
        var currentRadius = featureLayer.getRadius();

        // Calculate the new radius by multiplying the current radius with a scale factor
        // var newRadius = currentRadius * sliderValue;
        var newRadius = currentRadius * (newValue / oldValue);
        
        // Set the new radius
        featureLayer.setRadius(newRadius); // Set the new radius
    });

    // Refresh the layer to apply the changes
    layer.eachLayer(function (featureLayer) {
        featureLayer.redraw(); // Redraw the marker with the updated radius
    });
}

// Function to check if an object is empty
// used when loading the geojsonLayers
function isEmptyObject(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

// Function to add the GeoJSON layer to the map
function addGeoJSONLayer(filterValue) {
    fetch(geojsonURL)
    .then(response => response.json())
    .then(data => {
            // Filter the data and exclude features with empty coordinates
            // var filteredData = data.features.filter(function (feature) {
            var filteredData = data.features.filter(function (feature) {
                // console.log(filteredData)
                // var filteredData = data.features.filter(feature => feature.properties[industryType] === filterValue);
                // Check if 'geometry' property is defined and if 'coordinates' is not empty
                var hasValidCoordinates = feature.geometry && feature.geometry.coordinates && !isEmptyObject(feature.geometry.coordinates);
                
                // Check if the industryType matches the filterValue
                var matchesIndustry = feature.properties.Industry === filterValue;
                
                // Return true if both conditions are met
                return hasValidCoordinates && matchesIndustry;
            });

            // Create a GeoJSON layer and add it to the map
            geojsonLayer = L.geoJSON(filteredData, {
                pointToLayer: function (feature, latlng) {
                    // check, ob die geojson überhaupt Koordinaten UND bekannte Emissionen haben
                    // console.log(feature.geometry)
                    // if (!isNaN(propertyValue) && feature.geometry.coordinates && propertyValue > maxEmissionsArgentina) {
                    // if (feature.geometry.coordinates && parseFloat(feature.properties.CO2_emissions_t) >0 && feature.geometry.coordinates ) {
                    // if (feature.geometry && feature.geometry.coordinates && !isEmptyObject(feature.geometry.coordinates)) {
                    if (feature.geometry && feature.geometry.coordinates && !isEmptyObject(feature.geometry.coordinates) && feature.properties.CO2_emissions_t >0 ) {
                        return L.circleMarker(latlng, {
                            // radius: feature.properties.Tonnes / 100000, // statt 37.6 sollte dort die totalMax der Emissionen stehen - hier wurde nun der Wert der E-PRTR Json genommen.
                            // radius: Math.sqrt(feature.properties.CO2_emissions_t / maxEmissionsArgentina)*50, // statt 37.6 sollte dort die totalMax der Emissionen stehen - hier wurde nun der Wert der E-PRTR Json genommen.
                            // radius: Math.sqrt(feature.properties.CO2_emissions_t / (maxRadius_Mt * 1000000) )*50*sliderValue, // statt 37.6 sollte dort die totalMax der Emissionen stehen - hier wurde nun der Wert der E-PRTR Json genommen.                            color: emissionTypeColors_D[filterValue],
                            radius: Math.sqrt(feature.properties.CO2_emissions_t / (maxRadius_kt * 1000) )*50*sliderValue, // statt 37.6 sollte dort die totalMax der Emissionen stehen - hier wurde nun der Wert der E-PRTR Json genommen.                            color: emissionTypeColors_D[filterValue],
                            color: emissionTypeColors_D[filterValue],
                            /*fillColor: feature.properties.color,*/
                            fillColor: emissionTypeColors_D[filterValue],
                            weight: 1,
                            opacity: 0.7,
                            fillOpacity: 0.5
                        }).bindPopup(addCO2argentinaPopupHandler(feature));
                    } else {
                        if (!parseFloat(feature.properties.CO2_emissions_t)>0) {
                            console.log(feature.properties.Name, "(Company: ",feature.properties.Company,  ")"," does not contain information about CO2 emissions")
                        } else if (!feature.geometry) {
                            console.error(feature.properties.Name, "(Company: ",feature.properties.Company,  ")","does not contain valid coordinates");
                        }            
                    }
            }}) // .addTo(map);


            // Assign the layer to the layers object with the filterValue as the key
            layers[filterValue] = geojsonLayer;
            geojsonLayer.addTo(map);
        })
        .catch(error => {
            console.error(`Error loading GeoJSON data: ${error}`);
        });
    }

// Function to toggle all layers
function toggleAllLayers() {
    // wenn nur ein Teil oder kein Layer zu sehen ist, dann alle einschalten
    if(!allLayersVisible) {  
        if(!industrialLayersVisible) {
            toggleIndustrialLayers();
        }
        if(!biogenicLayersVisible) {
            toggleBiogenicLayers();
        }
        if (lang==="es") {
            document.getElementById('toggle-all-button').text = 'Deseleccionar todo';
        } else if (lang==="en") {
            document.getElementById('toggle-all-button').text = 'Deselect all';
        }
        // // console.log('alle aus');
        // document.getElementById("toggle-all-button").classList.add('btn-secondary');
        // document.getElementById("toggle-all-button").classList.remove('btn-outline-secondary');

    } else 
    // wenn alle bereits zu sehen sind (und nicht nur ein Teil), dann alle ausschalten
    if(allLayersVisible) {  
        if(industrialLayersVisible) {
            toggleIndustrialLayers();
        }
        if(biogenicLayersVisible) {
            toggleBiogenicLayers();
        }
        if (lang === "es") {
            document.getElementById('toggle-all-button').text = 'Seleccionar todo';
        } else if (lang==="en") {
            document.getElementById('toggle-all-button').text = 'Select all';
        }
        // document.getElementById("toggle-all-button").classList.add('btn-outline-secondary');
        // document.getElementById("toggle-all-button").classList.remove('btn-secondary');
        // // console.log('alle an');
    }

}

function toggleIndustrialLayers() {
    // Filter and show layers with industrial source
    if (industrialLayersVisible) {
        industrialLayers.forEach(function (layerName) {
            if (map.hasLayer(layers[layerName])) {
                map.removeLayer(layers[layerName]);
            } else {
                map.addLayer(layers[layerName]);
            }
            // document.querySelector("[data-layer=" + CSS.escape(layerName) + "]").style.backgroundColor = "white";
            document.querySelector("[data-layer=" + CSS.escape(layerName) + "]").style.backgroundColor = "";
            
            let button_id = allLayers.find(item => item.name === layerName)?.id;
            document.querySelector("[data-layer=" + CSS.escape(layerName) + "]").classList.add(button_id+'-outline');
        });
        // toggleIndustrialButton.style.backgroundColor="white";
        // toggleIndustrialButton.style.color="black";
        toggleIndustrialButton.classList.remove("toggle-industrial-button");
        toggleIndustrialButton.classList.add("toggle-industrial-button-outline");

        if (lang === "es") {
            document.getElementById('toggle-all-button').text = 'Seleccionar todo';
        } else if (lang==="en") {
            document.getElementById('toggle-all-button').text = 'Select all';
        }
        document.getElementById("toggle-all-button").classList.add('btn-outline-secondary');
        document.getElementById("toggle-all-button").classList.remove('btn-secondary');
        // console.log('alle an');
        allLayersVisible = false;
        
    } else {
        industrialLayers.forEach(function (layerName) {
            map.addLayer(layers[layerName]);
            document.querySelector("[data-layer=" + CSS.escape(layerName) + "]").style.backgroundColor = emissionTypeColors_D[layerName];

            let button_id = allLayers.find(item => item.name === layerName)?.id;
            document.querySelector("[data-layer=" + CSS.escape(layerName) + "]").classList.remove(button_id+'-outline');

        });
        toggleIndustrialButton.classList.remove("toggle-industrial-button-outline");
        toggleIndustrialButton.classList.add("toggle-industrial-button");

        // toggleIndustrialButton.style.backgroundColor=emissionColors_D['industrial'];
        // toggleIndustrialButton.style.color="white";
    }
    industrialLayersVisible = !industrialLayersVisible; // Toggle the state

    if (!biogenicLayersVisible || !industrialLayersVisible) {
        allLayersVisible = false;
    } else if (biogenicLayersVisible && industrialLayersVisible) {
        allLayersVisible = true;

        if (lang==="es") {
            document.getElementById('toggle-all-button').text = 'Deseleccionar todo';
        } else if (lang==="en") {
            document.getElementById('toggle-all-button').text = 'Deselect all';
        }
        document.getElementById("toggle-all-button").classList.remove('btn-outline-secondary');
        document.getElementById("toggle-all-button").classList.add('btn-secondary');
        // console.log('alle an');
    }
}

function toggleBiogenicLayers() {
    // Filter and show layers with industrial source
    if (biogenicLayersVisible) {
        biogenicLayers.forEach(function (layerName) {
            if (map.hasLayer(layers[layerName])) {
                map.removeLayer(layers[layerName]);
            } else {
                map.addLayer(layers[layerName]);
            }
            // document.querySelector("[data-layer=" + CSS.escape(layerName) + "]").style.backgroundColor = "white";
            document.querySelector("[data-layer=" + CSS.escape(layerName) + "]").style.backgroundColor = "";
            let button_id = allLayers.find(item => item.name === layerName)?.id;
            document.querySelector("[data-layer=" + CSS.escape(layerName) + "]").classList.add(button_id+'-outline');

        });
        // toggleBiogenicButton.style.backgroundColor="white";
        // toggleBiogenicButton.style.color="black";
        // toggleBiogenicButton.style.backgroundColor="";
        toggleBiogenicButton.classList.remove("toggle-biogenic-button");
        toggleBiogenicButton.classList.add("toggle-biogenic-button-outline");

        // TOGGLE SELECT ALL BUTTON and the STATE
        allLayersVisible = false;
        if (lang==="es") {
            document.getElementById('toggle-all-button').text = 'Seleccionar todo';
        } else if (lang==="en") {
            document.getElementById('toggle-all-button').text = 'Select all';
        }
        document.getElementById("toggle-all-button").classList.add('btn-outline-secondary');
        document.getElementById("toggle-all-button").classList.remove('btn-secondary');
        // console.log('alle an');
    } else {
        biogenicLayers.forEach(function (layerName) {
            map.addLayer(layers[layerName]);
                document.querySelector("[data-layer=" + CSS.escape(layerName) + "]").style.backgroundColor = emissionTypeColors_D[layerName];
                let button_id = allLayers.find(item => item.name === layerName)?.id;
                document.querySelector("[data-layer=" + CSS.escape(layerName) + "]").classList.remove(button_id+'-outline');
        });
        toggleBiogenicButton.classList.add("toggle-biogenic-button");
        toggleBiogenicButton.classList.remove("toggle-biogenic-button-outline");
        // toggleBiogenicButton.style.backgroundColor=emissionColors_D['biogenic'];
        // toggleBiogenicButton.style.color="white";

    }
    biogenicLayersVisible = !biogenicLayersVisible; // Toggle the state

    if (!biogenicLayersVisible || !industrialLayersVisible) {
        allLayersVisible = false;
    } else if (biogenicLayersVisible && industrialLayersVisible) {
        allLayersVisible = true;
        if (lang==="es") {
            document.getElementById('toggle-all-button').text = 'Deseleccionar todo';
        } else if (lang==="en") {
            document.getElementById('toggle-all-button').text = 'Deselect all';
        }
        document.getElementById("toggle-all-button").classList.remove('btn-outline-secondary');
        document.getElementById("toggle-all-button").classList.add('btn-secondary');
        // console.log('alle an');
    }
}


////////////////////////////////////////////////////
//
//  CREATE THE MAP and its properties
//
////////////////////////////////////////////////////

let map, format1Dec, formatSI,
    CO2globalButton = document.getElementById("CO2-global-button"),
    scale = document.getElementById("scale")
    CO2_argentinaButton = document.getElementById("CO2-argentina-button");

// https://docs.maptiler.com/sdk-js/examples/language-map/
// DDTs personal key (!!!)
const key = 'tqfuJhSDIhJBFNXpuIIr';

function showMap(reload, language, zoomlevel, center, style) {
    /* allows us to create filters within a Leaflet GeoJSON layer */
    L.GeoJSON.include({
        setFilter: function (originalData, _) {
            this.options.filter = _
            this.clearLayers()
            this.addData(originalData)
            return this
        }
    })
    
    let zoom = 5;

    // Argentina center 
    // -38.45155,-63.5988853
    let position = [-38.45155, -63.5988853];

    if (zoomlevel && center) {
        zoom = zoomlevel;
        position = center;
    }

    // Auf Wunsch vom PtX Hub soll ausschließlich die spanischen Beschriftung angezeigt werden
    // if(language) {
    //     if (language==="es") {
    //         maptilersdk.config.primaryLanguage = maptilersdk.Language.SPANISH;
    //     } else if (language==="en") {
    //         maptilersdk.config.primaryLanguage = maptilersdk.Language.ENGLISH;
    //     }
    // } else {
    //     if (lang==="es") {
    //         maptilersdk.config.primaryLanguage = maptilersdk.Language.SPANISH;
    //     } else if (lang==="en") {
    //         maptilersdk.config.primaryLanguage = maptilersdk.Language.ENGLISH;
    //     }
    // }
    
    // Dadurch ist ein Reload nicht mehr notwendig
    // if (reload=="reload") {
    //     if(map != 'undefined' || map != null) {
    //         map.off();
    //         map.remove(); 
    //     } 
    // }

    // SET DEFAULT LANGUAGE OF THE NAMES OF LOCATIONS ON THE MAP TO SPANISH
    maptilersdk.config.primaryLanguage = maptilersdk.Language.SPANISH;

    // in potana-dev gab es folgenden Teil
    // map.layout = { }
    bounds = new L.LatLngBounds(new L.LatLng(13.721181, -33.134403), new L.LatLng(-58.777227, -96.623767));
    // bounds = [14.555447, -29.003678],   // northeastern bounds
        // [-58.777227, -96.623767]        // southwestern bounds

    /* Set up the map with initial center and zoom level */
    map = L.map('map', {
        center: position, // show Argentina
        zoom: zoom, // roughly show Europe from 1 to 18 -- decrease to zoom out, increase to zoom in)
        scrollWheelZoom: false,
        zoomControl: false, // to put the zoom butons on the right
        minZoom: 5,     // damit man nicht zu weit rauszoomen kann
        maxBounds: bounds,  // [    // damit man nicht nach links,rechts,oben, unten schieben kann; DISABLE PANNING
            // [-19.658649421657355, -80.40861805520363],
            //     [11.8492524,-102.4750762],
            //     [-56.5930829396799, -48.81193766169215]
        // ],
        maxBoundsViscosity: 1    // damit gar kein panning außerhalb der bounds möglich ist. 
                                // 0: bouncing back; 1: no panning at all possible
    })

    L.control.zoom({
        position: 'topright'
    }).addTo(map);

    // The decision is to only take the bright (V1) as the default layer
    map.bright= L.maptilerLayer({
        attribution: '<a href="https://ptx-hub.org/argentina/" target="_blank"> International PtX Hub, Argentina</a>',
        apiKey: key,
        style:'bright', // we take this one
    }).addTo(map);

    // If other tiles should be used:
    // map.OSM = L.maptilerLayer({
        // attribution: '<a href="https://ptx-hub.org/argentina/" target="_blank"> International PtX Hub, Argentina</a>',
    //     apiKey: key,
    //     style: 'openstreetmap', // optional
    // });

    // map.winter_v2 = L.maptilerLayer({
        // attribution: '<a href="https://ptx-hub.org/argentina/" target="_blank"> International PtX Hub, Argentina</a>',
    //     apiKey: key,
    //     style: 'winter-v2', // optional
    // });
    
    // map.bright_v2 = L.maptilerLayer({
        // attribution: '<a href="https://ptx-hub.org/argentina/" target="_blank"> International PtX Hub, Argentina</a>',
        // apiKey: key,        attribution: '<a href="https://ptx-hub.org/argentina/" target="_blank"> International PtX Hub, Argentina</a>',

    //     style:'bright-v2',
    // })

    //
    // if(style) {
    //     // console.log(style)
    //     eval(style+'.addTo(map)');
    // } else {
    //     map.OSM.addTo(map);
    // }

    // Define an object to store the active layers
    // activeLayers = {
    //     'map.bright': map.bright,
    //     'map.bright_v2': map.bright_v2,
    //     'map.winter_v2': map.winter_v2,
    //     'map.OSM': map.OSM
    // };


    /* Carto light-gray basemap tiles with labels */
    // map.light = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap<\/a>, &copy; <a href="https://carto.com/attribution">CARTO<\/a>, <a href="http://prtr.ec.europa.eu">E-PRTR</a>'
    // })

    // map.stadia_outdoors = L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.{ext}', {
    //     attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    //     ext: 'png'
    // }).addTo(map);
    // map.stadia_outdoors = L.tileLayer('https://maptiles.p.rapidapi.com/es/map/v1{z}/{x}/{y}.png?rapidapi-key=2ec246750fmsh6005cb840b05476p1622dejsnf34ebf232f08', {
    //     attribution: '&copy: <a href="https://www.maptilesapi.com/">MapTiles API</a>, Datos de Mapa &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);
    // map.spanish = L.tileLayer('https://maptiles.p.rapidapi.com/es/map/v1/{z}/{x}/{y}.png?rapidapi-key=2ec246750fmsh6005cb840b05476p1622dejsnf34ebf232f08', {
    //     attribution: 'Tiles &copy: <a href="https://www.maptilesapi.com/">MapTiles API</a>, Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    // });
    //OLD
    // map.light= L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
    //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>, <a href="http://prtr.ec.europa.eu">E-PRTR</a>'
    // }).addTo(map);
    // var Stadia_Outdoors = L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.{ext}', {
    //     minZoom: 0,
    //     maxZoom: 20,
    //     attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    //     ext: 'png'
    // });
    // .addTo(Map)
    /* Current default map. Switch by puting the .addTo above */
    /* Thunderforest green tiles with more information */

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
    // map.on("zoomend", function (e) {
    //     for (type in chemicalParkMarkers) {
    //         if (e.target._zoom > 7 && !chemicalParkMarkers.isBack) {
    //             chemicalParkMarkers[type].bringToBack()
    //             chemicalParkMarkers[type].isBack = true
    //         } else {
    //             chemicalParkMarkers[type].bringToFront()
    //             chemicalParkMarkers[type].isBack = false
    //         }
    //     }
    // })

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

// not needed anymore, because only one layer is requested
// Function to check which layers are currently active
// function getActiveLayers() {
//     var activeLayerNames = [];

//     // Iterate over the layers in the activeLayers object
//     for (var layerName in activeLayers) {
//         if (map.hasLayer(activeLayers[layerName])) {
//             activeLayerNames.push(layerName);
//         }
//     }
//     return activeLayerNames;
// }

/*********************************************************/
/* Definitions of colors, NACE categories etc. */

//////////////////////////////////////////////////////////////////////////////
// BASIC FUNCTIONS



function loadGlobalDefs() {
    var es = d3.formatDefaultLocale({
        "decimal": ",",
        "thousands": ".",
        "grouping": [3],
        "currency": ["€", ""] //if you want a space between €-sign and number, add it here in the first string 
      });

    var en = d3.formatDefaultLocale({
        "decimal": ".",
        "thousands": ",",
        "grouping": [3],
        "currency": ["€", ""] //if you want a space between €-sign and number, add it here in the first string 
    });
    // show all numbers with 1,000.00 format
    format1Dec = d3.format(',.1f')
    // formatSI = d3.format(',.2f') // DDT changed from ',.3f' to '.,2f' to easily distinguish between dot and comma :)
    formatSI = en.format(',.0f'); // DDT changed from ',.3f' to '.,2f' to easily distinguish between dot and comma :)
    formatSI_es = es.format(',.0f'); // spanish works with 100.000,00
    format_nodecimal=d3.format('.1r'); // round to 1st number
}

/* create scale for the index.html */
let createScale = (sliderValue) => {
	var height = 100*sliderValue;
	var width = 150*sliderValue;
    var svg = d3.select("#scale")
        .append("svg")
		.attr("width", width)
		.attr("height", height);
	// The scale you use for bubble size
    // if maxRadius is not set (because slider was not used yet)
    // use maxEmissions of Argentina

    //reset the legend
    scale.removeChild(scale.children[1]);

    var size = d3.scaleSqrt()
		// .domain([0, maxEmissionsArgentina_Mt]) // What's in the data, min-max
        // .domain([0, maxRadius_Mt]) // What's in the data, min-max
        .domain([0, maxRadius_kt]) // What's in the data, min-max
        // .range([0, 45]) // Size in pixel
        .range([0, 50*sliderValue]) // Size in pixel
	;
	// Add legend: circles
	// var valuesToShow = [maxRadius_Mt/100, maxRadius_Mt/2.5, maxRadius_Mt]; // [globalEmissionData.stats.totalMax / 100, globalEmissionData.stats.totalMax / 10, globalEmissionData.stats.totalMax]
    legend_valueone = format_nodecimal(maxRadius_kt/100);
    legend_valuetwo = format_nodecimal(maxRadius_kt/2.5);
    legend_valuethree = format_nodecimal(maxRadius_kt);
    var valuesToShow = [legend_valueone, legend_valuetwo, legend_valuethree]; // [globalEmissionData.stats.totalMax / 100, globalEmissionData.stats.totalMax / 10, globalEmissionData.stats.totalMax]
    
    var xCircle = 55*sliderValue;
	var xLabel = 120*sliderValue;
	var yCircle = 100*sliderValue;
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
			// return format1Dec(d);
            return format_nodecimal(d);
		}) // to display in Mt
		.style("font-size", 10)
		.attr('alignment-baseline', 'middle');
};

    // let emissionColors = {
    //         "CO2, industrial": 'rgb(241, 177, 48)',
    //         "CO2, biogenic": 'rgb(234,110,57)'
    //     }
    // ,
    // chemicalColors = {
    //     "chemical parks": "rgb(0,168,189)",
    //     "polyol plants": "rgb(12,168,118)",
    //     "steel mills": "yellow"
    // }

// function toggleLayer(button, layer) {
//     return function() {
//         button.classList.toggle("is-info");
//         if (map.hasLayer(layer)) {
//             map.removeLayer(layer);
//         } else {
//             map.addLayer(layer);
//         }
//     };
// }

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
// var CO2_global = new L.GeoJSON.AJAX(['emissions_global-points.geojson'], {
// 	pointToLayer: function(feature, latlng) {
// 		return L.circleMarker(latlng, {
// 			radius: feature.properties.MTonnes, // statt 37.6 sollte dort die totalMax der Emissionen stehen - hier wurde nun der Wert der E-PRTR Json genommen.
//             color: "black",
// 			/*fillColor: feature.properties.color,*/
// 			fillColor: "black",
// 			weight: 1,
// 			opacity: 0.7,
// 			fillOpacity: 0.4
// 		}).bindPopup(addCO2globalPopupHandler(feature));
// 	}
// }); //.addTo(map);

// function addCO2globalPopupHandler(feature) {
// 	// let nace = globalModel.emissions.categories.naceCategories.items
// 	if (feature.properties) {
// 		let thisEmission =
// 			formatSI(feature.properties.MTonnes) + " Megatonnes CO<sub>2</sub>/year";
// 		//if (feature.properties.co2Amount) otherEmission += formatSI(feature.properties.co2Amount) + ' Megatonnes CO<sub>2</sub>/year'
// 		//if (feature.properties.coAmount) otherEmission += formatSI(feature.properties.coAmount) + ' Megatonnes CO/year'
// 		//let thisEmission = formatSI(feature.properties.MTonnes) + ' Megatonnes '
// 		//let color = translucidColor(nace[feature.properties.NACEMainEconomicActivityName].color)
// 		return `<h2>${feature.properties.name} (${feature.properties.country})</h2>
//                         Emissions:
//                         <br>${thisEmission}</div>`;
// 		// <br><br><a href="${feature.properties.FacilityDetails}" target="_blank">More Facility details on E-PRTR page</a>`
// 	} else {
// 		console.log(feature);
// 	}
// }


/// Argentina CO2
// as points
// var CO2_argentina = new L.GeoJSON.AJAX(['convertcsv.geojson'], {
// 	pointToLayer: function(feature, latlng) {
// 		return L.circleMarker(latlng, {
// 			radius: feature.properties.Tonnes / 100000, // statt 37.6 sollte dort die totalMax der Emissionen stehen - hier wurde nun der Wert der E-PRTR Json genommen.
// 			color: "black",
// 			/*fillColor: feature.properties.color,*/
// 			fillColor: "black",
// 			weight: 1,
// 			opacity: 0.7,
// 			fillOpacity: 0.4
// 		}).bindPopup(addCO2argentinaPopupHandler(feature));
// 	}
// }); //.addTo(map);

//
// Define Popups when clicking on the circles
//
function addCO2argentinaPopupHandler(feature) {
	// let nace = globalModel.emissions.categories.naceCategories.items
	if (feature.properties) {
        let thisEmission = 0;
        if(lang=="es") {
            thisEmission = formatSI_es(feature.properties.CO2_emissions_t/1000) + " kt CO<sub>2</sub>/year";
        } else if (lang=="en") {
            thisEmission = formatSI(feature.properties.CO2_emissions_t/1000) + " kt CO<sub>2</sub>/year";
        }
        let thisSource = (feature.properties.Source) ? feature.properties.Source : "-";
        
		let thisNameCompany = feature.properties.Name 
        if (feature.properties.Company) {
            thisNameCompany += " ("+feature.properties.Company+")";
        }
        return `<div class="popup-content">
            <div class="card border-0">
                <h5 class="card-header border-0" style="color: white; background-color: ${emissionTypeColors_D[feature.properties.Industry]}">
                    ${thisNameCompany}
                </h5>
                <div class="card-body ptxhub-background ptxhub-text">
                    <b>Type of Industry</b>
                    <br>${feature.properties.Industry}
                    <br><b>Type of Emission</b> 
                        <br>${feature.properties.Source_CO2_emissions}
                <hr class="hr">
                        <b>Emissions (Reference year)</b>
                    <br>${thisEmission} (${feature.properties.year_emission ? feature.properties.year_emission : "N/A"})
                    <br><b>Data Source:</b> 
                        <br>${thisSource}
                <hr class="hr">
                    <p><b>City / Province </b>
                        <br>${feature.properties.City?feature.properties.City:"N/A"} / ${feature.properties.Province}
                </div>
            </div>
        </div>`;
        // Version with tables
        // return `<div class="popup-content">
        //     <div class="card border-0">
        //         <h5 class="card-header border-0" style="color: white; background-color: ${emissionTypeColors_D[feature.properties.Industry]}">
        //             ${thisNameCompany}
        //         </h5>
        //         <div class="card-body ptxhub-background ptxhub-text">
        //             <table class="table table-hover table-custom">
        //                 <tr><th>Type of Industry</th><td>${feature.properties.Industry}</td></tr>
        //                 <tr><th>Type of Emission</td><td>${feature.properties.Source_CO2_emissions}</td></tr>
        //             <tbody class="ptx-table-group-divider">
        //                 <tr><th>Emissions</td><td>${thisEmission}</td></tr>
        //                 <tr><th>Reference year</td><td>${feature.properties.year_emission ? feature.properties.year_emission : "N/A"}</td></tr>
        //                 <tr><th>Data Source</td><td>${thisSource}</td></tr>
        //             </tbody>
        //             <tbody class="ptx-table-group-divider">
        //                 <tr><th>City</td><td>${feature.properties.City?feature.properties.City:"N/A"}</td></tr>
        //                 <tr><th>Province</td><td>${feature.properties.Province}</td></tr>
        //             </tbody>
        //             </table>

        //     </div>
        // </div>`;
	} else {
		console.log(feature);
	}
}

// Function to toggle layer visibility
function toggleLayer(layer, layerName, button_id, industryType) {
    button=button_id;
    // console.log(button_id)
    if (map.hasLayer(layer)) {
        map.removeLayer(layer);
        // console.log(layer)
        button.style.backgroundColor="";
        // let button_name = button_id.id+"-outline";
        button.classList.add(button_id.id+"-outline");

        if (industryType=="industrial") {
            industrialLayersVisible = false;
            // toggleIndustrialButton.style.backgroundColor="white";
            // toggleIndustrialButton.style.color="black";
            toggleIndustrialButton.classList.add('toggle-industrial-button');
        } else if (industryType=="biogenic") {
            biogenicLayersVisible = false;
            toggleBiogenicButton.style.backgroundColor="white";
            toggleBiogenicButton.style.color="black";            
        }
        allLayersVisible = false;
        if (lang==="es") {
            document.getElementById('toggle-all-button').text = 'Seleccionar todo';
        } else if (lang==="en") {
            document.getElementById('toggle-all-button').text = 'Select all';
        }
        
    } else {
        layer.addTo(map);
        button.classList.remove(button_id.id+"-outline")
        button.style.backgroundColor = emissionTypeColors_D[layerName];
        
        // check if all layers are visible.
        // if so, then turn on the toggle state of the overarching button for industrial and biogenic sources
        
        // pretend that all layers are visible
        biogenicLayersVisible = true;
        // if at least one of layers in the biogenicLayers is not active, turn of the toggle state.
        biogenicLayers.forEach(data => {
            if(!(map.hasLayer(layers[data]))) {
                biogenicLayersVisible = false;
            }        
        });
        // repeat for industrial layers
        industrialLayersVisible = true;
        industrialLayers.forEach(data => {
            if(!(map.hasLayer(layers[data]))) {
                industrialLayersVisible = false;
            }        
        });
        if(biogenicLayersVisible==true) {
            toggleBiogenicButton.style.backgroundColor=emissionColors_D['biogenic'];
        }
        if(industrialLayersVisible==true) {
            toggleIndustrialButton.style.backgroundColor=emissionColors_D['industrial'];
        }

        // repeat for the ALL Layers button
        allLayersVisible = true;
        if (!biogenicLayersVisible || !industrialLayersVisible) {
            allLayersVisible = false;
        } else if (biogenicLayersVisible && industrialLayersVisible) {
            allLayersVisible = true;
            if (lang==="es") {
                document.getElementById('toggle-all-button').text = 'Deseleccionar todo';
            } else if (lang==="en") {
                document.getElementById('toggle-all-button').text = 'Deselect all';
            }
        }
    }
    }

// Add event listeners to toggle buttons
var toggleButtons = document.querySelectorAll('.toggle-layer-button');

toggleButtons.forEach(button => {
    button.addEventListener('click', function () {

        var layerName = button.getAttribute('data-layer');
        var industryType = button.getAttribute('industry-type');
        // console.log(industryType);
        // addGeoJSONLayer(industryType, layerName);
        var layer = layers[layerName];
        if (layer) {
            toggleLayer(layer, layerName, button, industryType);
        } 
        table_selected.style.background = '#ddc'
        getEmissionsSelected()
        setTimeout(function () {
            table_selected.style.background = 'none'
        }, 500)
    });
});
    

/*********************************************************/
/* Keep a copy of the loaded jsons, in case we need them */
let globalEmissionData, globalChemicalData

/***********************/
/* Handle interactions */
/***********************/

/*****************/
/* Emissions tab */
// let compatFilterManualButton = document.getElementById('compat-filter-manual-button'),
//     compatFilterLoopButton = document.getElementById('compat-filter-loop-button'),
//     compatFilterCatButton = document.getElementById('compat-filter-cat-button'),
//     compatFilterButtons = [compatFilterManualButton, compatFilterLoopButton, compatFilterCatButton]

let pollutantFilterCO2biogasButton = document.getElementById('pollutant-filter-CO2-button'),
    pollutantFilterCO2industrialButton = document.getElementById('pollutant-filter-CO-button')


let co2FilteredSumOutput = document.getElementById('sumCO2'),
    coFilteredSumOutput = document.getElementById('sumCO'),
    co2CombinedFilteredSumOutput = document.getElementById('sumCO2combined'),
    coCombinedFilteredSumOutput = document.getElementById('sumCOcombined')

// let naceDeselectButton = document.getElementById('nace-deselect-all')

/* styling */
// pollutantFilterCO2biogasButton.style.background = emissionColors_D.biogas
// pollutantFilterCO2industrialButton.style.background = emissionColors_D.industrial
// pollutantFilterCO2biogasButton.style.color = "white"
// pollutantFilterCO2industrialButton.style.color = "white"
/**
 *
 *
 * @param {*} button
 * @param {boolean} [forceState=false] if forceState = "active" force active, if forceState != "active" and != false, force inactive
 */
// function toggleNaceButton(button, forceState = false){
//     let nace = globalModel.emissions.categories.naceCategories
//     if (!forceState){
//         nace.items[button.text].active = !nace.items[button.text].active
//     }
//     else {
//         nace.items[button.text].active = (forceState == "active")
//     }
//     if (nace.items[button.text].active) {
//         button.classList.add('is-activated', nace.items[button.text].style)
//     }
//     else {
//         button.classList.remove('is-activated', nace.items[button.text].style)
//     }
// }


/**
 * when clicking on a compat button, switch mode
 *
 * @param {event} event the click event on a compat button
 */
// function toggleCompatFilter(event) {
//     let nace = globalModel.emissions.categories.naceCategories.items
//     activateCompatButton(event.target)
//     if (event.target == compatFilterCatButton) {
//         for (name in nace) {
//             nace[name].active = nace[name].catalytic
//             toggleNaceButton(nace[name].button, nace[name].active ? "active" : "not")
//         }
//     } else if (event.target == compatFilterLoopButton) {
//         for (name in nace) {
//             nace[name].active = nace[name].looping
//             toggleNaceButton(nace[name].button, nace[name].active ? "active" : "not")
//         }
//     }
//     updateEmissionsFilter()
// }
// for (var i = 0; i < compatFilterButtons.length; i++) {
//     compatFilterButtons[i].addEventListener('click', toggleCompatFilter)
// }

// function activateCompatButton(button) {
//     for (var i = 0; i < compatFilterButtons.length; i++) {
//         compatFilterButtons[i].classList.remove('is-info')
//     }
//     button.classList.add('is-info')
// }

// function returnTogglePollutantFilter(button) {
//     return function () {
//         button.classList.toggle('is-activated')
//         if (button.classList.contains('is-activated')) button.style.background = emissionColors[button.id.includes("CO2") ? "CO2, industrial" : "CO2, biogenic"]
//         else button.style.background = '#fff'
//         getFilteredTotals()
//         toggleFilterEmittersByPollutant(button.id.includes("CO2") ? "CO2, industrial" : "CO2, biogenic")
//     }
// }

// function toggleFilterEmittersByPollutant(pollutant) {
//     if (map.hasLayer(markers[pollutant])) {
//         map.removeLayer(markers[pollutant])
//     } else {
//         map.addLayer(markers[pollutant]), AIR
//     }
// }
// pollutantFilterCO2biogasButton.addEventListener('click', returnTogglePollutantFilter(pollutantFilterCO2biogasButton))
// pollutantFilterCO2industrialButton.addEventListener('click', returnTogglePollutantFilter(pollutantFilterCO2industrialButton))

function getEmissionsSelected() {
    formattedEmissions_selected = 0;

    // buttonData.forEach(function(name) {
    //     if (map.hasLayer(layers[name.name])) {
    //         if(totalEmissions[name.name]){
    //             formattedEmissions_selected += totalEmissions[name.name];
    //         }
    //     } else {
    //     }
    // })

    allLayers.forEach(function(name) {
        if (map.hasLayer(layers[name.name])) {
            if(totalEmissions[name.name]){
                formattedEmissions_selected += totalEmissions[name.name];
            }
        } else {
        }
    })

    // formattedEmissions_selected = formattedEmissions_selected.toLocaleString('en-US', {
    // minimumFractionDigits: 0,
    // maximumFractionDigits: 0
    // });

    // formattedEmissions_selected = new Intl.NumberFormat('en-US', { style: 'decimal', maximumFractionDigits: 0, }).format(
    //     formattedEmissions_selected,
    //   ),
    if(lang=="es") {
        table_selected.innerHTML=formatSI_es(formattedEmissions_selected/1000);
    } else if (lang=="en") {
        table_selected.innerHTML=formatSI(formattedEmissions_selected/1000);
    }

};

// function getFilteredTotals() {
//     let co2sum = 0,
//         cosum = 0,
//         co2sumCombined = 0,
//         cosumCombined = 0,
//         nace = globalModel.emissions.categories.naceCategories.items
//     for (name in nace) {
//         if (nace[name].active) {
//             if (pollutantFilterCO2industrialButton.classList.contains('is-activated')) cosum += globalEmissionData.stats.totals['CO2, biogenic'][name]
//             if (pollutantFilterCO2biogasButton.classList.contains('is-activated')) co2sum += globalEmissionData.stats.totals['CO2, industrial'][name]
//         }
//     }
//     for (f in globalEmissionData['CO2, biogenic'].features) {
//         let props = globalEmissionData['CO2, biogenic'].features[f].properties
//         if (pollutantFilterCO2industrialButton.classList.contains('is-activated') &&
//             pollutantFilterCO2biogasButton.classList.contains('is-activated') &&
//             nace[props.NACEMainEconomicActivityName].active &&
//             props.co2Amount &&
//             props.co2Amount > 0) {
//             co2sumCombined += props.co2Amount
//             cosumCombined += props.MTonnes
//         }
//     }
//     co2CombinedFilteredSumOutput.style.background = '#ddc'
//     coCombinedFilteredSumOutput.style.background = '#ddc'
//     co2FilteredSumOutput.style.background = '#ddc'
//     coFilteredSumOutput.style.background = '#ddc'
//     setTimeout(function () {
//         co2FilteredSumOutput.style.background = '#fff'
//         coFilteredSumOutput.style.background = '#fff'
//         co2CombinedFilteredSumOutput.style.background = '#fff'
//         coCombinedFilteredSumOutput.style.background = '#fff'
//     }, 500)
//     co2FilteredSumOutput.textContent = format1Dec(co2sum) + ' Megatonnes/year'
//     coFilteredSumOutput.textContent = format1Dec(cosum) + ' Megatonnes/year'
//     co2CombinedFilteredSumOutput.textContent = format1Dec(co2sumCombined) + ' Megatonnes/year'
//     coCombinedFilteredSumOutput.textContent = format1Dec(cosumCombined) + ' Megatonnes/year'
// }

// function toggleAllNaceFilter() {
//     let nace = globalModel.emissions.categories.naceCategories
//     if (naceDeselectButton.text == "Deselect all") {
//         activateCompatButton(compatFilterManualButton)
//         naceDeselectButton.text = "Select all"
//         for (name in nace.items) {
//             nace.items[name].active = false
//             nace.items[name].button.classList.remove('is-activated')
//         }
//     } else {
//         activateCompatButton(compatFilterLoopButton)
//         naceDeselectButton.text = "Deselect all"
//         for (name in nace.items) {
//             nace.items[name].active = true
//             nace.items[name].button.classList.add('is-activated')
//         }
//     }
//     updateEmissionsFilter()

// }
// naceDeselectButton.addEventListener('click', toggleAllNaceFilter)

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
let mapLayoutOSM = document.getElementById('map-layout-OSM'),
    // mapLayoutwinter_v2 = document.getElementById('map-layout-winterv2'),
    mapLayoutBright = document.getElementById('map-layout-bright'),
    // mapLayoutBrightv2 = document.getElementById('map-layout-bright-v2'),
    // mapShowConsumers = document.getElementById('map-show-consumers'),
    // modifyConsumers = document.getElementById('modify-consumers'),
    // modalModifyConsumers = document.getElementById('modal-modify-consumers'),
    // csvChemicalParks = document.getElementById('csv-chemical-parks'),
    // csvPolyolPlants = document.getElementById('csv-polyol-plants'),
    // renewEmissions = document.getElementById('renew-emissions'),
    csvArgentinaCO2Emissions = document.getElementById('csv-ArgentinaCO2Emissions'),
    // modifyConsumersCreateLink = document.getElementById('modify-consumers-create-link'),
    // modifyConsumersCreateJSON = document.getElementById('modify-consumers-create-json'),
    // modifyConsumersLoadData = document.getElementById('modify-consumers-load-data'),
    closeModalList = document.getElementsByClassName('close-modal')
    // resetConsumers = document.getElementById('reset-consumers')

// function toggleMapLayout(color) {
//     mapLayoutGreen.classList.toggle('is-info')
//     mapLayoutSpanish.classList.toggle('is-info')
//     mapLayoutLight.classList.toggle('is-info')
//     if (color=="green") {
//         if(map.hasLayer(map.spanish)) {
//             map.removeLayer(map.spanish)
//         } else if (map.hasLayer(map.light)) {
//             map.removeLayer(map.light)
//         }
//         map.addLayer(map.green)
//         // map.removeLayer(map.spanish)
//         // map.removeLayer(map.light)
//         // map.addLayer(map.green)
//     } else if (color="spanish") {
//         // map.removeLayer(map.green)
//         // map.removeLayer(map.light)
//         // map.addLayer(map.spanish)
//     } else if (color=="light") {
//         // map.removeLayer(map.green)
//         // map.removeLayer(map.spanish)
//         // map.addLayer(map.light)
//     }
// }
// mapLayoutGreen.addEventListener('click', toggleMapLayout('green'))
// mapLayoutSpanish.addEventListener('click', toggleMapLayout('spanish'))
// mapLayoutLight.addEventListener('click', toggleMapLayout('light'))

// we dont need this anymore, because only one layer is used
// mapLayoutOSM.addEventListener('click', function () {
//     map.addLayer(map.OSM);
//     map.removeLayer(map.bright);
//     map.removeLayer(map.bright_v2);
//     map.removeLayer(map.winter_v2);
//     mapLayoutOSM.classList.add('is-info');
//     mapLayoutwinter_v2.classList.remove('is-info');
//     mapLayoutBright.classList.remove('is-info');
//     mapLayoutBrightv2.classList.remove('is-info');
// });

// mapLayoutwinter_v2.addEventListener('click', function () {
//     map.removeLayer(map.OSM);
//     map.addLayer(map.winter_v2);
//     map.removeLayer(map.bright);
//     map.removeLayer(map.bright_v2);
//     mapLayoutOSM.classList.remove('is-info');
//     mapLayoutwinter_v2.classList.add('is-info');
//     mapLayoutBright.classList.remove('is-info');
//     mapLayoutBrightv2.classList.remove('is-info');
// });

// mapLayoutBright.addEventListener('click', function () {
//     map.removeLayer(map.OSM);
//     map.removeLayer(map.winter_v2);
//     map.addLayer(map.bright);
//     map.removeLayer(map.bright_v2);
//     mapLayoutOSM.classList.remove('is-info');
//     mapLayoutwinter_v2.classList.remove('is-info');
//     mapLayoutBright.classList.add('is-info');
//     mapLayoutBrightv2.classList.remove('is-info');
// });

// mapLayoutBrightv2.addEventListener('click', function () {
//     map.removeLayer(map.OSM);
//     map.removeLayer(map.winter_v2);
//     map.removeLayer(map.bright);
//     map.addLayer(map.bright_v2);
//     mapLayoutOSM.classList.remove('is-info');
//     mapLayoutwinter_v2.classList.remove('is-info');
//     mapLayoutBright.classList.remove('is-info');
//     mapLayoutBrightv2.classList.add('is-info');
// });


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

// function convertCsvsToJSON() {
//     return new Promise((resolve) => {
//         // only load csv2geojson if needed
//         var script = document.createElement('script')
//         script.onload = function () {
//             let csvs = {
//                 // "chemical parks": csvChemicalParks.value,
//                 // "polyol plants": csvPolyolPlants.value
//                 "argentina CO2 emittents": csvArgentinaCO2Emissions.value
//                 // "polyol plants": csvPolyolPlants.value            
//             }
//             let json = {}
//             for (type in csvs) {
//                 csv2geojson.csv2geojson(csvs[type], {
//                     latfield: 'latitude',
//                     lonfield: 'longitude',
//                     delimiter: ';',
//                 }, (err, geojson) => {
//                     if (err) {
//                         console.error(err)
//                     } else {
//                         //console.log(csvs, geojson)
//                         json[type] = geojson
//                     }
//                 })
//             }
//             //console.log(globalChemicalData)
//             resolve(json)
//         }
//         script.src = 'vendor/csv2geojson.js'
//         document.head.appendChild(script)
//     })
// }

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
// CO2globalButton.addEventListener("click", toggleLayerScale(CO2globalButton, CO2_global, scale));
// CO2_argentinaButton.addEventListener("click", toggleLayerScale(CO2_argentinaButton, CO2_argentina, scale));




















/***********************/
/* Load data functions */
/***********************/

// keep reference to the markers for filtering
// var markers = {}
// var chemicalParkMarkers = {}
// var globalPipelines = {}

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
//  *Add a popup to a GeoJSON feature of a certain type
//  *
//  * @param {*} feature A GeoJSON feature with geometry and properties
//  * @param {string} type The name of the category, in this case "CO2" or "CO" 
//  * @returns {string} a DOM string containing the popup
//  */
// function addEmitterPopupHandler(feature) {
//     let nace = globalModel.emissions.categories.naceCategories.items
//     if (feature.properties) {
//         let otherEmission = ''
//         if (feature.properties.co2Amount) otherEmission += formatSI(feature.properties.co2Amount) + ' Megatonnes CO<sub>2</sub>/year'
//         if (feature.properties.coAmount) otherEmission += formatSI(feature.properties.coAmount) + ' Megatonnes CO/year'
//         let thisEmission = formatSI(feature.properties.MTonnes) + ' Megatonnes '
//         if (feature.properties.type == 'CO2, biogenic') thisEmission += 'CO/year'
//         else thisEmission += 'CO<sub>2</sub>/year'
//         let color = translucidColor(nace[feature.properties.NACEMainEconomicActivityName].color)
//         return `<h2>${feature.properties.FacilityName}</h2>
//                         ${feature.properties.CountryName}                    
//                         <br><b><i>${feature.properties.NACEMainEconomicActivityName}</i></b>
//                         <br>
//                         <div class='popup-em' style='background: ${color}'>
//                         Emissions:
//                         <br>${thisEmission}` + (otherEmission != '' ? `<br />${otherEmission}` : '') + `</div>
//                         <br><br><a href="${feature.properties.FacilityDetails}" target="_blank">More Facility details on E-PRTR page</a>`

//     } else {
//         console.log(feature)
//     }
// }

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


// function loadScript(url, callback) {
//     // Adding the script tag to the head as suggested before
//     var head = document.head
//     var script = document.createElement('script')
//     script.type = 'text/javascript'
//     script.src = url
//     // Then bind the event to the callback function.
//     // There are several events for cross browser compatibility.
//     script.onreadystatechange = callback
//     script.onload = callback
//     // Fire the loading
//     head.appendChild(script)
// }

/**
 * Convert a geojson to a layer with circles and popups
 *
 * @param {*} data an object from json containing an array of geoJSON
 * @param {string} type the name of the geoJSON inside the data
 * @returns {layer} a geoJSON layer
 */
// function convertGeoJSONToChemLayer(data, type) {
//     return L.geoJson(data[type], {
//         pointToLayer: function (feature, latlng) {
//             feature.properties['type'] = type
//             return L.circle(latlng, distanceChemicalPlantOutput.value * 1000, { // radius expected in m, slider in km
//                 fillColor: chemicalColors[feature.properties.type],
//                 weight: 0,
//                 fillOpacity: 0.4
//             }).bindPopup(addConsumerPopupHandler(feature, type))
//         }
//     })
// }

/**
 *Add a popup to a GeoJSON feature of a certain type
 *
 * @param {*} feature A GeoJSON feature with geometry and properties
 * @param {string} type The name of the category, in this case "chemical parks" or "polyol plant" 
 * @returns
 */
// function addConsumerPopupHandler(feature) {
//     if (feature.properties) {
//         return `<h2>${feature.properties.FacilityName}</h2>
//                 ${feature.properties.CountryName}
//                 <br><b><i class="${feature.properties.type.replace(" ", "-") + "-popup"}">${feature.properties.type}</i></b>
//                 <br>` + consumerPopupAvailability(feature)
//     } else {
//         console.log(feature)
//     }
// }

/**
 * Create a box with available emissions around a consumer
 *
 * @param {*} feature the consumer
 * @returns a DOM string containing a div with the availability
 */
// function consumerPopupAvailability(feature) {
//     let p = feature.properties
//     p.availability = {
//         ['CO2, industrial']: 0,
//         ['CO2, biogenic']: 0
//     }
//     if (p.distances != undefined) {
//         for (n in p.distances) {
//             if (p.distances[n].distance < distanceChemicalPlantOutput.value * 1000) {
//                 p.availability[p.distances[n].type] += p.distances[n].amount
//             }
//         }
//     }
//     return '<div class="popup-em" style="background:' + translucidColor(chemicalColors[feature.properties.type]) + '">Available emissions:<br>(in a radius of ' + distanceChemicalPlantOutput.value + '&nbsp;km)<br>' +
//         formatSI(feature.properties.availability['CO2, industrial']) + '&nbsp;Megatonnes CO<sub>2</sub>/year<br>' +
//         formatSI(feature.properties.availability['CO2, biogenic']) + '&nbsp;Megatonnes CO/year</div>'
// }

/**
 * create a translucid color from a color string for the popups
 *
 * @param {*} colorString
 * @param {number} [opacity=0.6]
 * @returns color
 */
// function translucidColor(colorString, opacity = 0.6) {
//     let c = d3.color(colorString)
//     c.opacity = opacity
//     return c
// }

/**
 * Create circles with different sizes as a legend
 * @needs globalEmissionData as a global variable
 */




/*************************************/
/* Change layout with get parameters */
/*************************************/
// var url = new URL(window.location.href)
// if (!mapLayoutOSM.classList.contains('is-info') && url.searchParams.get("style") == "OSM") toggleMapLayout()

/*************************************************/
/* And finally load all json data and display it */
/*************************************************/
document.addEventListener('DOMContentLoaded', (event) => {
    // der Übersetzer-Knopf ist default-mäßig auf spanisch="on" gestellt
    // falls jemand die Seite aber initial auf englisch aufruft, muss das natürlich einmal umgestellt werden
    // console.log('DOMContent: lang ' + lang)
    if (lang=="en") {
        (function ($) {
            $('#language-toggle').prop('checked', true);
        })(jQuery);
        updateContent('en');
    } else {
        updateContent('es');
    }
    showMap();

    // load formatSI
    loadGlobalDefs();

    // Fetch the GeoJSON data from the URL
    fetch(geojsonURL)
    // console.log("fetched")
    .then(response => response.json())
    // console.log("responded")
    .then(data => {
        // Check if the GeoJSON data contains features
        // Loop through the features to find the maximum value
        // only consider those geojson features, which actually have coordinates.
        // Iterate through GeoJSON data features
        data.features.forEach(function (feature) {
            var Industry = feature.properties.Industry;
            var emissions = parseFloat(feature.properties.CO2_emissions_t);
            // Update the total emissions for the industry type
            if (typeof emissions === 'number' && !isNaN(emissions)) {
                if (!totalEmissions[Industry]) {
                    totalEmissions[Industry] = 0;
                // console.log('hi')
            }
            
            // count number of entries:
            if (!counts[Industry]) {
                counts[Industry] = 1;
            } else {
                counts[Industry]++;
            }
            
            totalEmissions[Industry] += emissions;
            // if(Industry=="Steel") {
                // console.log('Industry',Industry)
                // }
                // console.log('total Emissions Steel',totalEmissions['Steel'])
            } 
        });
        let sum = 0;
        
        for (k in counts) {
            sum += counts[k];
        }
        // console.log(sum);
        
        // console.log(totalEmissions)
        // Create an HTML table to display the aggregated data
        
        // TO DO DDT
        // append to the HTML table, to be able to change the text to other languages

        // var table = "<tr id='table_emissions_header'><th>Industry</th><th style='text-align: right;'>Total Emissions (Tonnes)</th></tr>";
        
        // Iterate through the totalEmissions object and populate the table
        // 3.1.2024 - iterate through button order 
        // for (let i = 0; i < buttonData.length; i++) {
        //     const industryValue = buttonData[i]['name'];
        //     var formattedEmissions = totalEmissions[industryValue].toLocaleString('en-US', {
        //         minimumFractionDigits: 2,
        //         maximumFractionDigits: 2
        //         });
        //         let industry_lang = buttonData.find(item => item.name === industryValue)?.name_lang;                      
        //         let industry_short = buttonData.find(item => item.name === industryValue)?.id;                      
        //     // console.log(industry_short)
        //     table += "<tr><td id='industry_type_"+industry_short+"'>" + industry_lang 
        //     + ": </td><td style='text-align: right;'>" + formattedEmissions + "</td></tr>";
        // }

        for (let i = 0; i < allLayers.length; i++) {
            const industryValue = allLayers[i]['name'];

            if(totalEmissions[industryValue]) {

                // var formattedEmissions = totalEmissions[industryValue].toLocaleString('en-US', {
                //     minimumFractionDigits: 0,
                //     maximumFractionDigits: 0
                // });

                // var formattedEmissions = new Intl.NumberFormat('en-US', { style: 'decimal', maximumFractionDigits: 0, }).format(
                //     totalEmissions[industryValue],
                //   )

                if (lang=="es") {
                    var formattedEmissions = formatSI_es(totalEmissions[industryValue]/1000);
                } else if(lang=="en"){
                    var formattedEmissions = formatSI(totalEmissions[industryValue]/1000);
                }

                let industry_lang;
                if(lang=="en") {
                    industry_lang = allLayers.find(item => item.name === industryValue)?.name_en;
                }
                if(lang=="es") {
                    industry_lang = allLayers.find(item => item.name === industryValue)?.name_es;
                }
                let industry_short = allLayers.find(item => item.name === industryValue)?.id;                      

                table += "<tr><td class="+industry_short+" id='industry_type_"+industry_short+"'>" + industry_lang 
                + ": </td><td style='text-align: right;'>" + formattedEmissions + "</td>"
                + "<td style='text-align: right;'>" + counts[industryValue] + "</td></tr>";
            } else {
                console.log(industryValue + ' could not be found in the geojson.')
            }
        }
        
        // for (var industry in totalEmissions) {
        //     var formattedEmissions = totalEmissions[industry].toLocaleString('en-US', {
        //         minimumFractionDigits: 2,
        //         maximumFractionDigits: 2
        //       });
        //       let industry_lang = buttonData.find(item => item.name === industry)?.name_lang;                      
        //       let industry_short = buttonData.find(item => item.name === industry)?.id;                      
        //     //   console.log(industry_short)
        //     table += "<tr><td id='industry_type_"+industry_short+"'>" + industry_lang 
        //     + ": </td><td style='text-align: right;'>" + formattedEmissions + "</td></tr>";
        // }

        for (const [key, IndustryEmissions] of Object.entries(totalEmissions)) {
            // console.log(IndustryEmissions)
            // console.log(totalEmissions_total)
            totalEmissions_total += IndustryEmissions;
            // console.log('totalEmissions_total: ',totalEmissions_total);
        }
        
        // formattedEmissions_total = totalEmissions_total.toLocaleString('en-US', {
        //     minimumFractionDigits: 0,
        //     maximumFractionDigits: 0
        // });
        // formattedEmissions_total = new Intl.NumberFormat('en-US', { style: 'decimal', maximumFractionDigits: 0, }).format(
        //     totalEmissions_total,
        //   ),
        
        if(lang=="es") {
            formattedEmissions_total = formatSI_es(totalEmissions_total/1000)
        } else if (lang=="en") {
            formattedEmissions_total = formatSI(totalEmissions_total/1000)
        }
        formattedEmissions_selected = formattedEmissions_total;

        table += "<tr><th>TOTAL: </th>\
                <th style='text-align: right;border-top: 1px solid;'>"+formattedEmissions_total+"</th>\
                <th style='text-align: right;border-top: 1px solid;'>" + sum + "</th>\
            </tr></table>";       

        // Display the table in a specific HTML element
        table_all.innerHTML = table;
        // table_all.appendChild(table);
        table_selected.innerHTML=formattedEmissions_total;
        
        data.features.forEach(function (feature) {
            var propertyValue = feature.properties[propertyToFindMax];
            // console.log(feature.properties.Name+feature.properties.Tonnes)
                // console.log(propertyValue)
            if (!isNaN(propertyValue) && feature.geometry.coordinates && propertyValue > maxEmissionsArgentina) {
                maxEmissionsArgentina = parseFloat(propertyValue);
            }
            // console.log('current Max Emissions: '+maxEmissionsArgentina)
        });
        // maxRadius_Mt = maxEmissionsArgentina / 1000000;
        maxRadius_kt = format_nodecimal(maxEmissionsArgentina/1000);
        // maxRadius_kt = format_nodecimal(maxRadius_kt);   
        // hier wird sichergestellt, dass die Legende erst an dieser Stelle erzeugt wird. Sonst kann mit der maxValue nicht gearbeitet werden
        
        createScale(1); 
    })
    .catch(error => {
        console.error(`Error loading GeoJSON data: ${error}`);
    });
    
    allLayers.forEach(data => {
        addGeoJSONLayer(data.name)
    });
    // addGeoJSONLayer('Ammonia');
    // addGeoJSONLayer('Etileno');
    // addGeoJSONLayer('Methanol');
    // addGeoJSONLayer('Aluminium');
    // addGeoJSONLayer('Steel');
    // addGeoJSONLayer('Cement');
    // addGeoJSONLayer('Pulp and paper');
    // addGeoJSONLayer('Refinery');
    // addGeoJSONLayer('Fossil thermal power plant');
    // addGeoJSONLayer('Biogas Power Plant'); // vorher: addGeoJSONLayer('Biogas Power Plant');
    // addGeoJSONLayer('Bioethanol');
    // addGeoJSONLayer('Biomass Power Plant');
    // addGeoJSONLayer('industrial', 'Initially add the layer to the map');
  

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
// const setCookie = (name, value, days = 100, path = '/') => {
//     const expires = new Date(Date.now() + days * 864e5).toUTCString()
//     document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=' + path
// }

// const getCookie = (name) => {
//     return document.cookie.split('; ').reduce((r, v) => {
//         const parts = v.split('=')
//         return parts[0] === name ? decodeURIComponent(parts[1]) : r
//     }, '')
// }

// const deleteCookie = (name, path = "/") => {
//     setCookie(name, '', -1, path)
// }

// function clone(obj) {
//     var copy;
//     // Handle the 3 simple types, and null or undefined
//     if (null == obj || "object" != typeof obj) return obj;
//     // Handle Date
//     if (obj instanceof Date) {
//         copy = new Date();
//         copy.setTime(obj.getTime());
//         return copy;
//     }
//     // Handle Array
//     if (obj instanceof Array) {
//         copy = [];
//         for (var i = 0, len = obj.length; i < len; i++) {
//             copy[i] = clone(obj[i]);
//         }
//         return copy;
//     }
//     // Handle Object
//     if (obj instanceof Object) {
//         copy = {};
//         for (var attr in obj) {
//             if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
//         }
//         return copy;
//     }
//     throw new Error("Unable to copy obj! Its type isn't supported.");
// }

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