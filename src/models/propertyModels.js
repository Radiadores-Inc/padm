const mongoose = require('mongoose');

let propertyScheme = new mongoose.Schema({
    strName: {
        type: String,
        required: true
    },
    strAddress: {
        type: String,
        required: true
    },
    strNIT: {
        type: String,
        required: true,
        unique: true
    },
    obidCodAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    blnDelete: {
        type: Boolean,
        default: false
    },
    dtmCreated: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('property', propertyScheme);
module.exports = mongoose.model('property');
