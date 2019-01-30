var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var userSchema = new mongoose.Schema({
  username: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
  },
  password:{
    type: String,
    required: true,
    default: "local",
  },
});


userSchema.plugin(uniqueValidator, { type: 'mongoose-unique-validator' });
var Users = mongoose.model('Users', userSchema);

Users.createIndexes();

module.exports = Users;
