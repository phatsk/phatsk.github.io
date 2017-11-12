document.addEventListener('DOMContentLoaded', function(){
	function makeColor( low, high ) {
        // Make some colors!
        var colorMin = 100;
        var colorMax = 255;

		var x;
		var colors = [];
		low  = low || colorMin;
		high = high || colorMax;

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

    function changeBg() {
        document.body.style.backgroundColor = makeColor(170,255);
    }

    changeBg();
});
