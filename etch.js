var fs = require( "fs" );
var url = require( "url" );


/* Create the server in the port 9000 */
var http = require( "http" ).createServer(function ( req, res ) {
		var request = url.parse( req.url, false );
		var filename = request.pathname;

		if ( filename == "/" )
			filename = "/index.html";

		/* Append the frontend folder */
		filename = 'frontend' + filename;

		fs.readFile( filename, function ( err, data ) {
			/* Any error on reading the file? */
			if ( err ) {
				if ( err.errno == 34 )  // File not found
					res.writeHead( 404 );
				else
					res.writeHead( 500 );
				res.end();
				return;
			}

			res.writeHead( 200 );
			res.write( data );
			res.end();
		} );
	}
).listen( 9000 );


var io = require( "socket.io" ).listen( http );

io.set('log level', 1);

io.sockets.on( "connection", function ( socket ) {
	// On a new Socket.io connection, load the data provider we want. For now, just Arduino.
	var $provider = require( './providers/arduino.js' ).init( socket );
} );

