const { Schema, model } = require('mongoose'); 

const WorkoutSchema = new Schema({
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
            sets: Number,
            distance: Number,
        }
    ]
});

const Workout = model("Workout", WorkoutSchema);

module.exports = Workout;
