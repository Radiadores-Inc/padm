const mongoose = require('mongoose');
const ExceptionGeneral = require('../exceptions/ExceptionGeneral');

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
    },
    dtmDeleted: {
        type: Date
    }
});

propertyScheme.pre('save', function (next) {
    var self = this;
    mongoose.models['property'].find({ strNIT: self.strNIT }, function (
        err,
        nits
    ) {
        if (!nits.length) {
            return next();
        } else {
            return next(
                new ExceptionGeneral('NIT ya se encuentra registrado', 400)
            );
        }
    });
});

mongoose.model('property', propertyScheme);
module.exports = mongoose.model('property');
