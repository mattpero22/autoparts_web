// get .env variables
require("dotenv").config()

const {PORT = 4000} = process.env;

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(PORT, () => console.log(`listening...`))