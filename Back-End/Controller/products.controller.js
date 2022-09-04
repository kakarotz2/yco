const productModel = require('../Models/products.model');

class ProductController {
    get(req, res, next) {
        productModel
            .find({})
            .then((productModel) => res.json(productModel))
            .catch(next);
    }
    getIphone(req, res, next) {}
}
module.exports = new ProductController();
