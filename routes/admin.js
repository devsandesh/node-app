const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product',(req, res, next) => {
    // console.log('In first middleware!');
    /* res.send(`
        <form action="/product" method="POST">  
        <input type="text" name="title"/>
        <button type="submit">Submit</button>
        </form>`); */
        // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
        res.render('add-product', {
            pageTitle: 'Add Product', 
            path: '/admin/add-product',
            formsCSS: true, 
            productCSS: true, 
            activeAddProduct: true
        });
});

router.post('/add-product',(req, res, next) => {
    products.push({title: req.body.title});
    console.log(req.body);
    // res.send("<h1>Product Page!</h1/>");
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    res.redirect('/');
});

// module.exports = router;
exports.routes = router;
exports.products = products;