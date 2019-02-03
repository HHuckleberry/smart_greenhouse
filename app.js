const express = require('express'),
  bodyParser = require('body-parser'),
  five = require('johnny-five'),
  ejs = require('ejs'),
  SerialPort = require("serialport").SerialPort,
  board = new five.Board(),
  app = express(),
  listen = 3000;

const apiRoute = require('./routes/api');

let sensors = require('./firmware/sensor-list.json');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.use('/api', apiRoute);



//sensor data will need to move
var environmentData = {},
  todayEnvironment = {},
  fMin = 200,
  fMax = 0;
board.on("ready", function() {
  var multi = new five.Multi({
    controller: "SHT31D"
  });
  multi.on("change", function() {
    let c = this.thermometer.celsius,
      f = this.thermometer.fahrenheit,
      k = this.thermometer.kelvin,
      h = this.hygrometer.relativeHumidity;
      if (fMin > f) {
        fMin = f;
      } else if (fMin == '-49'){
          fMin = f;
      }
      if (fMax < f) {
        fMax = f;
      }
    todayEnvironment = {
      'max': fMax,
      'min': fMin
    }



    environmentData = {
      'temperature':{
        'celsius': c,
        'fahrenheit': f,
        'kelvin': k,
      },
      'humidity': h,
      'extreme': todayEnvironment
    }
  });
  return environmentData;
});
//console.log Sensor data. Will need to write to DB.
setInterval(function() {
  console.log(environmentData)
}, 5000)






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

app.get('/sensors', function(req, res) {
  res.send(sensors);
})

app.listen(listen, function() {
  console.log('Running on ' + listen)
});
