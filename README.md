# Live Preview
https://ddt-dechema.github.io/ptx-pathways-argentina/

# ptx-pathways-argentina
Interactive web map to display carbon sources in Argentina - Part of the PtX Hub project.

# Aim and functionality of the map
Within the project, carbon sources for various industry types were collected, together with geo-information (latitude, longitude). These information were collected to be displayed on an interactive web map.
The origin of the map is loosely based on the map of the EU-funded [Carbon4Pur project](https://carbon4pur.github.io/mapping/index.html).

# Converting the excel to CSV to geojson
The carbon sources and information about them were collected by GIZ and DECHEMA within the project. The information is stored in a excel while, which makes a conversion necessary for it to be displayed on the map. 
It is possible to use free online-tools for that, but to make sure that in the future the conversion will stile work, a self-written tool is used here and accessible via the [csv_convert_geojson.html](https://ddt-dechema.github.io/ptx-pathways-argentina/tools/csv_convert_geojson_new.html) which is saved in the `tools/` folder as `csv_convert_geojson_new.html`. The website also contains instructions about the headers of the csv file, which are necessary to display all the relevant information on the map.

# 3rd party libraries and software used in this map - Licenses
This online map uses various 3rd party libraries. Some of those are to display the data in general on a map, others to make the "look & feel" more beautiful. Most of files needed for them to work, are downloaded beforehand and are accessed directly and locally from the web-application.

* [leaflet](https://leafletjs.com/) is an open-source JavaScript library for mobile-friendly interactive maps. The whole map is based on leaflet. 
The [sidebar2 plugin](https://github.com/noerw/leaflet-sidebar-v2) is used on top, to create to sidebar, which is a free software and can be redistributed under the MIT license, as described [here](https://github.com/Leaflet/Leaflet/blob/main/LICENSE).
The associated and necessary files for them to work are found in the folder `/assets`
    * `/leaflet.js`
    * `/leaflet.css`
    * `/leaflet-sidebar2.min.js`
    * `/leaflet-sidebar2.min.css`

* [bootstrap v5.0](https://getbootstrap.com/docs/5.0/components/buttons/#outline-buttons) is a framework to build the responsive sites, which includes styling of text, buttons, forms etc. it is released under the MIT license and is copyright 2021 Twitter. The usage is possible due to the following condititions listed [here](https://getbootstrap.com/docs/5.0/about/license/). The files used are listed here:
    * `/bootstrap.min.css`
    * `/bootstrap.bundle.min.js`

* Alternatively, in a previous version of the map, bulma is used as a CSS framework. Its source code is licensed under MIT, described [here](https://github.com/jgthms/bulma/blob/master/LICENSE).
The main framework and the extensions are listed below:
The associated and necessary files for them to work are found in the folder `/assets`.
    * `/bulma.min.css` and `/bulma-slider.min.css` where downloaded from [here](https://bulma.io/)
    * `/bulma-slider.min.js` is a [bulma extension](https://wikiki.github.io/form/slider/)

* [jQuery](https://jquery.com/) is a JavaScript library, which makes many common JS events, animations, etc. simpler to use and handle. For this map, version 3.7.1 is used. The jQuery library is [licensed](https://jquery.com/license/) under MIT terms.
    * `/jquery-3.7.1.min.js`

* [maptiler](https://www.maptiler.com/) is a map service provider but also software development company. It is used as a cloud hoster for this online map and provides the map tiles. The tiles contain information about the map itself, e.g. the styles, like if they should display a satellite version, whether water is depicted in blue and landscapes in green, or how hills are shown, but also contain datasets, such as names of countrys, border lines. The tiles were downloaded from a cdn initially.
The similarities and differences between maps, tiles and data are described on their own [website](https://documentation.maptiler.com/hc/en-us/articles/4405446399505-Maps-Tiles-Data-What-are-they-and-how-do-they-differ).

    For the current version of the carbon sources in Argentina, a personal account was created. After the login, each user receives a so-called API-key, which is included in the `main.js` file. In this file, one can also decide, which "style" to  be used. The current version uses `bright`.
    
    The basic plan is free of charge and contains (among other things) up to 5.000 sessions and 100.000 API requests per month, which is also described [here](https://www.maptiler.com/cloud/pricing/#maps). As described in their FAQ, one session equals one page load with map initialization and one tile request is generated when the user loads different parts of the map during the interaction.
    When the quote is reached on this free plan, the service will halt until the next month.

    As an example: in January 2024, when the map was shown to other colleagues within GIZ, the number of requests and sessions went up to 325 and 942, respectively.
    If one would want to increase this numbers to make sure that it will always be available, a `Flex` and an `Unlimited` plan of maptiler is also available (currently going for 25 USD or 295 USD per month).

    The files from maptiler which are necessary for the map to work are listed below:
    * `assets/maptiler-sdk.umd.js` and `assets/maptiler-sdk.css` were downloaded from the [github source](https://github.com/maptiler/maptiler-sdk-js) 
    * `assets/leaflet-maptilersdk.js` is a plugin to make leaflet and maptiler compatible and was downloaded from [here](https://docs.maptiler.com/leaflet/)

* [d3](https://d3js.org/) is a JavaScript library for data visualization. In this map, it is used to display the circles and calculate the sizes according to the carbon source. It is also used to show the numbers in a uniform format, regarding comma and dot separation. The license to use this library is described [here] (https://github.com/d3/d3/blob/main/LICENSE).
    * `assets/d3.min.js` is the file used for this map

* For the self-built converter from CSV to geojson, additionally to some of the libraries mentioned above, the CSV2geojson library is used, which source code is avilable on [github](https://github.com/mapbox/csv2geojson) and licensed under MIT terms. 
    * The only file required for this is saved under `assets/` as `csv2geojson_new.js`.

* Other `.css`  and `.js` files contain self-written styles and code to display the information on the web map. 
    * `assets/styles.css` contains information about the colors used (according to the PtX Hub Corporate Design manual `PtX Hub Corporate Design May 05 2021.pdf`), text and form sizes, as well as colors of rectangles, circles etc.
    * `en.js` contains the spanish text of the website.
    * `es.js` contains the english translation of the text.
    * `main.js` is the "heart" of this map. It includes all JavaScript-based functionalities about displaying the geojson file onto a map, displaying the different types of industries of carbon sources in various circle colors and sizes, the functionality of button toggling to hide/show certain circles and many other functions.

* For the various icons used on the webmap, SVG-files are used and embedded directly into the `index.html`-file. Those SVG were taken from publicly and free online sources and converted (and sometimes slightly changed).
If the PtX Hub owns similar icons, those can be used as well. 
    *

# License

Not written yet. 
License will depend on discussions and agreement with GIZ. 
The source code itself will probably be licensed under MIT terms (see [License](https://github.com/ddt-dechema/ptx-pathways-argentina?tab=MIT-1-ov-file)).