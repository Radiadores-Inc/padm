const mongoose = require('mongoose');

let userScheme = new mongoose.Schema({
    strName: {
        type: String,
        required: true
    }
});

mongoose.model('User', propertyScheme);
module.exports = mongoose.model('User');
