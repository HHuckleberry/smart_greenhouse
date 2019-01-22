var mongoose = require('mongoose');

var tempHumSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  temp: {
    type: Number,
    required: "Missing Temperature"
  },
  humidity:{
    type: Number,
    required: "Missing humidity"
  }
})
var Todo = mongoose.model('tempHum', tempHumSchema);

module.exports = tempHum;
