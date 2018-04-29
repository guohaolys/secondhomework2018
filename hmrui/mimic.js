const dgram = require('dgram');

var xMin = -100.0;
var xMax = 100.0;
var yMin = -80.0;
var yMax = 100.0;
var zMin = -50.0;
var zMax = 50.0;
setInterval(broadcastNew, 1000);
    var x1 ;
    var y1 ;
    var z1 ;
function broadcastNew() {
  x1 = Math.floor(Math.random()*(xMax-xMin+1)+xMin);
  y1 = Math.floor(Math.random()*(yMax-yMin+1)+yMin);
  z1 = Math.floor(Math.random()*(zMax-xMin+1)+xMin);
  var obj = {"xnum":x1,"ynum":y1,"znum":z1};
  //replace obj with your own sensor data
  /*such as some mathematical curve*/
  var myJSON = JSON.stringify(obj);
  const message = myJSON;
  const client = dgram.createSocket('udp4');
  client.send(message, 21234, 'localhost', (err) => {
    client.close();
  });
  console.log("Sent " + message + " to the wire...");
}
