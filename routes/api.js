const router = require("express").Router();
const Workout = require("../models/workout");

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(dbWorkout => { res.json(dbWorkout) })
    .catch(err => { res.status(500).json(err) });
});

router.get("/api//workouts", (req, res) => {
  Workout.find()
    .then(dbWorkouts => { res.json(dbWorkouts) })
    .catch(err => { res.status(500).json(err) })
})

router.get("/api/workouts/range", (req, res) => {
  Workout.find({}).limit(8)
    .then(dbWorkouts => { res.json(dbWorkouts) })
    .catch(err => { res.status(500).json(err) })
})

router.delete("/api/workouts", ({ body }, res) => {
  Workout.findByIdAndDelete(body.id)
    .then()
    .catch(err => { res.status(500).json(err) })
});