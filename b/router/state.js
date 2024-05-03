const express = require('express');
const router = express.Router(); 
const Country = require('../model/country'); // Import your country model
// Use express.Router() to create a router instance




router.get("/",(req ,res)=>{
    res.render("state")
})
router.get("/add", (req, res) => {
    Country.find({})
    .then((x) => { // Renamed x to countries for clarity
        res.render("stateadd", { x }); // Render the "country" view with countries data
    })});


module.exports = router;
