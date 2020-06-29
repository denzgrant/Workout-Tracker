const router = require("express").Router();
const db = require("../models");
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


router.get("/api/exercise", async (req, res) => {
    try {
        const data = await db.find({});

        res.json(data);

    } catch (error) {

        console.log(error);

        res.send(error);
    }
});
module.exports = router
