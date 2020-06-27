const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

app.get("/", (req, res) => {
    res.send(index.html);
});

app.get("/exercise", (req, res) => {
    res.send(exercise.html);

});
app.get("/api/workouts", (req, res) => {
    db.workout.find({}, (error, data) => {
        if (error) {
            console.log(error);
            res.send(error);
        }

        console.log(data);

        res.send(data);
    });
});