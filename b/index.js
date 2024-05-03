const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 7000;
mongoose.connect('mongodb://localhost:27017/village', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

// View engine setup
app.set("view engine", "ejs");

// Middleware
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.static(__dirname + '/public')); // Static files setup

// Load environment variables
dotenv.config({ path: "./config.env" });

// Routes
let country=require("./router/country")
app.use("/country",country)



let State=require("./router/state")
app.use("/state",State)

app.get("/", (req, res) => {
    res.render("server");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
