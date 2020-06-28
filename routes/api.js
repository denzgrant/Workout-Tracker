const router = require("express").Router();
const workout = require("../models/workout.js");


router.get("/", (req, res) => {
    res.send(index.html);
});

router.get("/all", (req, res) => {
    workout.find({}, (error, data) => {
        if (error) {
            console.log(error);
            res.send(error);
        }

        console.log(data);

        res.send(data);
    });
});
module.exports = router
