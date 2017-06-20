var express = require("express");
const app = express();
app.use(express.static(__dirname+ "/public"));
app.listen(4000, function(){
  console.log("Servidor encendido en el puerto 3000");
});
