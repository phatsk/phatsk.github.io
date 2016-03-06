document.addEventListener('DOMContentLoaded', function(){
	// Make some colors!
	document.body.style.backgroundColor = makeColor(170,255);

	var colorMin = 0;
	var colorMax = 255;

	function makeColor( low, high ) {
		var colors = [];
		var x;
		low  = low || 0;
		high = high || 255;

		if ( low < colorMin || high > colorMax ) {
			return Math.ceil( Math.random() * colorMax );
		}

		for ( i = 3; i--; ) {
			x = low;

			do {
				x = Math.ceil( Math.random() * high );
			} while( x < low || x > high );

			colors.push( x );
		}

		return 'rgb(' + colors.join(',') + ')';
	}
});
