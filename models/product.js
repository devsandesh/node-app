const path = require('path');
const fs = require('fs');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const products = [];

const getProductFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if(err){
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class Product {
    constructor(t){
        this.title = t;
    }

    save(){
        getProductFromFile(products => {
            products.push(this);
            fs.writeFile(p,JSON.stringify(products), err => {
                console.log(err);
            });
        });
    }

    // Static used to call function on class name
    static fetchAll(cb){
        getProductFromFile(cb);
    }
}