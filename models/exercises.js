const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExercisesSchema = new Schema({
    day: {
        type: Date,
    },
    exercises: [
        {
            type: String,
            name: String,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number
        }
    ]
});

const Exercises = mongoose.model("Exercises", ExercisesSchema);

module.exports = Exercises;
