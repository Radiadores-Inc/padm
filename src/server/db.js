const mongoose = require('mongoose');
const config = require('../config/config');

exports.connect = () => {
    return mongoose.connect(config.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
}