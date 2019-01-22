const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/greenhouse', {useNewUrlParser: true});

mongoose.Promise = Promise;

module.exports.tempHum = require('./mongo.js');
