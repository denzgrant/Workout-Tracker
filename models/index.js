const { Schema, model } = require('mongoose');

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now(),
    },
    exercises: [
        {
            Ex_type: String,
            name: String,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number,
        }
    ],
    versionKey: false
});

WorkoutSchema.methods.addDuration = function () {
    this.duration = {
        $sum : "$duration"
    }
    return this.duration
}

const Workout = model("Workout", WorkoutSchema);

module.exports = Workout;
