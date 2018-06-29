const dgram = require('dgram');

setInterval(broadcastNew, 1000);
function broadcastNew() {
	var Sin ={
		"w":2,         //描点宽
		"h":2,         //描点高
		"width":900,   //画图区域宽
		"height":200,  //画图区域高
		"wave":2,      //波长
		"color":"red" //颜色
	}

  var myJSON = JSON.stringify(Sin); 
  const message = myJSON;
  
  const client = dgram.createSocket('udp4');
  client.send(message, 21234, 'localhost', (err) => {
    client.close();
  });
  console.log("Sent " + message + " to the wire...");
}
