const phModel = require('../models/propertyModels');

exports.createPH = async (ph) => {
    console.log('Entro 1: ' + ph.strName);
    let property = await phModel.create(ph);
    return property;
};
