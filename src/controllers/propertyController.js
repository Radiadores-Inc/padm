const phService = require('../services/propertyService');
const ExceptionGeneral = require('../exceptions/ExceptionGeneral');

exports.createPH = async (req, res) => {
    if (!req.body.strName) {
        throw new ExceptionGeneral('Nombre es requerido', 400);
    }
    if (!req.body.strAddress) {
        throw new ExceptionGeneral('Dirección es requerida', 400);
    }
    if (!req.body.strNIT) {
        throw new ExceptionGeneral('NIT es requerido', 400);
    }
    if (!req.body.obidCodAdmin) {
        throw new ExceptionGeneral('Administrador es requerido', 400);
    }
    let ph = await phService.createPH(req.body);
    res.status(200).send(ph);
};
