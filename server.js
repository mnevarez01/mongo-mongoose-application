const mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;
const app = express();
const db = require("./models");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.get("/")
app.get("/stats")
app.get("/exercise?", (req, res) => {
  db.find({})
    .then(dbWorkout => res.status(200).json(dbWorkout))
    .catch(err => res.json(err))
})

app.post("/exercise?", ({ body }, res) => {
  db.create(body)
    .then(workout => res.json(workout))
    .catch(err => res.status(500).json(err))
});


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})