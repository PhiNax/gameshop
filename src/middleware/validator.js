// Middleware for express-validator to validate form data
const { check } = require('express-validator');

const validateRegister = [
    check('firstName')
        .notEmpty().withMessage('Must complete your firstname')
        .isLength({ min: 3 }).trim().withMessage('Your firstname must contain minimium 3 characters'),

    check('lastName')
        .notEmpty().withMessage('Must complete your lastname')
        .isLength({ min: 3 }).trim().withMessage('Your lastname must contain minimium 3 characters'),


    check('email')
        .notEmpty().withMessage('Must complete your email')
        .isEmail().trim().escape().normalizeEmail().withMessage('Must be a valid email'),


    check('password')
        .notEmpty().withMessage('Must complete your password')
        .isLength({ min: 8 }).trim().escape().withMessage('Password must contain minimun 8 characters'),

    check('passwordC')
        .notEmpty().equals().withMessage('Password do not match')

    /*
    check('agreeTerm')25
        .notEmpty().withMessage('Must agree with user terms and conditions')
    */
]

const validateLogin = [
    check('email')
        .notEmpty().withMessage('Must complete your email').bail()
        .isEmail().withMessage('Must be a valid email'),

    check('password')
        .notEmpty().withMessage('Must complete your password').bail()
        .isLength({ min: 8 }).withMessage('Password must contain minimun 8 characters')
]

module.exports = validateRegister, validateLogin;