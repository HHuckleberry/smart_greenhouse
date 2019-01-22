var mongoose = require('mongoose');

var KeyAPISchema = new mongoose.Schema({
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
var KeyAPI = mongoose.model('KeyAPI', KeyAPISchema);

module.exports = KeyAPI;
