const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/greenhouse', {useNewUrlParser: true});

mongoose.Promise = Promise;

module.exports.tempHum = require('./temperature.js');
module.exports.KeyAPI = require('./keyapi.js');
module.exports.waterSchedule = require('./schedule.js')
