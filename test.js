var bbp = require( "./bbp" );

var pi = bbp.bbp(1,16,8,[4,0,0,-2,-1,-1,0,0]);

console.log( "pi at position 1 is : " + pi( 1 ) );
