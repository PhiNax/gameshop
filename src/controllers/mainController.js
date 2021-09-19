const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    // Index
    index: (req, res) => {
        res.render('index', { products });
    },

    // Detail from one product
    detail: (req, res) => {
        res.render('productdetails');
    },

    // Cart
    cart: (req, res) => {
        res.render('users/cart');

    },

    // Login
    login: (req, res) => {
        res.render('users/login');
    },

    // Register
    register: (req, res) => {
        res.render('users/register');
    }
};

module.exports = controller;