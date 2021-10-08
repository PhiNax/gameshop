// Call result validation errors
const { validationResult } = require('express-validator');
// Call Bcrypt for encrypt passwords
const bcrypt = require('bcrypt')
// Call FileSystem module
const fs = require('fs');
// Call Path module
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// Create Main Controller
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
    }
    // Create New User from form
    /*createUser: async (req, res) => {
        console.log(req.body);
        let errors = validationResult(req);

        if (errors.isEmpty()) {

            const password = req.body.password;
            const passwordC = req.body.passwordC;

            let passCrypt = bcrypt.hashSync(password, 10);

            const newUser = new userSchema({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: passCrypt,
                agreeTerms: req.body.terms,
                access: '1',
            })
            console.log(newUser);

            if (password === passwordC) {
                await newUser.save()
                    .then(() => {
                        res.render('404-not-found');
                    })
                    .catch((error) => { console.log(error) })
            } else {
                console.log('password dont match')
            }


        } else {
            res.render('users/register', { errors: errors.mapped(), old: req.body });
        }
    }*/

};

module.exports = controller;