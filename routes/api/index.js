var express = require('express');
var router = express.Router();
var db = require("../../models");
var helpers = require("../../helpers/api");

router.route('/')
 .get(helpers.getTemp)
 .post(helpers.postTemp)
//
router.route('/keys')
  .get(helpers.getKey)
  .post(helpers.postKey)

  router.route('/schedule')
    .get(helpers.getwaterSchedule)
    .post(helpers.postwaterSchedule)
// router.route('/:todoId')
//   .get(helpers.getTodo)
//   .put(helpers.updateTodo)
//   .delete(helpers.deleteTodo)

module.exports = router;
