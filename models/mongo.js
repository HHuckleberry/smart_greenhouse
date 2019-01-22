var mongoose = require('mongoose');

var tempHumSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  temp: {
    celcius:{
      type: Number,
      required: "Missing getTemp"
    },
    fahrenheit: {
      type: Number,
    }
  },
  humidity:{
    type: Number,
    required: "Missing humidity"
  }
})
var Temphum = mongoose.model('tempHum', tempHumSchema);

module.exports = Temphum;
