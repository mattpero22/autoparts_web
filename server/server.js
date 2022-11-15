// get .env variables
require("dotenv").config()
const {PORT, MONGODB_URL} = process.env;

// setup express
const express = require("express");
const app = express();

//setup middleware
const cors = require("cors");
const morgan = require("morgan");

//setup mongoose and check
const mongoose = require("mongoose");
mongoose.connect(MONGODB_URL);
mongoose.connection
    .on("open", () => console.log("You are connected to mongoose"))
    .on("close", () => console.log("You are disconnected from mongoose"))
    .on("error", (error) => console.log(error));

// initialize middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//routes


app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(PORT, () => console.log(`listening...`))