const students = require("./student");
const express = require("express");
let router = new express.Router();

router.get("/hello", (req, res) => {
    res.status(200).send("Hello world!").end();
});

router.use("/students", students);
module.exports = router;