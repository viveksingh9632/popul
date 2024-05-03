const mongoose = require('mongoose');
const Schema = mongoose.Schema; // Import Schema from mongoose

// Define your schema
const mySchema = new Schema({
    Country: {
        type: String,
        required: true
    },
});

// Create a model from the schema
const mymodel = mongoose.model('countryTable', mySchema);

// Export the model
module.exports = mymodel;
