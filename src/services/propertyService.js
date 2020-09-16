const phModel = require('../models/propertyModels');

exports.createPH = async (ph) => {
    let property = await phModel.create(ph);
    return property;
};
