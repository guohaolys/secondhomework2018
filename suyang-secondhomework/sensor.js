const dgram = require('dgram');
var obj = {"id":1,"url":"Cesium/Apps/SampleData/models/CesiumBalloon/CesiumBalloon.glb","height":1000.0};
setInterval(broadcastNew, 5000);
function broadcastNew() {
  //replace obj with your own sensor data
  /*such as some mathematical curve*/
  var myJSON = JSON.stringify(obj);
  const message = myJSON;
  const client = dgram.createSocket('udp4');
  client.send(message, 21234, 'localhost', (err) => {
    client.close();
  switch (obj.id)
  {
	case 1:
	obj = {"id":2,"url":"Cesium/Apps/SampleData/models/CesiumGround/Cesium_Ground.glb","height":0};
	break;
	case 2:
	obj = {"id":3,"url":"Cesium/Apps/SampleData/models/CesiumMilkTruck/CesiumMilkTruck-kmc.glb","height":0};
	break;
	case 3:
	obj = {"id":4,"url":"Cesium/Apps/SampleData/models/CesiumMan/Cesium_Man.glb","height":0};
	break;
	case 4:
	obj = {"id":5,"url":"Cesium/Apps/SampleData/models/CesiumAir/Cesium_Air.glb","height":5000.0};
	break;
	case 5:
	obj = {"id":6,"url":"Cesium/Apps/SampleData/models/DracoCompressed/CesiumMilkTruck.gltf","height":0};
	break;
	case 6:
	obj = {"id":1,"url":"Cesium/Apps/SampleData/models/CesiumBalloon/CesiumBalloon.glb","height":1000.0};
	break;
	default:
	break;
  }
 
  });
  console.log("Sent " + message + " to the wire...");
}
