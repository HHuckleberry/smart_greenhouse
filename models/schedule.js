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

var ScheduleSchema = new mongoose.Schema({
  user_id:{type:Number, required:"UserId is required."},
  scheduled:{type:Boolean, default: true},
  method: {
    type: String, required: "Scheduling method required"
  },
  days:dateSchema
})
var Schedule = mongoose.model('Schedule', ScheduleSchema);

module.exports = Schedule;
