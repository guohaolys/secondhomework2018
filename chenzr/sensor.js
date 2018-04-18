const dgram = require('dgram');
var obj = {"province":{"id":1,"name1":"guangdong","population":104320459}};  //初始时，全局变量obj为人口最多的省
setInterval(broadcastNew, 1000);
function broadcastNew() {
  //replace obj with your own sensor data
  /*such as some mathematical curve*/
  var myJSON = JSON.stringify(obj);
  const message = myJSON;
  const client = dgram.createSocket('udp4');
  client.send(message, 21234, 'localhost', (err) => {
    client.close();
  });
  switch(obj.province.id)    //用switch改变obj,实现省份由人口多到少显示
  {
	  case 1:
	  obj = {"province":{"id":2,"name1":"shandong","population":95792719}};
	  break;
	  case 2:
	  obj = {"province":{"id":3,"name1":"henan","population":94029939}};
	  break;
	  case 3:
	  obj = {"province":{"id":4,"name1":"sichuan","population":80417528}};
	  break;
	  case 4:
	  obj = {"province":{"id":5,"name1":"jiangsu","population":78660941}};
	  break;
	  case 5:
	  obj = {"province":{"id":6,"name1":"hebei","population":71854210}};
	  break;
	  case 6:
	  obj = {"province":{"id":7,"name1":"hunan","population":65700762}};
	  break;
	  case 7:
	  obj = {"province":{"id":8,"name1":"anhui","population":59500468}};
	  break;
	  case 8:
	  obj = {"province":{"id":9,"name1":"hubei","population":57237727}};
	  break;
	  case 9:
	  obj = {"province":{"id":10,"name1":"zhejiang","population":54426891}};
	  break;
	  case 10:
	  obj = {"province":{"id":11,"name1":"guangxi","population":46023761}};
	  break;
	  case 11:
	  obj = {"province":{"id":12,"name1":"yunnan","population":45966766}};
	  break;
	  case 12:
	  obj = {"province":{"id":13,"name1":"jiangxi","population":44567797}};
	  break;
	  case 13:
	  obj = {"province":{"id":14,"name1":"liaoning","population":43746323}};
	  break;
	  case 14:
	  obj = {"province":{"id":15,"name1":"heilongjiang","population":38313991}};
	  break;
	  case 15:
	  obj = {"province":{"id":16,"name1":"shan3xi","population":37327379}};
	  break;
	  case 16:
	  obj = {"province":{"id":17,"name1":"fujian","population":36894217}};
	  break;
	  case 17:
	  obj = {"province":{"id":18,"name1":"shan1xi","population":35712101}};
	  break;
	  case 18:
	  obj = {"province":{"id":19,"name1":"guizhou","population":34748556}};
	  break;
	  case 19:
	  obj = {"province":{"id":20,"name1":"chongqing","population":28846170}};
	  break;
	  case 20:
	  obj = {"province":{"id":21,"name1":"jilin","population":27452815}};
	  break;
	  case 21:
	  obj = {"province":{"id":22,"name1":"gansu","population":25575263}};
	  break;
	  case 22:
	  obj = {"province":{"id":23,"name1":"neimenggu","population":24706291}};
	  break;
	  case 23:
	  obj = {"province":{"id":24,"name1":"shanghai","population":23019196}};
	  break;
	  case 24:
	  obj = {"province":{"id":25,"name1":"xinjiang","population":21815815}};
	  break;
	  case 25:
	  obj = {"province":{"id":26,"name1":"beijing","population":19612368}};
	  break;
	  case 26:
	  obj = {"province":{"id":27,"name1":"tianjin","population":12938693}};
	  break;
	  case 27:
	  obj = {"province":{"id":28,"name1":"hainan","population":8671485}};
	  break;
	  case 28:
	  obj = {"province":{"id":29,"name1":"ningxia","population":6301350}};
	  break;
	  case 29:
	  obj = {"province":{"id":30,"name1":"qinghai","population":5626723}};
	  break;
	  case 30:
	  obj = {"province":{"id":31,"name1":"xizang","population":3002165}};
	  break;
	  case 31:
	  obj = {"province":{"id":1,"name1":"guangdong","population":104320459}};
	  break;
	  
  }
  console.log("Sent " + message + " to the wire...");
}
