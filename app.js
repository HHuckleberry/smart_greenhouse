const express = require('express'),
  bodyParser = require('body-parser'),
  five = require('johnny-five'),
  ejs = require('ejs'),
  SerialPort = require("serialport").SerialPort,
  board = new five.Board(),
  app = express(),
  listen = 3006;

const apiRoute = require('./routes/api');

let sensors = require('./firmware/sensor-list.json');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));


board.on("ready", function() {
  var tempSensor = new five.Sensor.Digital(2);
  tempSensor.on("change", () => {
    console.log(tempSensor.value);
  });
})
app.use('/api', apiRoute);

// routes - need to refactor and package
app.get('/', function(req, res) {
  let obj = {
    subheading: 'Monitoring'
  };
  res.render('index', {
    obj: obj
  });
})
app.get('/settings', function(req, res) {
  let obj = {
    subheading: 'Settings'
  };
  res.render('settings', {
    obj: obj,
    sensors: sensors
  });
})

app.get('/schedule', function(req, res) {
  let obj = {
    subheading: 'Schedule'
  };
  res.render('schedule', {
    obj: obj

  });
})

app.get('/sensors', function(req, res){
  res.send(sensors);
})

app.listen(listen, function() {
  console.log('Running on ' + listen)
});
