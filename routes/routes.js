const router = require("express").Router();
const Workout = require("../models");
const path = require("path");


router.get("/", (req, res) => {
    res.send(index.html);
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/api/workouts/", async (req, res) => {
    try {
        const data = await Workout.find({})

        console.log(data);
        res.json(data);

    } catch (error) {

        console.log(error);

        res.send(error);
    }
});
router.get("/api/workouts/range", async (req, res) => {
    try {
        const data = await Workout.find({})
        console.log(data);
        res.json(data);

    } catch (error) {

        console.log(error);

        res.send(error);
    }
});
router.put("/api/workouts/:id", async (req, res) => {
    try {
        const data = await Workout.update(
            {
                _id: req.params.id
            },
            {
                $set: {
                    type: req.body.type,
                    name: req.body.name,
                    duration: req.body.duration,
                    weight: req.body.weight,
                    reps: req.body.reps,
                    sets: req.body.sets,
                    distance: req.body.distance,
                }
            },
        );
        console.log(data);
        res.json(data);

    } catch (error) {

        console.log(error);

        res.send(error);
    }
});
router.post("/api/workouts/", async (req, res) => {
    try {
        const exercise = {
            type: req.body.type,
            name: req.body.name,
            duration: req.body.duration,
            weight: req.body.weight,
            reps: req.body.reps,
            sets: req.body.sets,
            distance: req.body.distance,
        }
        const data = await Workout.create(exercise);
        console.log(data); 
        res.json(data);

    } catch (error) {

        console.log(error);

        res.send(error);
    }
});
module.exports = router
