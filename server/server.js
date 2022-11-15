// get .env variables
require("dotenv").config()
const {PORT, MONGODB_URL} = process.env;

//dependencies
const cors = require("cors");
const morgan = require("morgan");
const methodOverride = require('method-override')
const autopartsController = require('./controllers/autoparts');


// setup express
const express = require("express");
const app = express();


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
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form
app.use(express.urlencoded({ extended: false })); // body parser to access req.body

//controllers
app.use("/autoparts", autopartsController);

//routes
app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(PORT, () => console.log(`listening...`))
