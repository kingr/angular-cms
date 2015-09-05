$( document ).ready( function () {
		
		// ----------------------
		// SLIDER INIT
		// ---------------------- 
		$( '.slider' ).slick( {
			autoplay  	    : true,
			pauseOnHover    : false
		} );
		
		// ----------------------
		// NEXT BUTTON
		// ---------------------- 
		$( '.sliderNext' ).click( function () {
			$( '.slider' ).slick( 'slickNext' );
		} );
	
		// ----------------------
		// PREVIOUS BUTTON
		// ---------------------- 
		$( '.sliderPrev' ).click( function () {
			$( '.slider' ).slick( 'slickPrev' );
		} );

		console.log('fire js!');
});
