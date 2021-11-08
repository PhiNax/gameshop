// Call result validation errors
const { validationResult } = require('express-validator');
// Call Bcrypt for encrypt passwords
const bcrypt = require('bcryptjs');
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
        const errors = validationResult(req);

        if (errors.isEmpty()) {

            const email = req.body.email;
            const password = req.body.password;

            try {
                const userLogin = await User.findOne({
                    where: {
                        email: email
                    }
                });
                if (userLogin && await bcrypt.compare(password, userLogin.password)) {
                    req.session.userLogged = userLogin;
                    res.redirect('/');
                } else {
                    const errors = {
                        credentials: {
                            msg: 'Credentials do not match'
                        }
                    };
                    res.render('users/login', { errors: errors, old: req.body });
                }
            }
            catch (err) {
                throw 'Login User: Error => ' + err;
            }
        } else {
            res.render('users/login', { errors: errors.mapped(), old: req.body });
        }
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

            let passCrypt = await bcrypt.hash(req.body.password, 10);

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