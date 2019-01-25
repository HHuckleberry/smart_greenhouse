var mongoose = require('mongoose');

var sensorSchema = new mongoose.Schema({
  sensor: {
    type: Date,
    default: Date.now
  },
  temp: {
      type: Number,
      required: "Missing getTemp"
  },
  humidity:{
    type: Number,
    required: "Missing humidity"
  }
})
var Temphum = mongoose.model('tempHum', tempHumSchema);

module.exports = Temphum;
