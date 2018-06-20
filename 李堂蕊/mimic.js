const dgram = require('dgram');

setInterval(broadcastNew, 5000);
function broadcastNew() {
  //replace obj with your own sensor data
  var lon=[116.35402777777777];
  var lat1=[40.00293055555556];
  var lat2=[40.002202777777775];
  for(var lat2; lat2 <= lat1; lat2 += 0.0001 )
  {
	  if(j==8)
	  {
		 lon[j+1]=lon[1];
		 lat[j+1]=lat[1];
		 h[j]=h[0];
		 break;
	  }

  }
  var obj = [
	  {"longitude":lon[1], "latitude":lat[1], "height":h[0]},
	  {"longitude":lon[2], "latitude":lat[2], "height":h[1]},
	  {"longitude":lon[3], "latitude":lat[3], "height":h[2]},
	  {"longitude":lon[4], "latitude":lat[4], "height":h[3]},
	  {"longitude":lon[5], "latitude":lat[5], "height":h[4]},
	  {"longitude":lon[6], "latitude":lat[6], "height":h[5]},
	  {"longitude":lon[7], "latitude":lat[7], "height":h[6]},
	  {"longitude":lon[8], "latitude":lat[8], "height":h[7]},
	  {"longitude":lon[9], "latitude":lat[9], "height":h[8]},
  ];
 
  
  var myJSON = JSON.stringify(obj);
  const message = myJSON;
  const client = dgram.createSocket('udp4');
  client.send(message, 21234, 'localhost', (err) => {
    client.close();
 
  });
  console.log("Sent " + message + " to the wire...");
}