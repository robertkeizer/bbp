exports.bbp = function( s, b, m, a ){

	return function( k ){
		var self = this;

		// Debugger statement
		['s','b','m','a','k'].forEach( function( v ){
			console.log( v + ": " + eval(v) );
		} );

		//TODO

		return 1;
	}
}
