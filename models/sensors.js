var mongoose = require('mongoose');

var sensorSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: "user_id is required to store data"
  },
  sensor: {
    type: String,
    required: "Sensor is needed"
  },
  type: {
      type: String,
      required: "Sensor Type is needed"
    }
})
var Sensor = mongoose.model('Sensor', sensorSchema);

module.exports = Sensor;
