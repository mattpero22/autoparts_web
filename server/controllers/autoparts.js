const express = require('express');
const { prependOnceListener } = require('../models/autopart.js');
const autopartsRouter = express.Router();
const Autopart = require("../models/autopart.js")


//INDUCES
// index
autopartsRouter.get("/", async (req, res) => {
    try {
        res.json(await Autopart.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});


// new
autopartsRouter.post("/", async (req, res) => {
    try {
        res.json(await Autopart.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

// delete
autopartsRouter.delete("/:id", async (req, res) => {
    try {
        res.json(await Autopart.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});

// update
autopartsRouter.put("/:id", async (req, res) => {
    try {
        res.json(await Autopart.findByIdAndUpdate(req.params.id, req.body, { new: true }));
    } catch (error) {
        res.status(400).json(error);
    }
});

//show
autopartsRouter.get("/:id", async (req, res) => {
    try {
        res.json(await Autopart.findById(req.params.id));
    } catch (error) {
        res.status(400).json(error)
    }
});




module.exports = autopartsRouter;
