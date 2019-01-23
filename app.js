const express = require('express'),
  bodyParser = require('body-parser'),
  five = require('johnny-five'),
  SerialPort = require("serialport").SerialPort,
  board = new five.Board(),
  app = express(),
  listen = 3006;

  const apiRoute = require('./routes/api');

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static(__dirname + '/views'));
  app.use(express.static(__dirname + '/public'));


  app.use('/api', apiRoute);

board.on("ready", function(){
  var tempSensor = new five.Sensor.Digital(2);
  tempSensor.on("change", () => {
    console.log(tempSensor.value);
  });
})

  app.get('/', function(req, res){
    res.sendFile('index.html');
  })


app.listen(listen, function() {
  console.log('Running on ' + listen)
});
