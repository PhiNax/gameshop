// Call result validation errors
const { validationResult } = require('express-validator');
// Call Bcrypt for encrypt passwords
const bcrypt = require('bcrypt');
// Call User Model 
const { User } = require('../database/connectDB');

const controller = {
    // Cart
    cart: (req, res) => {
        res.render('users/cart');
    },
    // Login User
    login: (req, res) => {
        res.render('users/login');
    },
    // Login User
    loginUser: async (req, res) => {
        let email = req.body.email;
        let password = req.body.password;
        let passHash = bcrypt.hash(password, 10);

        if (email && password) {
            await sequelize.query('SELECT * FROM users WHERE email = ?', [email])
        }
        res.render('/'), { user: User.firstName }
    },
    // Logout User
    logoutUser: (req, res) => {
        res.clearCookie('user')
        req.session.destroy(() => {
            res.redirect('/');
        });
    },
    // Register
    register: (req, res) => {
        res.render('users/register');
    },
    // Create New User from form
    createUser: async (req, res) => {
        const errors = validationResult(req);

        if (errors.isEmpty()) {

            let passCrypt = bcrypt.hashSync(req.body.password, 10);

            let newUser = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: passCrypt,
                agreeTerms: req.body.terms,
                access: '1'
            }
            try {
                await User.create(newUser);
                res.redirect('/');
            }
            catch (err) {
                throw 'Create New User: Error => ' + err;
            }
        } else {
            res.render('users/register', { errors: errors.mapped(), old: req.body });
        }
    }
}

module.exports = controller;