var express = require('express');
var router = express.Router();
var db = require("../../models");
var helpers = require("../../helpers/api");

router.route('/')
  .get(helpers.getAPI)
router.route('/users')
  .get(helpers.getUsers)
  .post(helpers.postUsers)
router.route('/environment')
 .get(helpers.getEnvironment)
 .post(helpers.postEnvironment)
//
router.route('/keys')
  .get(helpers.getKey)
  .post(helpers.postKey)

  router.route('/schedule')
    .get(helpers.getSchedule)
    .post(helpers.postSchedule)
// router.route('/:todoId')
//   .get(helpers.getTodo)
//   .put(helpers.updateTodo)
//   .delete(helpers.deleteTodo)

module.exports = router;
