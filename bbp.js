exports.bbp = function( s, b, m, a ){
	return function( k ){
		var self = this;

		// Debugger statement
		['s','b','m','a','k'].forEach( function( v ){
			console.log( v + ": " + eval(v) );
		} );


		var part1 = 1/Math.pow(b,k);
		console.log( "part1 is " + part1 );
		
		var part2 = [ ];
		for( var j=0; j<m; j++ ){
			part2.push( a[j] / Math.pow( ( ( m*k) + j ), s ) );
			console.log( "part2[" + j + "] = " + part2[j] );
		}

		/*
		var _ret = 0;
		for( var j=0; j<m; j++ ){
			console.log( "a[j] is " + a[j] );
			console.log( "mk is " + (m*k) );
			var mk = (m*k);
			console.log( "j is " + j );
			_ret = _ret * ( a[j] / Math.pow((mk+j),s) );
		}

		return (1 / Math.pow(b,k)) * _ret;
		*/
		return 1;
	}
}
