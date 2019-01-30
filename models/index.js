const mongoose = require('mongoose'),
      uniqueValidator = require('mongoose-unique-validator');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/greenhouse', {useNewUrlParser: true, useCreateIndex: true});

mongoose.Promise = Promise;

module.exports.Users = require('./user.js')
module.exports.Environment = require('./temperature.js');
module.exports.Sensor = require('./sensors.js');
module.exports.Keys = require('./keys.js');
module.exports.Schedule = require('./schedule.js')
