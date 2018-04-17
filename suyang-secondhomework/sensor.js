const dgram = require('dgram');

setInterval(broadcastNew, 5000);
function broadcastNew() {
  //replace obj with your own sensor data
  var lon=[-112.110693];
  var lat=[36.0994841];
  var radius=0.03;
  var toRadians=Math.PI/180.0;
  var h=[];
  var j=0;
  for(var i = 0; i <= 360; i += 45 )
  {
	  var radians=i*toRadians; //转换为弧度
	  lon[j+1]=lon[0] + (radius * 1.5 * Math.cos(radians));
	  lat[j+1]=lat[0] + (radius * Math.sin(radians));
	  h[j]=Math.floor(Math.random()*11)* 500 + 1750;//使用 Math 对象的 floor() 方法(下舍入)和 random() 来返回一个介于 0 和 11 之间的随机数：
      j++;
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
  ];
 
  
  var myJSON = JSON.stringify(obj);
  const message = myJSON;
  const client = dgram.createSocket('udp4');
  client.send(message, 21234, 'localhost', (err) => {
    client.close();
 
  });
  console.log("Sent " + message + " to the wire...");
}
