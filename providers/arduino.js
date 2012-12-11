
var serial = require( "serialport" );
var SerialPort = serial.SerialPort;

// Replace with the device name in your machine.
var portName = "/dev/cu.usbmodem1421";

var sp = new SerialPort( portName, {
	baudrate:9600,
	parser  :serial.parsers.readline( "\n" )
} );

module.exports = {

	init:function ( socket ) {

		/* When we get a new line from the arduino, send it to the browser via this socket */
		sp.on( "data", function ( data ) {
			console.log( data );
			socket.emit( "message", data.toString() );
		} );

	}

};

