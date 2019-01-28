var mongoose = require('mongoose');

var userAPI = new mongoose.Schema({
  username: {
    type: String,
    default: "local"
  }
})
var Users = mongoose.model('user', userAPI);

module.exports = Users;
