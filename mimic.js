const dgram = require('dgram');
var ii=0
setInterval(broadcastNew, 3000);
function broadcastNew() {
	//var x_num = Math.random()*700 + 800;
    //x_num = parseInt(x_num, 10);
	//var y_num = Math.random()*700 + 800;
    //y_num = parseInt(y_num, 10);
	var obj= {"x_num":116.3,"y_num":39.9};
	ii=ii+1;
	switch(parseInt(ii/3))
	{
		case '1':
		var obj = {"x_num":116.3,"y_num":39.9};break;
		case '2':
		var obj = {"x_num":121.3,"y_num":31.1};break;
		case '3':
		var obj = {"x_num":113.3,"y_num":23.1};break;
	}
  //BJ(x1,y1),SH(x2,y2),GZ(x3,y3)
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
