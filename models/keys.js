var mongoose = require('mongoose');

var KeyAPISchema = new mongoose.Schema({
  user_id:{
    type: Number,
    required: "UserId is needed to save data"
  },
  api_key: {
    type: String,
    required: "Valid API Key required."
  },
  domain: {
    type: String,
  },
  service:{
    type: String,
    required: "Service is required."
  }
})
var Keys = mongoose.model('Keys', KeyAPISchema);

module.exports = Keys;
