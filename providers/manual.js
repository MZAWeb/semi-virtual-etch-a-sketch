module.exports = {

	init:function ( socket ) {

		var i, h;

		for ( h = 0; h < 3; h++ ) {
			var topPadding = 256;
			var side = 64;
			var start = h * side * 2;
			var end = start + side;

			for ( i = topPadding; i < side + topPadding; i++ ) {
				socket.emit( "message", 'Vertical: ' + i.toString() );
			}

			for ( i = start; i < end; i++ ) {
				socket.emit( "message", 'Horizontal: ' + i.toString() );
			}

			for ( i = side + topPadding; i > topPadding; i-- ) {
				socket.emit( "message", 'Vertical: ' + i.toString() );
			}

			for ( i = end; i > start; i-- ) {
				socket.emit( "message", 'Horizontal: ' + i.toString() );
			}

			for ( i = side + topPadding; i > topPadding; i-- ) {
				socket.emit( "message", 'Vertical: ' + i.toString() );
			}

			/* /SQUARE */

		}


	}

};

