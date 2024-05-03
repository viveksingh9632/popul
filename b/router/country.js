const express = require('express');
const Country = require('../model/country'); // Import your country model
const router = express.Router(); // Use express.Router() to create a router instance

router.get("/", (req, res) => {
    Country.find({})
    .then((x) => { // Renamed x to countries for clarity
        res.render("country", { x }); // Render the "country" view with countries data
    })
    .catch((err) => {
        console.error("Error:", err);
        res.status(500).send("Internal Server Error");
    });
});

router.get("/add", (req, res) => {
    res.render('countryadd'); // Render the "add-country" view for adding a new country
});

router.post("/add", (req, res) => {
    const countryName = req.body.countryField; // Get the country name from the request body
    Country.create({ Country: countryName })
    .then((createdCountry) => {
         console.log("Country added:", createdCountry);
        res.redirect("/country"); // Redirect to the main country page after adding
    })
    .catch((err) => {
        console.error("Error:", err);
        res.status(500).send("Internal Server Error");
    });
});

module.exports = router;

