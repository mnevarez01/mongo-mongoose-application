const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: Date,
  exercises: [
    {
      type: String,
      name: String,
      distance: Number,
      weight: Number,
      reps: Number,
      sets: Number
    }
  ]
},
  {
    toJSON: {
      virtual: true
    }
  })
// WorkoutSchema.methods.totalDuration = function () {
//   this.totalDuration = this.duration * this.reps
//   return this.totalDuration
// }
WorkoutSchema.virtual("Total Duration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
})

const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout;