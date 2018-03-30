const dgram = require('dgram');

setInterval(broadcastNew, 1000);
function broadcastNew() {
  var obj = {"header":{"seq":71251,"stamp":{"sec":1415305737,"nsec":110138944},"frame_id":"world"},"tracks": [{"id":387,"x":-0.89131,"y":2.41851,"height":1.55837,"age":29.471,"confidence":.0500193}]};
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
