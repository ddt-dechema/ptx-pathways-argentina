var translations_es = {
  
  table_emissions_title: `Emisiones totales`,
  sidebar_title: `Fuentes de CO<sub>2</sub> en Argentina`,
  introduction_title: `<h2>Información general</h2>`,
  introduction: `<h3>Introducción</h3>El CO<sub>2</sub> es un gas de efecto invernadero producido en muchos casos como un subproducto industrial, el cual es actualmente emitido a la atmósfera en la mayoría de los procesos que lo producen. Sin embargo, este gas tiene el potencial de ser usado como materia prima para productos Power-to-X (PtX) que contienen carbono en sus moléculas, como es el caso del e-metanol o de los combustibles sintéticos (e-fuels).  La competitividad de estos productos puede estar altamente afectada por la disponibilidad y la calidad de la fuente de CO<sub>2</sub> que se utilizará.
  El presente mapa tiene como objetivo identificar fuentes de carbono (en forma de CO<sub>2</sub>) en Argentina para colaborar en la búsqueda de oportunidades para desarrollar proyectos de PtX en el país. Para ello, se muestran las principales fuentes puntuales de CO<sub>2</sub> en Argentina, indicando su ubicación, tipo de fuente y tamaño.  `,
  project: `<h3>Proyecto PtX Pathways</h3>El Proyecto PtX Pathways tiene como objetivo apoyar a los países socios en el desarrollo de un mercado sostenible para la producción, el uso y la exportación de hidrógeno verde y sus derivados (PtX). Se encuentra financiado por el Ministerio Federal Alemán de Economía y Protección del Clima (BMWK) a través de la Iniciativa Climática Internacional (IKI). Los socios en la ejecución del proyecto son la Sociedad Alemana para la Cooperación Internacional (GIZ), Agora Energiewende, DECHEMA e.V, la Secretaría de Energía de Argentina, el Centro de Estudios de la Actividad Regulatoria Energética (CEARE) y la Fundación Torcuato Di Tella (FTDT), en estrecha colaboración con el International PtX Hub.`,
  
  filter_title: `Explicación muy corta de las diferentes categorías/fuentes`,
  filter_text: `Se diferencia entre fuentes industriales y biogénicas. Dentro de las fuentes industriales se encuentran la manufactura de productos químicos (amoniaco, metanol, etileno), metales (aluminio y acero) y cemento, así como las refinerías y centrales termoeléctricas. Las fuentes biogénicas incluyen la producción de biogás y bioetanol.`,
  manual_filter_title: `O filtrar manualmente`,
  emission_type: `Tipo de emisión:`,
  industrial_button: `fuentes industriales de CO<sub>2</sub>`,
  biogenic_button: `fuentes biogénicas de CO<sub>2</sub>`,
  only_selected_plants: `Sólo los tipos de plantas seleccionados:`,
  deselect_all_button:`Deseleccionar todo`,
  
  statistics_title: `Estadísticas`,
  statistics: `Emisiones totales en Argentina para los filtros seleccionados:`,
  statistics_total: ` &nbsp;toneladas de CO<sub>2</sub> por año`,
  circle_title: `Cambiar la escala de los círculos`,
  circle_size: `Use este control si desea cambiar la escala (el tamaño) de los círculos para poder ver en el mapa los sitios con emisiones más bajas`,
  zoom_factor: `Factor de zoom`,
  scale_title: `Emisiones en <span title="Megatonnes or 1&nbsp;000&nbsp;000 tonnes" style="border-bottom: 1px dashed blue">MT</span>/año`,
  data_title: `Datos y fuentes`,
  methods: `<h3>Fuentes y metodología</h3>Este mapa utiliza como base estimaciones, fuentes de información pública y específica de cada industria, e información adquirida a partir de consultas realizadas a algunas asociaciones, como se explica a continuación:
  <b>Aluminio</b>
  <br>Valor estimado con la capacidad de producción reportada en la página de Aluar [1], un factor de producción de 83% (promedio de la producción de cinco años relativa a la capacidad [1] y un factor de emisión de 1,6 toneladas de CO<sub>2</sub> por toneladas de aluminio [2].
  <br><b>Acero</b>
  <br>Datos de capacidad de producción obtenidos de [3] y factores de emisión obtenidos de los reportes de sustentabilidad de las empresas productoras de acero [4]–[8].
  <br><b>Cemento</b>
  <br>Valor estimado con la capacidad de produccion de clincker [9], un factor de clincker de 0,681 y un factor de emisión promedio de 0,519 toneladas de CO<sub>2</sub> por toneladas de cemento [10]. 
  <br><b>Celulosa y papel</b>
  <br>Datos de capacidad anual de producción y factor de utilización obtenidos del Relevamiento 2020 de la industria de la celulosa y el papel[11] y un factor de emisión promedio de 2,5 toneladas de CO<sub>2</sub> por toneladas de celulosa estimación realizada por [12].
  <br><b>Termoeléctrica</b>
  <br>Datos obtenidos de CAMMESA [13]
  <br><b>Refinerías</b>
  <br>A partir de las emisiones directas totales del sector de refinación reportadas en el inventario nacional de 2018 [14], se estimaron las emisiones por refinería considerando que sus emisiones fueron proporcionales a su capacidad instalada. Esta estimación asume dos cosas: factores de emisión iguales para todas las refinerías y factores de usos iguales de todas las refinerías en 2018. 
  <br><b>Amoniaco</b>
  <br>El valor para la empresa Profertil se obtuvo directamente de su informe de sustentabilidad [15]. Para las otras dos plantas se usó la capacidad instalada de producción [16], un factor de producción asumido de 80% y un factor de emisión de 0,91 toneladas de CO<sub>2</sub> por tonelada de amoniaco [2].
  <br><b>>Metanol</b>
  <br>La producción anual de 2018 se obtuvo del informe anual del Instituto Petroquímico Argentino (IPA) [16], y se utilizó un factor de emisión de 0,67 toneladas de CO<sub>2</sub> por tonelada de metanol [2].
  <br><b>Etileno</b>
  <br>La capacidad instalada de producción se obtuvo del informe anual del Instituto Petroquímico Argentino (IPA) [16], un factor de utilización asumido del 98%, y se utilizó un factor de emisión de 0,84 toneladas de CO<sub>2</sub> por tonelada de etileno [2].
  <br><b>Biogás</b>
  <br>A partir de datos obtenidos de CAMMESA [13], se identificaron las plantas de biogás que producen energía eléctrica y se encuentran conectadas al Sistema Argentino de Interconexión (SADI), y su respectiva potencia instalada (MW). El factor de emisión fue estimado en 18 toneladas de CO<sub>2</sub> por día por MW instalado. 
  <br><b>Bioetanol</b>
  <br>Valor estimado con la capacidad instalada de cada planta, un factor de emisión de 1,053 toneladas de CO<sub>2</sub> por toneladas de bioetanol y una producción del 80% de la capacidad instalada.`,
  sources: `<h3>Literatura</h3>
  [1]	“Aluar en cifras.” Accessed: Sep. 20, 2023. [Online]. Available: https://www.aluar.com.ar/seccion/descripci-n-de-la-empresa/2/32
  <br>[2]	MAyDS, “Informe Nacional de Inventario del Cuarto Informe Bienal de Actualización de la República Argentina a la Convención Marco de las Naciones Unidas para el Cambio Climático (CMNUCC).” Accessed: Sep. 20, 2023. [Online]. Available: https://unfccc.int/sites/default/files/resource/Informe%20Nacional%20de%20Inventario%20del%20IBA%204.pdf
  <br>[3]	“Climate Trace.” [Online]. Available: https://climatetrace.org/map/argentina-manufacturing-CO<sub>2</sub>
  <br>[4]	Ternium, “Reporte de Sustentabilidad 2022,” Jul. 2023. Accessed: Oct. 06, 2023. [Online]. Available: https://ar.ternium.com/media/gltpn3xt/reporte-de-sustentabilidad-2022.pdf
  <br>[5]	Tenaris, “Sustainability Report 2022,” Mar. 2023. Accessed: Oct. 06, 2023. [Online]. Available: http://flip.tenaris.com/books/byxm/#p=1
  <br>[6]	ArcelorMittal Acindar, “Reporte integrado 2022,” Aug. 2023. Accessed: Oct. 06, 2023. [Online]. Available: https://www.acindar.com.ar/wp-content/uploads/2023/08/ACI_Reporte2022.pdf
  <br>[7]	Votorantim Siderurgia, “Informe de sustentabilidad 2015.” Accessed: Oct. 06, 2023. [Online]. Available: https://www.acerbrag.com/pdf/Reporte_Sustentabilidad_2015.pdf
  <br>[8]	GERDAU, “GERDAU - Planta Perez.” Accessed: Oct. 06, 2023. [Online]. Available: https://www.siderurgia.org.ar/conf18/gerdau.html
  <br>[9]	“Cement Review.”
  <br>[10]	Asociación de Fabricantes de Cemento Portland (AFCP), “Informe de indicadores de sostenibilidad de la industria argentina del cemento 2020 - 2021,” Aug. 2022. Accessed: Oct. 06, 2023. [Online]. Available: https://www.afcp.org.ar/informes-de-sostenibilidad
  <br>[11]	Ministerio de Agricultura, Ganadería y Pesca, Argentina, “Relevamiento de la Industria de la Celulosa y el Papel 2020,” Jul. 2022. Accessed: Oct. 06, 2022. [Online]. Available: https://www.magyp.gob.ar/sitio/areas/desarrollo-foresto-industrial/foresto-industria/_archivos//000001_Informes%20Anuales%20de%20la%20Industria/000002_2020/002020_Relevamiento%20de%20la%20Industria%20de%20la%20Celulosa%20y%20el%20Papel%202020.pdf
  <br>[12]	K. Kuparinen, E. Vakkilainen, and T. Tynjälä, “Biomass-based carbon capture and utilization in kraft pulp mills,” Mitig Adapt Strateg Glob Change, vol. 24, no. 7, pp. 1213–1230, Oct. 2019, doi: 10.1007/s11027-018-9833-9.
  <br>[13]	CAMMESA, “Informe Síntesis Mensual - Agosto 2023.” Accessed: Oct. 09, 2023. [Online]. Available: https://cammesaweb.cammesa.com/informe-sintesis-mensual/
  <br>[14]	Ministerio de Ambiente y Desarrollo Sostenible Argentina, “Cuarto Informe Bienal de Actualización de Argentina a la Convención Marco de las Naciones Unidas para el Cambio Climático (CMNUCC),” 2021. Accessed: Oct. 09, 2023. [Online]. Available: https://www4.unfccc.int/sites/SubmissionsStaging/NationalReports/Documents/3752416_Argentina-BUR4-1-4to%20Informe%20Bienal%20de%20la%20Rep%C3%BAblica%20Argentina.pdf
  <br>[15]	Profertil, “Reporte de Sostenibilidad 2022.” Accessed: Oct. 09, 2023. [Online]. Available: https://rs.profertil.com.ar/wp-content/uploads/2023/09/Reporte-de-Sostenibilidad-2022.pdf
  <br>[16]	Instituto Petroquímico Argentino (IPA), “Reporte Anual Instituto Petroquímico Argentino,” 2021. Accessed: Oct. 09, 2023. [Online]. Available: https://noticiasutnfrn.files.wordpress.com/2020/04/anuario-ipa-2019.pdf
  `,

  map_programming: "<h3>Elaboración del mapa</h3>Este mapa fue elaborado por Dinh Du Tran (DECHEMA e.V.) con información recolectada por DECHEMA y la GIZ Argentina. ",
  contact: `<h3>Contact</h3>
  Luisa López<br>
  <a href="mailto:luisa.lopez@dechema.de">luisa.lopez@dechema.de</a><br>
  DECHEMA e.V.<br><br>
  
  Verónica Chorkulak<br>
  <a href="mailto:veronica.chorkulak@giz.de">veronica.chorkulak@giz.de</a><br>
  GIZ Argentina<br><br>
  
  Sebastián Murúa<br>
  <a href="mailto:sebastian.murua@giz.de">sebastian.murua@giz.de</a><br>
  GIZ Argentina`,
  disclaimer: `<h3>Exoneración de responsabilidad.</h3> El objetivo de este mapa es proveer información para la investigación y para el desarrollo de proyectos de PtX.\n
  Dado que la información pública disponible sobre emisiones de CO<sub>2</sub> es limitada, en algunos casos fue necesario realizar una estimación usando un factor de emisiones asumido. Por lo tanto, el valor de emisiones presentado puede no ser totalmente coincidente con el valor real para algunas de las fuentes identificadas. \n
  Adicionalmente, este mapa no es exhaustivo, pudiendo existir fuentes que no han sido identificadas. \n
  Los socios del consorcio no se hacen responsables por la interpretación y el uso de la información provista por este mapa.`,
  legal: `En este caso, ¡sin duda seguimos necesitando un texto en el sentido de la impronta!
  Es necesito  para referirse a una declaración de propiedad y autoría de un documento, que es requerido legalmente para libros, periódicos, revistas1​ y sitios web2​ publicados en Alemania y otros países de habla alemana.`,
  // ...
};

// Export the translations object (for use in other scripts)
window.translations_es = translations_es;


