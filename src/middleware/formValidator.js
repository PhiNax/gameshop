// Middleware for express-validator to validate form data
const { check } = require('express-validator');

const { User } = require('../database/connectDB');

const validateRegister = [
    check('firstName')
        .notEmpty().withMessage('Must complete your firstname')
        .isLength({ min: 3 }).withMessage('Your firstname must contain minimium 3 characters'),

    check('lastName')
        .notEmpty().withMessage('Must complete your lastname')
        .isLength({ min: 3 }).withMessage('Your lastname must contain minimium 3 characters'),

    check('email')
        .notEmpty().withMessage('Must complete your email')
        .isEmail().withMessage('Must be a valid email')
        .bail()
        .custom(async (value) => {
            if (await User.findOne({ where: { email: value } })) {
                throw new Error('Use another email');
            }
            return true;
        }),

    check('password')
        .notEmpty().withMessage('Must complete your password')
        .isLength({ min: 8 }).withMessage('Password must contain minimun 8 characters'),

    check('passwordC')
        .notEmpty().withMessage('Must complete your confirmation password')
        .isLength({ min: 8 }).withMessage('Password must contain minimun 8 characters')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Password do not match');
            }
            return true;
        }),

    check('terms').isIn(['accept']).withMessage('Must agree with user terms and conditions'),
]

const validateLogin = [
    check('email')
        .notEmpty().withMessage('Must complete your email')
        .isEmail().withMessage('Must be a valid email'),

    check('password')
        .notEmpty().withMessage('Must complete your password')
        .isLength({ min: 8 }).withMessage('Password must contain minimun 8 characters'),

    /*check('remember').isIn(['on'])*/
]

module.exports = { validateRegister, validateLogin };