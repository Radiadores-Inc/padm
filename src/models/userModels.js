const mongoose = require('mongoose');

let userScheme = new mongoose.Schema({
    strName: {
        type: String,
        required: true
    }
});

mongoose.model('User', userScheme);
module.exports = mongoose.model('User');
