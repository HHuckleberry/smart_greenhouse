var db = require('../models'),
  mongoose = require('mongoose');

//api status
exports.getAPI = function(req, res) {
  if (mongoose.connection.readyState == 1) {
    fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    obj = {
      status: "Running",
      api_routes:{
      temperature: fullUrl+'/temp',
      apiKeys: fullUrl+'/keys',
      waterSchedule: fullUrl+'/schedule'}
    }
  } else {
    obj = {
      status: "offline",
      error: {
        ready_state: mongoose.connection.readyState,
        why: mongoose.connection.errors
      }
    }
  }
  res.json(obj)
}


//temp
exports.getTemp = function(req, res) {
  db.tempHum.find()
    .then(function(temp) {
      res.json(temp);
    })
    .catch(function(err) {
      res.send(err);
    })
}

exports.postTemp = function(req, res) {
  db.tempHum.create(req.body)
  console.log(req.body)
    .then(function(newTemp) {
      res.status(201).json(newTemp);
    })
    .catch(function(err) {
      res.send(err);
    })
}

//api service
exports.getKey = function(req, res) {
  db.KeyAPI.find()
    .then(function(key) {
      res.json(key);
    })
    .catch(function(err) {
      res.send(err);
    })
}

exports.postKey = function(req, res) {
  db.KeyAPI.create(req.body)
  console.log(req.body)
    .then(function(newKey) {
      res.status(201).json(newKey);
    })
    .catch(function(err) {
      res.send(err);
    })
}

//schedule
exports.getwaterSchedule = function(req, res) {
  db.waterSchedule.find()
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      res.send(err);
    })
}

exports.postwaterSchedule = function(req, res) {
  db.waterSchedule.create(req.body)
  console.log(req.body)
    .then(function(createSchedule) {
      res.status(201).json(createSchedule);
    })
    .catch(function(err) {
      res.send(err);
    })
}

//extra
exports.getTodo = function(req, res) {
  db.Todo.findById(req.params.todoId)
    .then(function(foundTodo) {
      res.json(foundTodo);
    })
    .catch(function(err) {
      res.send(err);
    })
}


exports.deleteTodo = function(req, res) {
  db.Todo.remove({
      _id: req.params.todoId
    })
    .then(function() {
      res.json({
        message: 'We deleted it!'
      });
    })
    .catch(function(err) {
      res.send(err);
    })
}

module.exports = exports;
