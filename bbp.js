var bignum = require( "bigint" );

exports.bbp = function( s, b, m, a ){

	return function( k ){
		var self = this;

		// Debugger statement
		['s','b','m','a','k'].forEach( function( v ){
			console.log( v + ": " + eval(v) );
		} );

		var z = bignum( "1" ).div( bignum( "16" ).pow( k ) );

		console.log( "Got here :" + z.toString() );

		return 1;
	}
}
