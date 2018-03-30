//	required node modules
var dgram = require('dgram');
// 	udp socket connection
var udp_socket;
// 	connection parameters for multicast (UDP)
var mc = {
port: 	21234,			// ptrack port
group: 	'224.0.0.1',	// standard LAN multicast address
host: 	undefined 		// undefined so node listens to all hosts
}
/**	1. create UDP listener to remote sensor **********************/

udp_socket = dgram.createSocket('udp4');

// connect to UDP group/host (host is optional)
udp_socket.bind ( mc.port, mc.host, function () {
var address = udp_socket.address();
console.log("*** LISTENING TO "+address.address+" PORT "+address.port+" ("+address.family+") ***")
// enable receiving multicast packets
udp_socket.setMulticastLoopback ( true);
// join multicast group
//udp_socket.addMembership( mc.group, mc.host );
});

udp_socket.on('message',function( msg, rinfo ) {
// convert msg to string, hack-style!
var s = JSON.parse(msg.toString());
console.log(s);
});
