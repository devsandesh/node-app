const Product = require('../models/product');

// const products = [];

exports.getAddProduct = (req, res, next) => {
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
};

exports.postAddProduct = (req, res, next) => {
    // products.push({title: req.body.title});
    const product = new Product(req.body.title);
    product.save();
    console.log(req.body);
    // res.send("<h1>Product Page!</h1/>");
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    // console.log('In second middleware!');
    // res.send("<h1>Hello From Express!</h1/>");
    // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    // const products = adminData.products;

    const products = Product.fetchAll((products) => {
        res.render('shop', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
};