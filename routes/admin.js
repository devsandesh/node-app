const express = require('express');

const productsController = require('../controllers/products');
// const path = require('path');
// const rootDir = require('../util/path');

const router = express.Router();

// const products = [];

router.get('/add-product',productsController.getAddProduct);

router.post('/add-product', productsController.postAddProduct);

module.exports = router;
// exports.routes = router;
// exports.products = products;