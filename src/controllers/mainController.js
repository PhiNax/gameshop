// Call FileSystem module
const fs = require('fs');
// Call Path module
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const userSchema = require('../models/userSchema');

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
    // Login User
    loginUser: (req, res) => {

    },

    // Register
    register: (req, res) => {
        res.render('users/register');
    },
    // Create New User from form
    createUser: (req, res) => {
        const newUser = new userSchema({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            passwordC: req.body.passwordC,
            agreeTerms: req.body.terms,
            access: '1',
        })
        console.log(newUser);
        newUser.save();

        res.render('index', { products })
    }

};

module.exports = controller;