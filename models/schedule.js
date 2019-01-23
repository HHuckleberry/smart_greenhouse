var mongoose = require('mongoose');
var onSchema = new mongoose.Schema({
  water_start:[],
  length: Number
})

var dateSchema = new mongoose.Schema({
  monday:{onSchema},
  tuesday:{onSchema},
  wednesday:{onSchema},
  thursday:{onSchema},
  friday:{onSchema},
  saturday:{onSchema},
  sunday:{onSchema}
})

var waterScheduleSchema = new mongoose.Schema({
  scheduled:{type:Boolean, default: true},
  method: {
    type: String, required: "Scheduling method required"
  },
  days: {
    type:[dateSchema]
  }
})
var waterSchedule = mongoose.model('waterScheduleSchema', waterScheduleSchema);

module.exports = waterSchedule;
