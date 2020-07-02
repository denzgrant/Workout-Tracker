const router = require("express").Router();
const Workout = require("../models");
const path = require("path");
const { db } = require("../models");


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
        console.log(data._id);
        let addDuration = [];

        //    let dur = data.reduce(function(a, b) {
        //        return a + b; 
        //    }, 0); 

        res.json(data);

    } catch (error) {

        console.log(error);

        res.send(error);
    }
});

router.get("/api/workouts/range", async (req, res) => {
    try {
        const data = await Workout.find({})
        res.json(data);

    } catch (error) {

        console.log(error);

        res.send(error);
    }
});
router.put("/api/workouts/:id", async (req, res) => {
    try {
        const data = await Workout.findOneAndUpdate(
            {
                _id: req.params.id
            },
            {
                $push: {
                    exercises: req.body


                }
            },
        );

        res.json(data);

    } catch (error) {

        console.log(error);

        res.send(error);
    }
});
router.post("/api/workouts/", async (req, res) => {
    try {
        const data = await Workout.create({});

        res.json(data);

    } catch (error) {

        console.log(error);

        res.send(error);
    }
});
module.exports = router
