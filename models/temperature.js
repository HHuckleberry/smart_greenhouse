var mongoose = require('mongoose');

var environmentSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: "user_id is required to store data"
  },
  date: {
    type: Date,
    default: Date.now
  },
  temperature: {
      type: Number,
      required: "Missing getTemp"
  },
  humidity:{
    type: Number,
    required: "Missing humidity"
  }
})
var Environment = mongoose.model('Environment', environmentSchema);

module.exports = Environment;
