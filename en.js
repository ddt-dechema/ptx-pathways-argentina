var translations_en = {
  
  table_emissions_title: `Total Emissions`,
  sidebar_title: `Sources of Carbon in Argentina`,
  introduction_title: `<h2>General information</h2>`,
  introduction_text: `<h3>Introduction</h3>
  CO<sub>2</sub> is a greenhouse gas produced in many cases as an industrial byproduct, which is currently emitted into the atmosphere in most of the production sites. However, this gas has the potential to be used as raw material for Power-to-X (PtX) products containing carbon in their molecules, such as e-methanol or synthetic fuels (e-fuels). The competitiveness of these products can be highly affected by the availability and quality of the CO<sub>2</sub> source that will be used.
    This map aims to identify carbon sources (in the form of CO<sub>2</sub>) in Argentina to collaborate in the search for opportunities to develop PtX projects in the country. 
    To do this, this webmap shows the main point sources of CO<sub>2</sub> in Argentina, indicating their location, type of source and size.<br>
    <br>CO<sub>2</sub> can be obtained from different sources such as industrial and biogenic point sources. This map attempts to be comprehensive with respect to the availability of all carbon sources in the country. It should be nevertheless noted that in the long term, the carbon needed for PtX applications should stem from a non-fossil, closed carbon cycle, to ensure carbon neutrality. Direct Air Capture (DAC) and biogenic point sources could meet this requirement, provided that sustainability criteria are taken into account.`,
  project: `<h3>The International Power-to-X Hub</h3> The International PtX Hub is implemented by the Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH on behalf of the German Federal Ministry for Economic Affairs and Climate Action (BMWK). Financed by the International Climate Initiative (Internationale Klimaschutzinitiative, IKI), the International PtX Hub is a contribution to the German National Hydrogen Strategy of 2020 and represents one of the four pillars of the BMUV’s PtX action programme initiated in 2019.
    In Argentina, the political partner is the Argentine Secretariat of Energy. The implementing partners are CEARE – Centro de Estudios de la Actividad Regulatoria Energética, Fundación Torcuato Di Tella (FTDT), Agora Energiewende and DECHEMA e.V.`,
  language_picker: `<h3>Cambiar el idioma</h3>`,
  language_switch_link: `Si desea enlazar al mapa en un idioma específico, utilice el link 
  <a id="link_english">inglés</a>
  o <a id="link_spanish">español</a>
  `,
  sidebar_header_filters: `Filters`,
  filter_title: `Different categories/sources of carbon`,
  filter_text_introduction: `A distinction is made between industrial  <span class="rect dot_industrial"></span> and biogenic carbon sources <span class="rect dot_biogenic"></span>. You can click on the different buttons to toggle the visibility of the respective sources on the map. Additionally, you can manually select or deselect specific plant types.`,
  filter_text: `<h2>About the data sources</h2> Industrial <span class="rect dot_industrial"></span> and biogenic sources <span class="rect dot_biogenic"></span>. 
  Industrial sources include the manufacture of chemical products (ammonia, ethylene, methanol) <span class="dot dot_chemicals"></span>, 
  metals (aluminum and steel) and cement <span class="dot dot_metals"></span>, 
  Pulp and paper <span class="dot dot_paper"></span>,
  and others, including refineries and fossil thermoelectric power plants <span class="dot dot_others"></span>. <br>
  Biogenic sources include biogas, biomass and bioethanol production.<span class="dot dot_bio"></span>`,
  // manual_filter_title: `Or filter manually`,
  emission_type: `<b>Type of CO<sub>2</sub> emissions:</b>`,
  industrial_button: `industrial/energy sources`,
  biogenic_button: `biogenic sources`,
  only_selected_plants: `Only selected plant types:`,
  deselect_all_button: `Deselect all`,
  
  statistics_title: `Statistics`,
  statistics: `Total emissions in Argentina for selected filters:`,
  statistics_total: ` &nbsp;kilotonnes of CO<sub>2</sub> per years`,
  circle_title: `Change the circle size`,
  circle_size: `Use this control if you want to change the scale (size) of the circles in order to see on the map the sites with lower emissions.`,
  zoom_factor: `Zoom factor`,
  scale_title: `Emissions in <span title="kilo or 1&nbsp;000 tonnes" style="border-bottom: 1px dashed blue">kt</span>/year`,
  data_title: `Data and sources`,
  methods: `<h2>Sources and Methodology</h2>
  This map is based on estimates, public and industry-specific information sources, and information acquired from consultations with some associations, as explained below:
  <b>Aluminum</b>
  <br>Estimated value with the production capacity reported in the website of Aluar [1], a production factor of 83% (five-year average of production relative to capacity) [1] and an emission factor of 1.6 tonnes of CO2 per tonne of alluminium [2].
  <br><b>Steel</b>
  <br>Production capacity data obtained from [3] and emission factors obtained from the sustainability reports of steel producing companies [4]–[8].
  <br><b>Cement</b>
  <br>Estimated value with the clinker production capacity [9], a clinker factor of 0.681 and an average emission factor of 0.519 tonnes of CO2 per tonnes of cement [10]. 
  <br><b>Pulp and Paper</b>
  <br>Annual production capacity data and utilization factor obtained from the 2020 Survey of the pulp and paper industry [11] and an average emission factor of 2.5 tonnes of CO2 per tonne of pulp. Estimation done by [12].
  <br><b>Fossil thermal power plant</b>
  <br>Data obtained from CAMMESA [13].
  <br><b>Refineries</b>
  <br>From the total direct emissions of the refining sector reported in the 2018 national inventory [14], emissions per refinery were estimated considering that their emissions were proportional to their installed capacity. This estimate has two assumptions: equal emission factors for all refineries and equal use factors for all refineries in 2018.
  <br><b>Ammonia</b>
  <br>The value for the company Profertil was obtained directly from its sustainability report [15]. For the other two plants, the installed production capacity [16], and assumed production factor of 80% and an emission factor of 0.91 tonnes of CO2 per tonne of ammonia [2], were used.
  <br><b>Methanol</b>
  <br>The annual production of 2018 was obtained from the annual report of the Argentine Petrochemical Institute (Instituto Petroquímico Argentino - IPA) [16], and an emission factor of 0.67 tonnes of CO2 per tonne of methanol was used [2].
  <br><b>Ethylene</b>
  <br>The installed production capacity was obtained from the annual report of the Argentine Petrochemical Institute (Instituto Petroquímico Argentino – IPA) [16], an assumed utilization factor of 98% and an emission factor of 0.84 tonnes of CO2 pero tonne of ethylene was used [2].
  <br><b>Biogas power plant</b>
  <br>Based on data obtained from CAMMESA [13], biogas plants that produce electricity and are connected to the Argentine Interconnection System (SADI) and their respective installed power (MW) were identified. The emission factor was estimated at 18 tonnes of CO2 per day per MW installed. 
  <br><b>Bioethanol</b>
  <br>Estimated value with the installed capacity of each plant, an emission factor of 1.053 tonnes of CO2 per tonne of bioethanol and a production of 80% of the installed capacity.
  <br><b>Biomass power plant</b>
  <br>Based on data obtained from CAMMESA [13], biomass plants that produce electricity and are connected to the Argentine Interconnection System (SADI) and their respective electrical energy generated (MWh) were identified. The emission factor was estimated based on [17], using 112,000 kg CO<sub>2</sub>/TJ by thermal energy from biomass and 40% of electrical efficiency.`,
  sources: `<h3>Literature</h3>
  [1]	“Aluar en cifras.” Accessed: Sep. 20, 2023. [Online]. Available: <a href="https://www.aluar.com.ar/seccion/descripci-n-de-la-empresa/2/32" target="_blank">https://www.aluar.com.ar/seccion/descripci-n-de-la-empresa/2/32</a>
  <br>[2]	MAyDS, “Informe Nacional de Inventario del Cuarto Informe Bienal de Actualización de la República Argentina a la Convención Marco de las Naciones Unidas para el Cambio Climático (CMNUCC).” Accessed: Sep. 20, 2023. [Online]. Available: <a href="https://unfccc.int/sites/default/files/resource/Informe%20Nacional%20de%20Inventario%20del%20IBA%204.pdf" target="_blank">https://unfccc.int/sites/default/files/resource/Informe%20Nacional%20de%20Inventario%20del%20IBA%204.pdf</a>
  <br>[3]	“Climate Trace.” [Online]. Available: <a href="https://climatetrace.org/map/argentina-manufacturing-CO<sub>2</sub>" target="_blank">https://climatetrace.org/map/argentina-manufacturing-CO<sub>2</sub></a>
  <br>[4]	Ternium, “Reporte de Sustentabilidad 2022,” Jul. 2023. Accessed: Oct. 06, 2023. [Online]. Available: <a href="https://ar.ternium.com/media/gltpn3xt/reporte-de-sustentabilidad-2022.pdf" target="_blank">https://ar.ternium.com/media/gltpn3xt/reporte-de-sustentabilidad-2022.pdf</a>
  <br>[5]	Tenaris, “Sustainability Report 2022,” Mar. 2023. Accessed: Oct. 06, 2023. [Online]. Available: <a href="http://flip.tenaris.com/books/byxm/#p=1" target="_blank">http://flip.tenaris.com/books/byxm/#p=1</a>
  <br>[6]	ArcelorMittal Acindar, “Reporte integrado 2022,” Aug. 2023. Accessed: Oct. 06, 2023. [Online]. Available: <a href="https://www.acindar.com.ar/wp-content/uploads/2023/08/ACI_Reporte2022.pdf" target="_blank">https://www.acindar.com.ar/wp-content/uploads/2023/08/ACI_Reporte2022.pdf</a>
  <br>[7]	Votorantim Siderurgia, “Informe de sustentabilidad 2015.” Accessed: Oct. 06, 2023. [Online]. Available: <a href="https://www.acerbrag.com/pdf/Reporte_Sustentabilidad_2015.pdf" target="_blank">https://www.acerbrag.com/pdf/Reporte_Sustentabilidad_2015.pdf</a>
  <br>[8]	GERDAU, “GERDAU - Planta Perez.” Accessed: Oct. 06, 2023. [Online]. Available: <a href="https://www.siderurgia.org.ar/conf18/gerdau.html" target="_blank">https://www.siderurgia.org.ar/conf18/gerdau.html</a>
  <br>[9]	“Cement Review.” [online] Available: <a href="https://www.cemnet.com/Publications/Item/171926/international-cement-review-magazine.html" target="_blank">https://www.cemnet.com/Publications/Item/171926/international-cement-review-magazine.html</a>
  <br>[10]	Asociación de Fabricantes de Cemento Portland (AFCP), “Informe de indicadores de sostenibilidad de la industria argentina del cemento 2020 - 2021,” Aug. 2022. Accessed: Oct. 06, 2023. [Online]. Available: <a href="https://www.afcp.org.ar/informes-de-sostenibilidad" target="_blank">https://www.afcp.org.ar/informes-de-sostenibilidad</a>
  <br>[11]	Ministerio de Agricultura, Ganadería y Pesca, Argentina, “Relevamiento de la Industria de la Celulosa y el Papel 2020,” Jul. 2022. Accessed: Oct. 06, 2022. [Online]. Available: <a href="https://www.magyp.gob.ar/sitio/areas/desarrollo-foresto-industrial/foresto-industria/_archivos//000001_Informes%20Anuales%20de%20la%20Industria/000002_2020/002020_Relevamiento%20de%20la%20Industria%20de%20la%20Celulosa%20y%20el%20Papel%202020.pdf" target="_blank">https://www.magyp.gob.ar/sitio/areas/desarrollo-foresto-industrial/foresto-industria/_archivos//000001_Informes%20Anuales%20de%20la%20Industria/000002_2020/002020_Relevamiento%20de%20la%20Industria%20de%20la%20Celulosa%20y%20el%20Papel%202020.pdf</a>
  <br>[12]	K. Kuparinen, E. Vakkilainen, and T. Tynjälä, “Biomass-based carbon capture and utilization in kraft pulp mills,” Mitig Adapt Strateg Glob Change, vol. 24, no. 7, pp. 1213–1230, Oct. 2019, doi: 10.1007/s11027-018-9833-9.
  <br>[13]	CAMMESA, “Informe Síntesis Mensual - Agosto 2023.” Accessed: Oct. 09, 2023. [Online]. Available: <a href="https://cammesaweb.cammesa.com/informe-sintesis-mensual/" target="_blank">https://cammesaweb.cammesa.com/informe-sintesis-mensual/</a>
  <br>[14]	Ministerio de Ambiente y Desarrollo Sostenible Argentina, “Cuarto Informe Bienal de Actualización de Argentina a la Convención Marco de las Naciones Unidas para el Cambio Climático (CMNUCC),” 2021. Accessed: Oct. 09, 2023. [Online]. Available: <a href="https://www4.unfccc.int/sites/SubmissionsStaging/NationalReports/Documents/3752416_Argentina-BUR4-1-4to%20Informe%20Bienal%20de%20la%20Rep%C3%BAblica%20Argentina.pdf" target="_blank">https://www4.unfccc.int/sites/SubmissionsStaging/NationalReports/Documents/3752416_Argentina-BUR4-1-4to%20Informe%20Bienal%20de%20la%20Rep%C3%BAblica%20Argentina.pdf</a>
  <br>[15]	Profertil, “Reporte de Sostenibilidad 2022.” Accessed: Oct. 09, 2023. [Online]. Available: <a href="https://rs.profertil.com.ar/wp-content/uploads/2023/09/Reporte-de-Sostenibilidad-2022.pdf" target="_blank">https://rs.profertil.com.ar/wp-content/uploads/2023/09/Reporte-de-Sostenibilidad-2022.pdf</a>
  <br>[16]	Instituto Petroquímico Argentino (IPA), “Reporte Anual Instituto Petroquímico Argentino,” 2021. Accessed: Oct. 09, 2023. [Online]. Available: <a href="https://noticiasutnfrn.files.wordpress.com/2020/04/anuario-ipa-2019.pdf" target="_blank">https://noticiasutnfrn.files.wordpress.com/2020/04/anuario-ipa-2019.pdf</a>
  <br>[17] 2006 IPCC Guidelines for National Greenhouse Gas Inventories. Chapter 2: Stationary Combustion. Tabla 2.2. Publications - IPCC-TFI (iges.or.jp)
  `,
  download_text: `Download the data`,
  download_csv: `Download the sources of CO₂ in Argentina (csv)`,
  download_geojson: `Download the sources of CO₂ in Argentina (geojson)`,

  biogenic_title: `Others`,
  biogenic_header: `<h3>Other biogenic sources</h3>`,
  biogenic_intro: `Decentralised biomass offers a complementary source of biogenic carbon with strong potential for PtX deployment in Argentina. Key streams include residues from the sugar, paper and forestry sectors, agro-industrial by-products from cattle, pig and poultry processing, and end-of-life tyres. These biogenic sources strengthen supply and could provide a durable, sustainable CO₂ feedstock. Overall, almost 9,000 kilotonnes of CO₂ per year could potentially be derived from them. Using current biomass availability, the potential biogenic carbon from these sectors is estimated as follows:`,  
  biogenic_figure1_text: `Category descriptions are provided below. Further details on data sourcing and calculations can be found in the Methodology section.`,
  biogenic_sugar: `<h4>Sugar industry</h4> The sugar industry in Argentina produced approximately 2,000 kilotonnes of sugar in 2024 [1]. Sugarcane milling produces bagasse, a fibrous residue that serves as a biogenic carbon source. Each year an estimated 7,400 kilotonnes of bagasse are generated, and almost all sugar mills in the country use it as fuel to generate electricity for their own operations [2]. Capturing the associated emissions could make around <b>5.900 kilotonnes of biogenic CO₂</b> available annually. About 60% of sugar production—and thus CO₂ recovery potential— is concentrated in the province of Tucumán, with Jujuy accounting for 35% and additional mills located in Salta [1].`, 
  biogenic_paper: `<h4>Pulp and paper industry</h4> The pulp and paper sector emits about 2,283 kilotonnes of CO₂ per year across the mapped mills. Although these streams mix fossil- and biomass-derived carbon, the biogenic share is typically dominant, ranging from 70% to 90% of total emissions. This implies that up to <b>2,000 kilotonnes of biogenic CO₂</b> could be available annually for capture from pulp and paper mills in Argentina. Spent pulping liquor, a biogenic mill waste, is typically concentrated and burned in recovery boilers for steam and power generation [3]. Within the sector’s total biogenic CO₂, the largest shares come from mills using chemical-pulping processes, notably Arauco Argentina S.A. and Celulosa Argentina S.A. [4]. `,
  biogenic_forestry: `<h4>Forestry sector</h4> The forestry industry in Argentina processes about 11 million m³ of logs each year. Aside from primary sawn timber, roughly 60% of mill intake results in by-products, including bark, wood chips, sawdust, and slabwood/edgings. These by-products are broadly valorised, with approximately 17% used for energy production. Roughly half of that volume feeds some of the biomass power plants whose emissions are already inventoried on the map. The remainder is used on site for heat and power generation, making sawmills a meaningful source of biogenic CO₂. On this basis, approximately 580,000 m³ of wood residues are burned as fuel across sawmills nationwide, yielding around <b>550 kilotonnes of biogenic CO₂</b> potentially available for recovery. Approximately 40.6% of sawmilling is concentrated in Misiones, with strong activity also in Corrientes and a notable share in Entre Ríos [5].`,
  biogenic_ELT: `<h4>End-of-life tyres (ELTs)</h4>Using solid, carbon-rich recovered fuels such as end-of-life tyres (ELTs) has gained importance for both economic and environmental reasons. On average, tyres contain 60–70% carbon by mass; depending on vehicle type, 18–34% of that carbon is intrinsically biogenic due to biologically derived components such as natural rubber [6]. When ELTs are used for energy, the resulting flue gas contains a biogenic CO₂ fraction that can be quantified and potentially recovered for PtX. In Argentina, an average of 178.5 kilotonnes of ELTs are generated each year [7], representing approximately <b>111.3 kilotonnes of biogenic CO₂</b> potential. The largest contribution of ELTs comes from Buenos Aires Province, which generates about 38% of non-reusable tyres, followed by Córdoba with 24%. Other notable contributions come from CABA, Santa Fe, Mendoza, Entre Ríos, and Tucumán. The remaining provinces each account for roughly 1–2% [8].`,
  biogenic_meat: `<h4>Meat & Poultry processing</h4>Agro-industrial biomass by-products in Argentina show strong potential for biogas production—and with it, biogenic CO₂. Slaughtering and processing of cattle, pigs, and poultry generate large volumes of highly polluting effluents. Treating these wastes via anaerobic digestion both provides a waste-management solution and produces biogas. The current potential is estimated at 43.3 million m³ of biogas per year. Assuming 40% CO₂ in raw biogas, this corresponds to 17.3 million m³ or <b>34.2 kilotonnes of biogenic CO₂</b>. If the additional CO₂ from combusting the methane in that biogas is also counted, the total biogenic CO₂ potentially recoverable could <b>rise to 80.7 kilotonnes</b>. At present, the central economic region accounts for the largest share of the sector activity—and, by extension, the greatest biogas and biogenic CO₂ potential. Within this region, Buenos Aires represents about 44% of the share [9].`,

  biogenic_methodology: `<h3>Methodology</h3>This summary presents only an estimate of the maximum possible available biogenic carbon from the listed sources to provide a general overview and allow magnitude comparisons. Determining precise quantities would require a detailed assessment that accounts for feedstock composition, conversion routes, yields, and site-specific data.
  <h4>Sugar industry</h4>
  Data on feedstock consumption, sugar production, and geographic distribution were sourced from the Centro Azucarero Argentino [1]. Total bagasse generation was derived from these figures, and associated CO₂ from bagasse combustion was calculated accordingly.
  <h4>Pulp & paper industry</h4>
  Mill production values reported on the map served as inputs for the calculations. The pulping process at each site was identified from the Survey of the Pulp and Paper Industry by the National Directorate for Forest-Industry Development (DNDFI) [4]. Using the process type and corresponding theoretical yields, residual carbon in pulping waste streams was estimated and the associated CO₂ releases were calculated.
  <h4>Forestry industry</h4>
  Required data were sourced from the Survey of the Sawmilling Industry 2023 by the National Directorate for Forest-Industry Development (DNDFI). Using the volume of by-products from first-stage log processing (sawmilling) and the reported shares used for on-site energy generation, the quantity of wood fuel was calculated and, from it, the maximum potential CO₂ was derived. Data on the geographic distribution of sawmilling activities were also derived from the same source.
  <h4>End-of-life tyres (ELT)</h4>
  The biogenic carbon fraction of total carbon in ELTs was assumed at 22% for passenger-car tyres and 32% for truck tyres [6]. Totals of ELTs by type generated in Argentina were taken from a report by the Ministerio de Ambiente de la Provincia de Buenos Aires [7]. The geographical distribution of ELTs was approximated using regional vehicle registration data [8].
  <h4>Meat & poultry processing</h4>
  Data on biomass-waste generation from meat and poultry processing and the corresponding regional biogas production potentials were obtained from the Annual Report on Biogas Potential from Cattle, Swine, and Poultry Slaughter by the Argentina’s Ministry of Economy [9]. Assuming raw biogas is 60% CH₄ and 40% CO₂ by volume, the CO₂ contained in the gas was estimated, and the additional CO₂ from methane combustion was calculated.`,

biogenic_sources: `
  <h3>Sources</h3>
  [1] Centro Azucarero Argentino. “Producción de azúcar 2020–2029.” Accessed: Sep. 26, 2025. [Online]. 
  Available: <a href="https://centroazucarero.com.ar/produccion-de-azucar-2020-2029/" target="_blank">https://centroazucarero.com.ar/produccion-de-azucar-2020-2029/</a>
  <br>[2] Amores, M. J., Mele, F. D., Jiménez, L., & Castells, F. “Life cycle assessment of fuel ethanol from sugarcane in Argentina.” The International Journal of Life Cycle Assessment, vol. 18, pp. 1344–1357, 2013.
  <br>[3] Gobierno de la República Argentina. “Plan de acción nacional de industria y cambio climático.” Accessed: Sep. 26, 2025. [Online]. 
  Available: <a href="https://www.argentina.gob.ar/sites/default/files/plan_de_accion_nacional_de_industria_y_cambio_climatico.pdf" target="_blank">PDF</a>
  <br>[4] Secretaría de Bioeconomía (Argentina), Dirección Nacional de Desarrollo Foresto Industrial (DNDFI). “Relevamiento de la Industria de la Celulosa y el Papel 2023.” Accessed: Sep. 26, 2025. [Online]. 
  Available: <a href="https://www.magyp.gob.ar/sitio/areas/desarrollo-foresto-industrial/foresto-industria/_archivos/000001_Informes%20Anuales%20de%20la%20Industria//000004_2023/000000_Relevamiento%20de%20la%20Industria%20de%20la%20Celulosa%20y%20Papel%202023.pdf" target="_blank">PDF</a>
  <br>[5] Secretaría de Bioeconomía (Argentina), Dirección Nacional de Desarrollo Foresto Industrial (DNDFI). “Relevamiento de la Industria del Aserrado 2023.” Accessed: Sep. 26, 2025. [Online]. 
  Available: <a href="https://www.magyp.gob.ar/sitio/areas/desarrollo-foresto-industrial/foresto-industria/_archivos/000001_Informes%20Anuales%20de%20la%20Industria//000004_2023/000000_Relevamiento%20de%20la%20Industria%20del%20Aserrado%202023.pdf" target="_blank">PDF</a>
  <br>[6] Saiz-Rodríguez, L., Bermejo-Muñoz, J. M., & Zambon, A. “Determination of the Biomass Content of End-of-Life Tyres.” In: Biomass Volume Estimation and Valorization for Energy. InTechOpen, 2017.
  <br>[7] Ministerio de Ambiente de la Provincia de Buenos Aires. “Neumáticos fuera de uso en la provincia de Buenos Aires. Hacia una economía circular.” (Oct. 2022). Accessed: Sep. 26, 2025. [Online]. 
  Available: <a href="https://www.ambiente.gba.gob.ar/pdfs/009_INFORME%20NEUMATICOS_OCT22_comprimido.pdf" target="_blank">PDF</a>
  <br>[8] Dirección Nacional del Registro de la Propiedad del Automotor (DNRPA). “Boletines Estadísticos – Parque automotor por provincia (2023).” Accessed: Sep. 26, 2025. [Online]. 
  Available: <a href="https://www.dnrpa.gov.ar/portal_dnrpa/estadisticas/rrss_tramites/tram_parque.php?anio=2023&origen=portal_dnrpa" target="_blank">https://www.dnrpa.gov.ar/...</a>
  <br>[9] Secretaría de Bioeconomía (Argentina), Coordinación de Bioenergía. “Informe anual de potencial de biogás 2024 – Faena de bovinos, porcinos y aves.” Accessed: Sep. 26, 2025. [Online]. 
  Available: <a href="https://www.magyp.gob.ar/sitio/areas/bioenergia/biogas/_archivos/000000_Informes%20anuales%20de%20potencial%20de%20biog%C3%A1s/240800_Informe%20anual%20de%20potencial%20de%20biog%C3%A1s%20-%20Faena%20de%20bovinos,%20porcinos%20y%20aves.pdf" target="_blank">PDF</a>
`,

  img_1: "img/Arg_EN_1.png",
  img_2: "img/Arg_EN_2.png",
  img_3: "img/Arg_EN_3.png",
  img_4: "img/Arg_EN_4.png",
  img_5: "img/Arg_EN_5.png",
  img_6: "img/Arg_EN_6.png",
  img_tutorial: "img/Tutorial_ENG.png",
  
  disclaimer_title: `Data, licensing and privacy`,
  map_programming: `<h3>Map development</h3>This map was developed by Dinh Du Tran (DECHEMA e.V.) with information collected by DECHEMA and GIZ Argentina.`,
  contact: `<h3>Contact</h3>
  Verónica Chorkulak<br>
  <a href="mailto:veronica.chorkulak@giz.de">veronica.chorkulak@giz.de</a><br>
  GIZ Argentina<br><br>
  
  Sebastián Murúa<br>
  <a href="mailto:sebastian.murua@giz.de">sebastian.murua@giz.de</a><br>
  GIZ Argentina<br><br>
  
  Luisa López<br>
  <a href="mailto:luisa.lopez@dechema.de">luisa.lopez@dechema.de</a><br>
  DECHEMA e.V.`,
  disclaimer: `<h3>Disclaimer.</h3>The objective of this map is to provide information for research and for the development of PtX projects.\n
  Given that the publicly available information on CO<sub>2</sub> emissions is limited, in some cases it was necessary to estimate using an assumed emissions factor. Therefore, the emissions value presented may not be fully consistent with the actual value for some of the sources identified. \n
  In addition, this map is not complete and there may be sources that have not been identified. \n
  The consortium partners are not responsible for the interpretation and use of the information provided by this map.`,
  legal: `<h3>Aviso legal</h3>
  This Map of CO<sub>2</sub> sources in Argentina is published by the PtX Hub. The PtX Hub is commissioned by the German Federal Government. It is mainly funded by the International Climate Initiative (IKI) and implemented by GIZ (Deutsche Gesellschaft für Internationale Zusammenarbeit GmbH). The opinions and recommendations expressed do not necessarily reflect the positions of the commissioning institutions or the implementing agency.`,
  // ...
  button_Aluminium: `Aluminium`,
  button_Steel: `Steel`,
  button_cement: `Cement`,
  button_refinery: `Refinery`,
  button_thermal: `Fossil Thermal Power Plant`,
  button_ammonia: `Ammonia`,
  button_ethylene: `Ethylene`,
  button_methanol: `Methanol`,
  button_bioethanol: `Bioethanol`,
  button_biogas: `Biogas Power Plant`,
  button_paper: `Pulp and Paper`,
  button_biomass: `Biomass Power Plant`,
  table_header_industry_type: `Industry`,
  table_header_total_emissions: `Total Emissions (kilotonnes)`,
  table_header_number_entries: `Number of plants`,

  intro_title: `Introduction tour`,
  show_intro_again: `Show intro again`,
  tour: {
    steps: [
      {
        title: "Welcome",
        intro:
        `This PtX Hub map displays carbon sources in South Africa mapping! If you want, you can follow this short introduction to see the main functions, or you can skip the tour.<br>
        <button id="set-cookie-no-tour" onclick="setCookieNoTour()" class="introjs-button" title="This is the only cookie used on this site. If you don't want to use cookies, the tour will be shown on each reload. Click anywhere outside the tour to make it disappear."><p>Don't show the tour again</p><p style="font-size: x-small; color: #746427;">&#9432; This will set a cookie.</p></button>
        <hr><img src="img/Tutorial_ENG.png" />
        The map shows both biogenic and industrial sources of CO₂. Although the current amount of CO₂ emitted by industrial plants is high, sustainable biogenic sources deserve more attention in the long term.`
      },
      { element: "#emitter-tab-li", intro: "In this tab, you can filter through different types of carbon sources.<br>They are divided into industrial and biogenic sources.", position: "right"},
      { element: "#biogenic-sources-tab-li", intro: "The available biogenic point sources are not the only source of biogenic carbon for PtX. You can learn more about additional decentralized potential carbon sources here, although they are not shown on this map", position: "right" },
      { element: "#data-tab-li", intro: "Information on data used and the methodology are explained in this tab.", position: "right" },
      { element: "#info-tab-li", intro: "Here you find information about the map and the data. <br><br>You can also switch the language here.", position: "right" },
      { element: "#disclaimer-tab-li", intro: "Legal or contact information are shown here. You can also restart the tour here." },
      { title: "Close", element: "#sidebar-close-sources-span", intro: "This closes the sidebar so you can focus on the map." },
      { intro: "Click on any bubble to see more information about it.<br>That's it, now feel free to play with the map." }
    ],
    showStepNumbers: false
  }
};

// Export the translations object (for use in other scripts)
window.translations_en = translations_en;


