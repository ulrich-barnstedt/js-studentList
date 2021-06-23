const express = require("express");
const student = require("../schemas/student");
let router = new express.Router();

router.post("/", (req, res) => {
    student.create(req.body, (err, doc) => {
        if (err) return res.status(400).send(err.message).end();

        res.send(doc).status(201).end();
    })
})

router.get("/:id", (req, res) => {
    student.findOne({_id: Number(req.params.id)}, (err, doc) => {
        if (err) return res.status(400).send(err.message).end();
        if (!doc) return res.status(404).end();

        res.status(200).send(doc).end();
    });
});

router.get("/", (req, res) => {
    student.find({}, (err, docs) => {
        if (err) return res.status(400).send(err.message).end();

        res.status(200).send(docs).end();
    })
});

router.delete("/", ((req, res) => {
    if (!req.body.id) return res.send("No ID provided.").status(400).end();
    student.deleteOne({_id : req.body.id}, (err, resv) => {
        if (err) return res.status(400).send(err.message).end();
        if (resv.deletedCount < 1) return res.status(404).end();

        res.status(204).end();
    })
}))

module.exports = router;