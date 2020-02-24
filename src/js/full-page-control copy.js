new fullpage('#fullPage', {
	autoScrolling: true, // AUTO SCROLL
	navigation: true, //NAVEGADORES LATERALES
	anchors: ['section1', 'section2', 'section3'], // Nombres default secciones
	navigationTooltips: ['Primera Sección', 'Segunda Sección', 'Tercera Sección'], // NOMBRES PARA LOS NAVEGADORES LATERALES
	showActiveTooltip: true,  // MUESTRA LA SECCIÓN ACTIVA EN EL NAV. LATERAL
	scrollingSpeed:2000, // VELOCIDAD CON QUE CAMBIA SECCIÓN
	controlArrows: false, // FLECHAS SE SOBREPONEN CON LOS LATERALES
	slidesNavigation: true, //NAVEGADOR PARTE LATERAL INFERIOR
})