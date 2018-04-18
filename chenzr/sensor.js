const dgram = require('dgram');

setInterval(broadcastNew, 1000);
function broadcastNew() {
  var obj = {"guangdong":{"id":1,"name1":"guangdong","population":104320459}};
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
