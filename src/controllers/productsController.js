// Call FileSystem module
const fs = require('fs');
// Call Path module
const path = require('path');

/*const { Game } = require('../database/connectDB');*/

// Set FilePath of Database and Parse to JSON
const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    // Root - Show all products
    list: (req, res) => {
        res.render('products/productsList', { products });
    },
    // Detail - Detail from one product
    detail: (req, res) => {
        const detailProductById = products.find(element => element.id === req.params.id);
        res.render('products/productsDetail', { product: detailProductById });
    }
};


module.exports = controller;