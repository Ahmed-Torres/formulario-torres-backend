const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan")

const bodyParser = require("body-parser")
const path = require("path")
const bcrypt = require("bcrypt")


//settings
app.set("port", process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//statics files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/', require('./src/routes/addclient.js'))

module.exports = app;