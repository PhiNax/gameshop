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
    // Register render register form
    register: (req, res) => {
        res.render('users/register');
    },
    // Store New User on DataBase
    createUser: async (req, res) => {
        const errors = validationResult(req);

        if (errors.isEmpty()) {

            let passCrypt = await bcrypt.hash(req.body.password, 10);

            let newUser = {
                name: req.body.name,
                nickname: req.body.nickname,
                email: req.body.email,
                password: passCrypt,
            }
            try {
                await User.create(newUser);
                res.redirect('/user/login');
            }
            catch (err) {
                throw new Error('Create New User: Error => ' + err);
            }
        } else {
            res.render('users/register', { errors: errors.mapped(), old: req.body });
        }
    },
    // Login render login form
    login: (req, res) => {
        res.render('users/login');
    },
    //  Login process
    loginProcess: async (req, res) => {
        const errors = validationResult(req);

        if (errors.isEmpty()) {

            const email = req.body.email;
            const password = req.body.password;

            if (req.body.remember === 'remember') {
                req.session.cookie.maxAge = 60000 * 600 * 24 * 7;
            }

            try {
                const userLogin = await User.findOne({
                    where: {
                        email: email
                    }
                });
                if (userLogin && await bcrypt.compare(password, userLogin.password)) {

                    req.session.userLogged = {
                        name: userLogin.name,
                        email: userLogin.email,
                        avatar: userLogin.avatar
                    };
                    res.redirect('profile');
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
                throw new Error('Login User: Error => ' + err);
            }
        } else {
            res.render('users/login', { errors: errors.mapped(), old: req.body });
        }
    },
    // Log out user and destroy the session information
    logout: (req, res) => {
        req.session.destroy(function (err) {
            if (err) {
                throw new Error('Can not log out User: Error => ' + err);
            }
        });
        res.clearCookie('gameshop-sid').redirect('/');
    },
    profile: (req, res) => {
        return res.render('users/userProfile', { user: req.session.userLogged });
    }
};

module.exports = controller;

