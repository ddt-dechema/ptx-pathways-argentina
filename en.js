var translations_en = {
  
  table_emissions_title: `Total Emissions`,
  sidebar_title: `Sources of Carbon in Argentina`,
  introduction_title: `<h2>General information</h2>`,
  introduction_text: `<h3>Introduction</h3>
  CO<sub>2</sub> is a greenhouse gas produced in many cases as an industrial byproduct, which is currently emitted into the atmosphere in most of the processes that produce it. However, this gas has the potential to be used as raw material for Power-to-X (PtX) products that contain carbon in their molecules, such as e-methanol or synthetic fuels (e-fuels). The competitiveness of these products can be highly affected by the availability and quality of the CO<sub>2</sub> source that will be used.
    This map aims to identify carbon sources (in the form of CO<sub>2</sub>) in Argentina to collaborate in the search for opportunities to develop PtX projects in the country. To do this, the main point sources of CO<sub>2</sub> in Argentina are shown, indicating their location, type of source and size.`,
  project: `<h3>PtX Pathways-Project</h3> The PtX Pathways project aims to support partner countries in developing a sustainable market for the production, use and export of green hydrogen and its derivatives (PtX). It is funded by the German Federal Ministry of Economics and Climate Protection (BMWK) through the International Climate Initiative (IKI). The project's implementing partners are the German Society for International Cooperation (GIZ), Agora Energiewende, DECHEMA e.V, the Argentine Energy Secretariat, the Centro de Estudios de la Actividad Regulatoria Energética (CEARE) and the Fundación Torcuato Di Tella (FTDT), in close collaboration with the International PtX Hub.`,
  language_picker: `<h3>Cambiar el idioma</h3>`,
  languge_switch_link: `Si desea enlazar al mapa en un idioma específico, utilice el link 
  <a href="https://ddt-dechema.github.io/ptx-pathways-argentina/index.html?lang=en">inglés</a>
  o <a href="https://ddt-dechema.github.io/ptx-pathways-argentina/index.html?lang=es">español</a>
  `,
   
  filter_title: `Different categories/sources of carbon`,
  filter_text: `A distinction is made between industrial <span class="rect dot_industrial"></span> and biogenic sources <span class="rect dot_biogenic"></span>. 
  Industrial sources include the manufacture of chemical products (ammonia, ethylene, methanol) <span class="dot dot_chemicals"></span>, 
  metals (aluminum and steel) and cement <span class="dot dot_metals"></span>, 
  Pulp and paper <span class="dot dot_paper"></span>,
  and others, including refineries and fossil thermoelectric power plants <span class="dot dot_others"></span>. <br>
  Biogenic sources include biogas and bioethanol production.<span class="dot dot_bio"></span>`,
  manual_filter_title: `Or filter manually`,
  emission_type: `Type of CO<sub>2</sub> emissions:`,
  industrial_button: `industrial/energy sources`,
  biogenic_button: `biogenic sources`,
  only_selected_plants: `Only selected plant types:`,
  deselect_all_button: `Deselect all`,
  
  statistics_title: `Statistics`,
  statistics: `Total emissions in Argentina for selected filters:`,
  statistics_total: ` &nbsp;Tons of CO<sub>2</sub> per years`,
  circle_title: `Change the circle size`,
  circle_size: `Use this control if you want to change the scale (size) of the circles in order to see on the map the sites with lower emissions.`,
  zoom_factor: `Zoom factor`,
  scale_title: `Emissions in <span title="Megatonnes or 1&nbsp;000&nbsp;000 tonnes" style="border-bottom: 1px dashed blue">Mt</span>/year`,
  data_title: `Data and sources`,
  methods: `<h2>Sources and Methodology</h2>
  This map is based on estimates, public and industry-specific information sources, and information acquired from consultations with some associations, as explained below:
  <b>Aluminum</b>
  <br>Estimated value with the production capacity reported in the website of Aluar [1], a production factor of 83% (five-year average of production relative to capacity) [1] and an emission factor of 1.6 tonnes of CO2 per tonne of alluminium [2].
  <br><b>Steel</b>
  <br>Production capacity data obtained from [3] and emission factors obtained from the sustainability reports of steel producing companies [4]–[8].
  <br><b>Cemento</b>
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
  <br>Estimated value with the installed capacity of each plant, an emission factor of 1.053 tonnes of CO2 per tonne of bioethanol and a production of 80% of the installed capacity.`,
  sources: `<h3>Literature</h3>
  [1]	“Aluar en cifras.” Accessed: Sep. 20, 2023. [Online]. Available: <a href="https://www.aluar.com.ar/seccion/descripci-n-de-la-empresa/2/32" target="_blank">https://www.aluar.com.ar/seccion/descripci-n-de-la-empresa/2/32</a>
  <br>[2]	MAyDS, “Informe Nacional de Inventario del Cuarto Informe Bienal de Actualización de la República Argentina a la Convención Marco de las Naciones Unidas para el Cambio Climático (CMNUCC).” Accessed: Sep. 20, 2023. [Online]. Available: <a href="https://unfccc.int/sites/default/files/resource/Informe%20Nacional%20de%20Inventario%20del%20IBA%204.pdf" target="_blank">https://unfccc.int/sites/default/files/resource/Informe%20Nacional%20de%20Inventario%20del%20IBA%204.pdf</a>
  <br>[3]	“Climate Trace.” [Online]. Available: <a href="https://climatetrace.org/map/argentina-manufacturing-CO<sub>2</sub>" target="_blank">https://climatetrace.org/map/argentina-manufacturing-CO<sub>2</sub></a>
  <br>[4]	Ternium, “Reporte de Sustentabilidad 2022,” Jul. 2023. Accessed: Oct. 06, 2023. [Online]. Available: <a href="https://ar.ternium.com/media/gltpn3xt/reporte-de-sustentabilidad-2022.pdf" target="_blank">https://ar.ternium.com/media/gltpn3xt/reporte-de-sustentabilidad-2022.pdf</a>
  <br>[5]	Tenaris, “Sustainability Report 2022,” Mar. 2023. Accessed: Oct. 06, 2023. [Online]. Available: <a href="http://flip.tenaris.com/books/byxm/#p=1" target="_blank">http://flip.tenaris.com/books/byxm/#p=1</a>
  <br>[6]	ArcelorMittal Acindar, “Reporte integrado 2022,” Aug. 2023. Accessed: Oct. 06, 2023. [Online]. Available: <a href="https://www.acindar.com.ar/wp-content/uploads/2023/08/ACI_Reporte2022.pdf" target="_blank">https://www.acindar.com.ar/wp-content/uploads/2023/08/ACI_Reporte2022.pdf</a>
  <br>[7]	Votorantim Siderurgia, “Informe de sustentabilidad 2015.” Accessed: Oct. 06, 2023. [Online]. Available: <a href="https://www.acerbrag.com/pdf/Reporte_Sustentabilidad_2015.pdf" target="_blank">https://www.acerbrag.com/pdf/Reporte_Sustentabilidad_2015.pdf</a>
  <br>[8]	GERDAU, “GERDAU - Planta Perez.” Accessed: Oct. 06, 2023. [Online]. Available: <a href="https://www.siderurgia.org.ar/conf18/gerdau.html" target="_blank">https://www.siderurgia.org.ar/conf18/gerdau.html</a>
  <br>[9]	“Cement Review.”
  <br>[10]	Asociación de Fabricantes de Cemento Portland (AFCP), “Informe de indicadores de sostenibilidad de la industria argentina del cemento 2020 - 2021,” Aug. 2022. Accessed: Oct. 06, 2023. [Online]. Available: <a href="https://www.afcp.org.ar/informes-de-sostenibilidad" target="_blank">https://www.afcp.org.ar/informes-de-sostenibilidad</a>
  <br>[11]	Ministerio de Agricultura, Ganadería y Pesca, Argentina, “Relevamiento de la Industria de la Celulosa y el Papel 2020,” Jul. 2022. Accessed: Oct. 06, 2022. [Online]. Available: <a href="https://www.magyp.gob.ar/sitio/areas/desarrollo-foresto-industrial/foresto-industria/_archivos//000001_Informes%20Anuales%20de%20la%20Industria/000002_2020/002020_Relevamiento%20de%20la%20Industria%20de%20la%20Celulosa%20y%20el%20Papel%202020.pdf" target="_blank">https://www.magyp.gob.ar/sitio/areas/desarrollo-foresto-industrial/foresto-industria/_archivos//000001_Informes%20Anuales%20de%20la%20Industria/000002_2020/002020_Relevamiento%20de%20la%20Industria%20de%20la%20Celulosa%20y%20el%20Papel%202020.pdf</a>
  <br>[12]	K. Kuparinen, E. Vakkilainen, and T. Tynjälä, “Biomass-based carbon capture and utilization in kraft pulp mills,” Mitig Adapt Strateg Glob Change, vol. 24, no. 7, pp. 1213–1230, Oct. 2019, doi: 10.1007/s11027-018-9833-9.
  <br>[13]	CAMMESA, “Informe Síntesis Mensual - Agosto 2023.” Accessed: Oct. 09, 2023. [Online]. Available: <a href="https://cammesaweb.cammesa.com/informe-sintesis-mensual/" target="_blank">https://cammesaweb.cammesa.com/informe-sintesis-mensual/</a>
  <br>[14]	Ministerio de Ambiente y Desarrollo Sostenible Argentina, “Cuarto Informe Bienal de Actualización de Argentina a la Convención Marco de las Naciones Unidas para el Cambio Climático (CMNUCC),” 2021. Accessed: Oct. 09, 2023. [Online]. Available: <a href="https://www4.unfccc.int/sites/SubmissionsStaging/NationalReports/Documents/3752416_Argentina-BUR4-1-4to%20Informe%20Bienal%20de%20la%20Rep%C3%BAblica%20Argentina.pdf" target="_blank">https://www4.unfccc.int/sites/SubmissionsStaging/NationalReports/Documents/3752416_Argentina-BUR4-1-4to%20Informe%20Bienal%20de%20la%20Rep%C3%BAblica%20Argentina.pdf</a>
  <br>[15]	Profertil, “Reporte de Sostenibilidad 2022.” Accessed: Oct. 09, 2023. [Online]. Available: <a href="https://rs.profertil.com.ar/wp-content/uploads/2023/09/Reporte-de-Sostenibilidad-2022.pdf" target="_blank">https://rs.profertil.com.ar/wp-content/uploads/2023/09/Reporte-de-Sostenibilidad-2022.pdf</a>
  <br>[16]	Instituto Petroquímico Argentino (IPA), “Reporte Anual Instituto Petroquímico Argentino,” 2021. Accessed: Oct. 09, 2023. [Online]. Available: <a href="https://noticiasutnfrn.files.wordpress.com/2020/04/anuario-ipa-2019.pdf" target="_blank">https://noticiasutnfrn.files.wordpress.com/2020/04/anuario-ipa-2019.pdf</a>
  `,
  download_text: `Download the data`,
  download_csv: `Download the sources of CO₂ in Argentina (csv)`,
  download_geojson: `Download the sources of CO₂ in Argentina (geojson)`,

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
  button_thermal: `Fossil thermal power plant`,
  button_ammonia: `Ammonia`,
  button_etileno: `Etileno`,
  button_methanol: `Methanol`,
  button_bioethanol: `Bioethanol`,
  button_biogas: `Biogas power plant`,
  button_paper: `Pulp and Paper`,
  table_header_industry_type: `Industry`,
  table_header_total_emissions: `Total Emissions (Tonnes)`,
};

// Export the translations object (for use in other scripts)
window.translations_en = translations_en;


