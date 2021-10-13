// Call result validation errors
const { validationResult } = require('express-validator');
// Call Bcrypt for encrypt passwords
const bcrypt = require('bcrypt')

const { User } = require('../database/connectDB');
const { Game } = require('../database/connectDB');

// Create Main Controller
const controller = {
    // Index
    index: async (req, res) => {

        const gamesPc = await Game.findAll({
            where: {
                platform_slug: 'pc',
            }
        });
        const gamesPs4 = await Game.findAll({
            where: {
                platform_slug: 'ps4',
            }
        });
        const gamesPs5 = await Game.findAll({
            where: {
                platform_slug: 'ps5',
            }
        });
        const gamesXbox = await Game.findAll({
            where: {
                platform_slug: 'xbox',
            }
        });
        const gamesWiiu = await Game.findAll({
            where: {
                platform_slug: 'wiiu',
            }
        });
        const gamesSwitch = await Game.findAll({
            where: {
                platform_slug: 'switch',
            }
        });

        res.render('index', { gamesPc, gamesPs4, gamesPs5, gamesXbox, gamesWiiu, gamesSwitch });
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
    createUser: async (req, res) => {
        console.log(req.body);
        let password = req.body.password;
        let passCrypt = bcrypt.hashSync(password, 10);

        let newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: passCrypt,
            agreeTerms: req.body.terms,
            access: '1',
        }
        console.log(newUser);

        await User.create(newUser)
            .then(() => {
                res.redirect('404-not-found');
            })
            .catch((error) => { console.log(error) })

        /*const errors = validationResult(req);*/


        /*if (errors.isEmpty()) {

            const password = req.body.password;
            const passwordC = req.body.passwordC;

            let passCrypt = bcrypt.hashSync(password, 10);

            const newUser = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: passCrypt,
                agreeTerms: req.body.terms,
                access: '1',
            }
            console.log(newUser);

            if (password === passwordC) {
                User.create(newUser)
                .then(() => {
                res.render('404-not-found');
                })
                .catch((error) => { console.log(error) })
            } else {
                console.log('password dont match');
            }

        } else {
            res.render('users/register', { errors: errors.mapped(), old: req.body });
        }*/
    }

};

module.exports = controller;