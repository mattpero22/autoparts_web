const express = require('express');
const autopartsRouter = express.Router();
const Autopart = require("../models/autopart.js")


//INDUCES
////////////////////////INDEX ////////////////////////
autopartsRouter.get("/", async (req, res) => {
    try {
        res.json(await Autopart.find({}));
    }
    catch (error) {
        res.status(400).json(error);
    }
});


//////////////////////// NEW ////////////////////////
autopartsRouter.post("/", async (req, res) => {
    try {
        res.json(await Autopart.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});


module.exports = autopartsRouter;
