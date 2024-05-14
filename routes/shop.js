const express = require('express');
const path = require('path');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/',(req, res, next) => {
    // console.log('In second middleware!');
    // res.send("<h1>Hello From Express!</h1/>");
    // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    const products = adminData.products;
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
});

module.exports = router;