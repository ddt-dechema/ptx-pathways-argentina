var translations_es = {
  
  table_emissions_title: `Emisiones totales`,
  sidebar_title: `Fuentes de Carbono en Argentina`,
  introduction_title: `<h2>Información general</h2>`,
  introduction_text: `<h3>Introducción</h3>
    El CO<sub>2</sub> es un gas de efecto invernadero producido en muchos casos como un subproducto industrial, el cual es actualmente emitido a la atmósfera en la mayoría de los procesos que lo producen. Sin embargo, este gas tiene el potencial de ser usado como materia prima para productos Power-to-X (PtX) que contienen carbono en sus moléculas, como es el caso del e-metanol o de los combustibles sintéticos (e-fuels).  La competitividad de estos productos puede estar altamente afectada por la disponibilidad y la calidad de la fuente de CO<sub>2</sub> que se utilizará.
    El presente mapa tiene como objetivo identificar fuentes de carbono (en forma de CO<sub>2</sub>) en Argentina para colaborar en la búsqueda de oportunidades para desarrollar proyectos de PtX en el país. Para ello, se muestran las principales fuentes puntuales de CO<sub>2</sub> en Argentina, indicando su ubicación, tipo de fuente y tamaño.  <br>
    <br>El CO<sub>2</sub> puede obtenerse de diferentes fuentes, como las fuentes puntuales industriales y biogénicas. Este mapa intenta ser exhaustivo con respecto a la disponibilidad de todas las fuentes de carbono del país. No obstante, cabe señalar que, a largo plazo, el carbono necesario para las aplicaciones de PtX debe proceder de un ciclo de carbono cerrado y no fósil, para garantizar la neutralidad de carbono. La captura directa del aire (en inglés: Direct Air Capture, DAC) y las fuentes puntuales biogénicas podrían cumplir este requisito, siempre y cuando se tengan en cuenta criterios de sustentabilidad.`,
  project: `<h3>El International Power-to-X Hub</h3>El International PtX Hub está organizado por la Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH en nombre del Ministerio Federal Alemán de Economía y Acción por el Clima (BMWK). Financiado por la Iniciativa Internacional sobre el Clima (IKI), el International PtX Hub es una contribución a la Estrategia Nacional del Hidrógeno 2020 y es uno de los cuatro pilares del Programa de Acción PtX de la BMUV, que se lanzó en 2019.
    En Argentina, el socio político es la Secretaría de Energía de Argentina. Los socios implementadores son CEARE – Centro de Estudios de la Actividad Reguladora Energética, Fundación Torcuato Di Tella (FTDT), Agora Energiewende y DECHEMA e.V.`,
  language_picker: `<h3>Change the language</h3>`,
  language_switch_link: `If you want to link to the map in a specific language, use the 
  <a id="link_english">english</a>
  or <a id="link_spanish">spanish</a> link
  `,
  sidebar_header_filters: `Filtros`,
  filter_title: `Diferentes categorías/fuentes de carbono`,
  filter_text_introduction: `Se distingue entre fuentes de carbono industriales <span class="rect dot_industrial"></span> y biogénicas <span class="rect dot_biogenic"></span>. Puedes hacer clic en los distintos botones para alternar la visibilidad de las fuentes correspondientes en el mapa. Además, puedes seleccionar o deseleccionar manualmente tipos específicos de plantas.`,
  filter_text: `<h2>Acerca de las fuentes de datos</h2> Fuentes industriales <span class="rect dot_industrial"></span> y biogénicas <span class="rect dot_biogenic"></span>.
  Dentro de las fuentes industriales se encuentran la manufactura de productos químicos (amoniaco, etileno, metanol) <span class="dot dot_chemicals"></span>,
  metales (aluminio y acero) y cemento <span class="dot dot_metals"></span>,
  celulosa y papel <span class="dot dot_paper"></span>
  y otros como las refinerías y centrales termoeléctricas <span class="dot dot_others"></span>.<br>
  Las fuentes biogénicas incluyen la producción de biogás, biomasa y bioetanol <span class="dot dot_bio"></span>.`,
  manual_filter_title: `O filtrar manualmente`,
  emission_type: `<b>Tipo de emisión de CO<sub>2</sub></b>:`,
  industrial_button: `fuentes industriales/energéticas`,
  biogenic_button: `fuentes biogénicas`,
  only_selected_plants: `Sólo los tipos de plantas seleccionados:`,
  deselect_all_button: `Deseleccionar todo`,

  statistics_title: `Estadísticas`,
  statistics: `Emisiones totales en Argentina para los filtros seleccionados:`,
  statistics_total: ` &nbsp;kilotoneladas de CO<sub>2</sub> por año`,
  circle_title: `Cambiar la escala de los círculos`,
  circle_size: `Use este control si desea cambiar la escala (el tamaño) de los círculos para poder ver en el mapa los sitios con emisiones más bajas`,
  zoom_factor: `Factor de zoom`,
  scale_title: `Emisiones en <span title="kilotonnes o 1&nbsp;000 tonnes" style="border-bottom: 1px dashed blue">kt</span>/año`,
  data_title: `Datos y fuentes`,
  methods: `<h2>Fuentes y metodología</h2>
  Este mapa utiliza como base estimaciones, fuentes de información pública y específica de cada industria, e información adquirida a partir de consultas realizadas a algunas asociaciones, como se explica a continuación:
  <br><b>Aluminio</b>
  <br>Valor estimado con la capacidad de producción reportada en la página de Aluar [1], un factor de producción de 83% (promedio de la producción de cinco años relativa a la capacidad [1] y un factor de emisión de 1,6 toneladas de CO2 por toneladas de aluminio [2].
  <br><b>Acero</b>
  <br>Datos de capacidad de producción obtenidos de [3] y factores de emisión obtenidos de los reportes de sustentabilidad de las empresas productoras de acero [4]–[8].
  <br><b>Cemento</b>
  <br>Valor estimado con la capacidad de produccion de clincker [9], un factor de clincker de 0,681 y un factor de emisión promedio de 0,519 toneladas de CO<sub>2</sub> por toneladas de cemento [10]. 
  <br><b>Celulosa y papel</b>
  <br>Datos de capacidad anual de producción y factor de utilización obtenidos del Relevamiento 2020 de la industria de la celulosa y el papel[11] y un factor de emisión promedio de 2,5 toneladas de CO2 por toneladas de celulosa estimación realizada por [12].
  <br><b>Termoeléctricas fuentes fósiles</b>
  Datos obtenidos de CAMMESA [13]  
  <br><b>Refinerías</b>
  <br>A partir de las emisiones directas totales del sector de refinación reportadas en el inventario nacional de 2018 [14], se estimaron las emisiones por refinería considerando que sus emisiones fueron proporcionales a su capacidad instalada. Esta estimación asume dos cosas: factores de emisión iguales para todas las refinerías y factores de usos iguales de todas las refinerías en 2018. 
  <br><b>Amoniaco</b>
  <br>El valor para la empresa Profertil se obtuvo directamente de su informe de sustentabilidad [15]. Para las otras dos plantas se usó la capacidad instalada de producción [16], un factor de producción asumido de 80% y un factor de emisión de 0,91  toneladas de CO2 por tonelada de amoniaco [2].
  <br><b>Metanol</b>
  <br>La producción anual de 2018 se obtuvo del informe anual del Instituto Petroquímico Argentino (IPA) [16], y se utilizó un factor de emisión de 0,67 toneladas de CO2 por tonelada de metanol [2].
  <br><b>Etileno</b>
  <br>La capacidad instalada de producción se obtuvo del informe anual del Instituto Petroquímico Argentino (IPA) [16], un factor de utilización asumido del 98%, y se utilizó un factor de emisión de 0,84 toneladas de CO2 por tonelada de etileno [2].
  <br><b>Thermoeléctricas Biogás</b>
  <br>A partir de datos obtenidos de CAMMESA [13], se identificaron las plantas de biogás que producen energía eléctrica y se encuentran conectadas al Sistema Argentino de Interconexión (SADI), y su respectiva potencia instalada (MW). El factor de emisión fue estimado en 18 toneladas de CO2 por día por MW instalado. 
  <br><b>Bioetanol</b>
  <br>Valor estimado con la capacidad instalada de cada planta, un factor de emisión de 1,053 toneladas de CO2 por toneladas de bioetanol y una producción del 80% de la capacidad instalada.
  <br><b></b>
  <br>A partir de datos obtenidos de CAMMESA [13], se identificaron las centrales de biomasa productoras de energía eléctrica conectadas al Sistema Argentino de Interconexión (SADI) y su respectiva energía eléctrica generada (MWh). El factor de emisión se estimó en base a [17], utilizando 112.000 kg CO<sub>2</sub>/TJ por energía térmica a partir de biomasa y 40% de eficiencia eléctrica.`,
  sources: `<h3>Literatura</h3>
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
  download_text: `Descargar los datos`,
  download_csv: `Descargar las fuentes de CO₂ en Argentina (csv)`,
  download_geojson: `Descargar las fuentes de CO₂ en Argentina (geojson)`,

  biogenic_title: `Otros`,
  biogenic_header: `<h3>Fuentes biogénicas alternativas </h3>`,
  biogenic_intro: `La biomasa descentralizada ofrece una fuente complementaria de carbono biogénico con un fuerte potencial para el desarrollo de PtX en Argentina. Los flujos principales incluyen residuos de los sectores azucarero, papelero y forestal; subproductos agroindustriales del procesamiento de bovinos, porcinos y aves de corral; y neumáticos fuera de uso. Estas fuentes biogénicas fortalecen el suministro de carbono, proporcionando una corriente de CO₂ biogénico duradera y sostenible. En conjunto, casi 9.000 kilotoneladas de CO₂ por año podrían derivarse potencialmente de ellas. En base a la disponibilidad actual de biomasa, el carbono biogénico derivado de estos sectores es estimado:`,  
  biogenic_figure1_text: `Se proporcionan a continuación las descripciones de las categorías. Más detalles sobre las fuentes de datos y los cálculos pueden consultarse en la sección de Metodología`,
  biogenic_sugar: `<h4>Industria Azucarera</h4>La industria azucarera en Argentina produjo aproximadamente .000 kilotoneladas de azúcar en 2024 [1]. La molienda de caña de azúcar genera bagazo, un residuo fibroso que funciona como fuente de carbono biogénico. Cada año son generadas cerca de 7.400 kilotoneladas de bagazo, donde la gran mayoría de los ingenios del país lo utilizan como combustible con fines de electricidad para sus propias operaciones [2]. La captura de las emisiones asociadas a esta actividad podría poner a disposición alrededor de <b>5.900 kilotoneladas de CO₂ biogénico</b> al año. Aproximadamente el 60% de la producción de azúcar —y por lo tanto del potencial de recuperación de CO₂— se concentra en la provincia de Tucumán, Jujuy representa el 35%, y algunos ingenios adicionales se encuentran ubicados en Salta [1].`, 
  biogenic_paper: `<h4>Industria de celulosa y papel</h4> El sector de celulosa y papel emite alrededor de 2.283 kilotoneladas de CO₂ por año según las plantas presentadas en el mapa. Aunque estas corrientes mezclan carbono de origen fósil y biogénico, la fracción biogénica suele ser dominante, y oscila entre el 70% y el 90% del total de emisiones. Esto implica que hasta <b>2.000 kilotoneladas de CO₂ biogénico</b> podrían estar disponibles anualmente para captura en las plantas de celulosa y papel de Argentina. El licor de cocción agotado, un residuo biogénico del proceso, se concentra y quema típicamente en calderas de recuperación para la generación de vapor y electricidad [3]. Dentro del CO₂ biogénico total del sector, las mayores participaciones provienen de plantas que emplean procesos de cocción química, en particular Arauco Argentina S.A. y Celulosa Argentina S.A. [4]. `,
  biogenic_forestry: `<h4>Industria Forestal</h4>La industria forestal en Argentina procesa alrededor de 11 millones de m³ de rollizos cada año. Además de la madera aserrada primaria, aproximadamente el 60% de la materia prima ingresada a los aserraderos se convierte en subproductos, incluyendo corteza, astillas de madera, aserrín y costaneros. Estos subproductos se valorizan de forma amplia, con aproximadamente un 17% destinado a la producción de energía. Cerca de la mitad de ese volumen alimenta algunas de las centrales de biomasa cuyas emisiones ya están inventariadas en el mapa. El resto se utiliza in situ para la generación de calor y electricidad, lo que convierte a los aserraderos en una fuente significativa de CO₂ biogénico. Según esto, se estima que aproximadamente 580.000 m³ de residuos de madera son quemados como combustible en aserraderos alrededor del país, generando cerca de <b>550 kilotoneladas de CO₂ biogénico</b> potencialmente recuperable. Aproximadamente, el 40,6% de la industria del aserrado se concentra en la provincia de Misiones, con una fuerte actividad también en Corrientes y una participación notable en Entre Ríos [5].`,
  biogenic_ELT: `<h4>Neumáticos fuera de uso (NFU)</h4>El uso de combustibles recuperados, tales como los neumáticos fuera de uso (NFU), ha cobrado importancia por razones tanto económicas como ambientales. En promedio, los neumáticos contienen entre 60–70 % de carbono en masa; según el tipo de vehículo, entre 18–34 % de ese carbono es intrínsecamente biogénico debido a componentes de origen biológico como el caucho natural [6]. Cuando los NFU se valorizan energéticamente, los gases de combustión resultantes contienen una fracción biogénica de CO₂ que puede cuantificarse y potencialmente recuperarse para PtX. En Argentina se generan en promedio 178,5 kilotoneladas de NFU por año [7], lo que representa aproximadamente <b>111,3 kilotoneladas de CO₂ biogénico potencial</b>. La mayor contribución de NFU proviene de la Provincia de Buenos Aires, que genera alrededor del 38 % de los neumáticos no reutilizables, seguida por Córdoba con el 24%. Otras contribuciones destacadas provienen de CABA, Santa Fe, Mendoza, Entre Ríos y Tucumán. Las provincias restantes aportan cada una aproximadamente entre 1–2 % [8].`,
  biogenic_meat: `<h4>Procesamiento de carne y aves de corral</h4>Los subproductos agroindustriales asociados al procesamiento de carnes y aves en Argentina muestran un fuerte potencial para la producción de biogás—y, con él, de CO₂ biogénico. La faena y el procesamiento de bovinos, porcinos y aves generan grandes volúmenes de efluentes altamente contaminantes. Tratar estos deshechos mediante digestión anaerobia proporciona una solución de gestión de residuos al tiempo que se produce biogás. El potencial actual se estima en 43,3 millones de m³ de biogás por año. Suponiendo un 40% de CO₂ en el gas, esto correspondería a 17,3 millones de m³ o <b>34,2 kilotoneladas de CO₂ biogénico</b>. Si también se contabiliza el CO₂ adicional procedente de la combustión del biometano, el CO₂ biogénico total potencialmente recuperable podría <b>ascender a 80,7 kilotoneladas</b>. En la actualidad, la región económica central concentra la mayor parte de la actividad del sector y, por extensión, el mayor potencial de biogás y CO₂ biogénico. Dentro de esta región, la provincia de Buenos Aires representa alrededor del 44% de la participación [9].`,

  biogenic_methodology: `<h3>Metodología</h3>Este resumen presenta únicamente una estimación del máximo carbono biogénico potencialmente disponible a partir de las fuentes listadas, con el fin de ofrecer una visión general y permitir comparaciones de magnitud. La determinación de cantidades precisas requeriría una evaluación detallada que considere la composición de los insumos, las rutas de conversión, los rendimientos y datos específicos de cada sitio.
<h4>Industria azucarera</h4>
Los datos sobre consumo de materia prima, producción de azúcar y distribución geográfica se obtuvieron del Centro Azucarero Argentino [1]. A partir de esas cifras se derivó la generación total de bagazo y se calculó el CO₂ asociado a su combustión.
<h4>Industria de celulosa y papel</h4>
Los valores de producción de las plantas reportados en el mapa se usaron como valores de partida para los cálculos. El proceso de pulpeo en cada sitio se identificó a partir del Relevamiento de la Industria de la Celulosa y el Papel 2023 de la Dirección Nacional de Desarrollo Foresto-Industrial (DNDFI) [4]. Según el tipo de proceso y los rendimientos teóricos correspondientes, se estimó el carbono residual en las corrientes de desecho y se calcularon las emisiones asociadas de CO₂.
<h4>Industrial forestal </h4>
Los datos necesarios se obtuvieron del Relevamiento de la Industria del Aserrado 2023 de la Dirección Nacional de Desarrollo Foresto-Industrial (DNDFI). A partir del volumen de subproductos provenientes del procesamiento de rollizos (aserrado) y de los porcentajes reportados destinados a generación energética in situ, se calculó la cantidad de combustible de madera y, a partir de ella, se derivó el CO₂ máximo potencial. Los datos sobre la distribución geográfica de las actividades de aserrado también se obtuvieron de la misma fuente.
<h4>Neumáticos fuera de uso (NFU)</h4>
Se asumió que la fracción biogénica del carbono total en los NFU es del 22% para neumáticos de automóviles y del 32% para neumáticos de camión [6]. Los totales de NFU por tipo generados en Argentina se tomaron del informe presentado por Ministerio de Ambiente de la Provincia de Buenos Aires [7]. La distribución geográfica de los NFU se aproximó utilizando datos regionales de registro de vehículos [8].
<h4>Procesamiento de carne y aves de corral</h4>
Los datos sobre la generación de residuos de biomasa en la faena y el procesamiento de carne y aves, así como los correspondientes potenciales regionales de producción de biogás, se obtuvieron del Informe Anual sobre el Potencial de Biogás a partir de la Faena de Bovinos, Porcinos y Aves del Ministerio de Economía de la Nación [9]. Asumiendo que el biogás producido contiene 60% CH₄ y 40% CO₂ en volumen, se estimó el contenido de CO₂ en el gas y se calculó el CO₂ adicional proveniente de la combustión del metano.
`,

biogenic_sources: `
  <h3>Sources</h3>
  [1] Centro Azucarero Argentino. “Producción de azúcar 2020–2029.” Accessed: Sep. 26, 2025. [Online]. 
  Available: <a href="https://centroazucarero.com.ar/produccion-de-azucar-2020-2029/" target="_blank">https://centroazucarero.com.ar/produccion-de-azucar-2020-2029/</a>
  <br>[2] Amores, M. J., Mele, F. D., Jiménez, L., & Castells, F. “Life cycle assessment of fuel ethanol from sugarcane in Argentina.” The International Journal of Life Cycle Assessment, vol. 18, pp. 1344–1357, 2013.
  <br>[3] Gobierno de la República Argentina. “Plan de acción nacional de industria y cambio climático.” Accessed: Sep. 26, 2025. [Online]. 
  Available: <a href="https://www.argentina.gob.ar/sites/default/files/plan_de_accion_nacional_de_industria_y_cambio_climatico.pdf" target="_blank">https://www.argentina.gob.ar/sites/default/files/plan_de_accion_nacional_de_industria_y_cambio_climatico.pdf</a>
  <br>[4] Secretaría de Bioeconomía (Argentina), Dirección Nacional de Desarrollo Foresto Industrial (DNDFI). “Relevamiento de la Industria de la Celulosa y el Papel 2023.” Accessed: Sep. 26, 2025. [Online]. 
  Available: <a href="https://www.magyp.gob.ar/sitio/areas/desarrollo-foresto-industrial/foresto-industria/_archivos/000001_Informes%20Anuales%20de%20la%20Industria//000004_2023/000000_Relevamiento%20de%20la%20Industria%20de%20la%20Celulosa%20y%20Papel%202023.pdf" target="_blank">https://www.magyp.gob.ar/sitio/areas/desarrollo-foresto-industrial/foresto-industria/_archivos/000001_Informes%20Anuales%20de%20la%20Industria//000004_2023/000000_Relevamiento%20de%20la%20Industria%20de%20la%20Celulosa%20y%20Papel%202023.pdf</a>
  <br>[5] Secretaría de Bioeconomía (Argentina), Dirección Nacional de Desarrollo Foresto Industrial (DNDFI). “Relevamiento de la Industria del Aserrado 2023.” Accessed: Sep. 26, 2025. [Online]. 
  Available: <a href="https://www.magyp.gob.ar/sitio/areas/desarrollo-foresto-industrial/foresto-industria/_archivos/000001_Informes%20Anuales%20de%20la%20Industria//000004_2023/000000_Relevamiento%20de%20la%20Industria%20del%20Aserrado%202023.pdf" target="_blank">https://www.magyp.gob.ar/sitio/areas/desarrollo-foresto-industrial/foresto-industria/_archivos/000001_Informes%20Anuales%20de%20la%20Industria//000004_2023/000000_Relevamiento%20de%20la%20Industria%20del%20Aserrado%202023.pdf</a>
  <br>[6] Saiz-Rodríguez, L., Bermejo-Muñoz, J. M., & Zambon, A. “Determination of the Biomass Content of End-of-Life Tyres.” In: Biomass Volume Estimation and Valorization for Energy. InTechOpen, 2017.
  <br>[7] Ministerio de Ambiente de la Provincia de Buenos Aires. “Neumáticos fuera de uso en la provincia de Buenos Aires. Hacia una economía circular.” (Oct. 2022). Accessed: Sep. 26, 2025. [Online]. 
  Available: <a href="https://www.ambiente.gba.gob.ar/pdfs/009_INFORME%20NEUMATICOS_OCT22_comprimido.pdf" target="_blank">https://www.ambiente.gba.gob.ar/pdfs/009_INFORME%20NEUMATICOS_OCT22_comprimido.pdf</a>
  <br>[8] Dirección Nacional del Registro de la Propiedad del Automotor (DNRPA). “Boletines Estadísticos – Parque automotor por provincia (2023).” Accessed: Sep. 26, 2025. [Online]. 
  Available: <a href="https://www.dnrpa.gov.ar/portal_dnrpa/estadisticas/rrss_tramites/tram_parque.php?anio=2023&origen=portal_dnrpa" target="_blank">https://www.dnrpa.gov.ar/portal_dnrpa/estadisticas/rrss_tramites/tram_parque.php?anio=2023&origen=portal_dnrpa</a>
  <br>[9] Secretaría de Bioeconomía (Argentina), Coordinación de Bioenergía. “Informe anual de potencial de biogás 2024 – Faena de bovinos, porcinos y aves.” Accessed: Sep. 26, 2025. [Online]. 
  Available: <a href="https://www.magyp.gob.ar/sitio/areas/bioenergia/biogas/_archivos/000000_Informes%20anuales%20de%20potencial%20de%20biog%C3%A1s/240800_Informe%20anual%20de%20potencial%20de%20biog%C3%A1s%20-%20Faena%20de%20bovinos,%20porcinos%20y%20aves.pdf" target="_blank">https://www.magyp.gob.ar/sitio/areas/bioenergia/biogas/_archivos/000000_Informes%20anuales%20de%20potencial%20de%20biog%C3%A1s/240800_Informe%20anual%20de%20potencial%20de%20biog%C3%A1s%20-%20Faena%20de%20bovinos,%20porcinos%20y%20aves.pdf</a>
`,

  img_1: "img/Arg_ES_1.png",
  img_2: "img/Arg_ES_2.png",
  img_3: "img/Arg_ES_3.png",
  img_4: "img/Arg_ES_4.png",
  img_5: "img/Arg_ES_5.png",
  img_6: "img/Arg_ES_6.png",

  disclaimer_title: `Datos, licencias y privacidad`,
  map_programming: `<h3>Elaboración del mapa</h3>Este mapa fue elaborado por Dinh Du Tran (DECHEMA e.V.) con información recolectada por DECHEMA y la GIZ Argentina.`,
  contact: `<h3>Contacto</h3>
  Verónica Chorkulak<br>
  <a href="mailto:veronica.chorkulak@giz.de">veronica.chorkulak@giz.de</a><br>
  GIZ Argentina<br><br>
  
  Sebastián Murúa<br>
  <a href="mailto:sebastian.murua@giz.de">sebastian.murua@giz.de</a><br>
  GIZ Argentina<br><br>
  
  Luisa López<br>
  <a href="mailto:luisa.lopez@dechema.de">luisa.lopez@dechema.de</a><br>
  DECHEMA e.V.`,
  disclaimer: `<h3>Exoneración de responsabilidad.</h3> El objetivo de este mapa es proveer información para la investigación y para el desarrollo de proyectos de PtX.\n
  Dado que la información pública disponible sobre emisiones de CO<sub>2</sub> es limitada, en algunos casos fue necesario realizar una estimación usando un factor de emisiones asumido. Por lo tanto, el valor de emisiones presentado puede no ser totalmente coincidente con el valor real para algunas de las fuentes identificadas. \n
  Adicionalmente, este mapa no es exhaustivo, pudiendo existir fuentes que no han sido identificadas. \n
  Los socios del consorcio no se hacen responsables por la interpretación y el uso de la información provista por este mapa.`,
  legal: `<h3>Aviso legal</h3>
  Este Mapa de fuentes de CO<sub>2</sub> en Argentina ha sido publicado por el PtX Hub. El PtX Hub es una iniciativa del Gobierno Federal alemán. Está financiado principalmente por la Iniciativa Internacional sobre el Clima (IKI) y ejecutado por la GIZ (Deutsche Gesellschaft für Internationale Zusammenarbeit GmbH). Las opiniones y recomendaciones expresadas no reflejan necesariamente las posiciones de las instituciones encargantes o de la agencia ejecutora.`,
  // ...
  button_Aluminium: `Aluminio`,
  button_Steel: `Acero`,
  button_cement: `Cemento`,
  button_refinery: `Refinerías`,
  button_thermal: `Termoeléctricas Fuentes Fósiles`,
  button_ammonia: `Amoniaco`,
  button_ethylene: `Etileno`,
  button_methanol: `Metanol`,
  button_bioethanol: `Bioetanol`,
  button_biogas: `Termoeléctricas Biogás `,
  button_biomass: `Termoeléctricas Biomasa`,
  button_paper: `Celulosa y Papel`,
  table_header_industry_type: `Industria`,
  table_header_total_emissions: `Emisiones totales (kilotoneladas)`,
  table_header_number_entries: `Número de plantas`,
intro_title: `Guía de introducción`,
show_intro_again: `Mostrar la guía de nuevo`,

    tour: {
    steps: [
      {
        title: "Bienvenido/a",
        intro:`¡Este mapa del PtX Hub muestra las fuentes de carbono en Sudáfrica! Si quieres, puedes seguir esta breve introducción para ver las funciones principales o saltarte la guía.<br>
        <button id="set-cookie-no-tour" onclick="setCookieNoTour()" class="introjs-button" title="Esta es la única cookie usada en este sitio. Si no quieres usar cookies, la guía se mostrará en cada recarga. Haz clic fuera de la guía para cerrarla."><p>No mostrar la guía de nuevo</p><p style="font-size: x-small; color: #746427;">&#9432; Esto establecerá una cookie.</p></button>
        <hr><img src="img/Tutorial_ESP.png" />
        El mapa muestra fuentes de CO₂ biogénicas e industriales. Aunque el CO₂ emitido por plantas industriales es alto hoy, a largo plazo las fuentes biogénicas sostenibles merecen más atención.`
      },
      { element: "#emitter-tab-li", intro: "En esta pestaña puedes filtrar distintos tipos de fuentes de carbono.<br>Se dividen en industriales y biogénicas.", position: "right" },
      { element: "#biogenic-sources-tab-li", intro: "Las fuentes puntuales biogénicas disponibles no son la única fuente de carbono biogénico para PtX. Aquí puedes conocer más sobre fuentes descentralizadas adicionales, aunque no se muestren en el mapa.", position: "right" },
      { element: "#data-tab-li", intro: "Aquí se explican los datos utilizados y la metodología.", position: "right" },
      { element: "#info-tab-li", intro: "Aquí encuentras información sobre el mapa y los datos. <br><br>También puedes cambiar el idioma aquí.", position: "right" },
      { element: "#disclaimer-tab-li", intro: "Aquí verás el aviso legal y el contacto. También puedes reiniciar la guía.", },
      { title: "Cerrar", element: "#sidebar-close-sources-span", intro: "Esto cierra la barra lateral para que te concentres en el mapa." },
      { intro: "Haz clic en cualquier burbuja para ver más información.<br>¡Listo! Ahora explora el mapa." }
    ],
    showStepNumbers: false
  }
};

// Export the translations object (for use in other scripts)
window.translations_es = translations_es;


