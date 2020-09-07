const phService = require('../services/propertyService');

exports.createPH = async (req, res) => {
    let ph = await phService.createPH(req.body);
    res.status(200).send(ph);
};
