const express = require('express');
const autopartsRouter = express.Router();
const Autopart = require("../models/autopart.js")

//INDUCES
////////////////////////INDEX ////////////////////////
autopartsRouter.get("/autoparts", async (req, res) => {
    try {
        res.json(await Autopart.find({}));
    }
    catch (error) {
        res.status(400).json(error);
    }
});


//////////////////////// NEW ////////////////////////
app.post("/autoparts", async (req, res) => {
    try {
        res.json(await People.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

//////////////////////// DELETE ////////////////////////


//////////////////////// UPDATE ////////////////////////


//////////////////////// CREATE ////////////////////////


//////////////////////// EDIT ////////////////////////


//////////////////////// SHOW ////////////////////////////


module.exports = {

}
