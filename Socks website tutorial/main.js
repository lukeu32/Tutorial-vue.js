var app= new Vue({ //the vue instance. It is created by passing an options object into it.
	el: '#app', //Instancja Vue jest następnie podłączana do wybranego elementu. Innymi słowy, aktywujemy Vue na div z identyfikatorem id appustawiając '``#app``'jako element ( el), do którego podłączona jest nasza instancja.
	data: { //Instancja Vue ma miejsce na dane we swojej właściwości data.
		product: 'Socks' //przykład deklaracji zniennej
	}
})