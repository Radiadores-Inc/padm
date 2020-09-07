const contProperty = require('../controllers/propertyController');

module.exports = (router) => {
    router.route('/property/').post(contProperty.createPH);
};
