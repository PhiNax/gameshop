// Middleware for express-validator to validate form data
const { check } = require('express-validator');

const validateRegister = [
    check('firstName')
        .notEmpty().withMessage('Must complete your firstname')
        .isLength({ min: 3 }).withMessage('Your firstname must contain minimium 3 characters'),

    check('lastName')
        .notEmpty().withMessage('Must complete your lastname')
        .isLength({ min: 3 }).withMessage('Your lastname must contain minimium 3 characters'),

    check('email')
        .notEmpty().withMessage('Must complete your email')
        .isEmail().withMessage('Must be a valid email'),

    check('password')
        .notEmpty().withMessage('Must complete your password')
        .isLength({ min: 8 }).escape().withMessage('Password must contain minimun 8 characters'),

    check('passwordC')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Password do not match');
            }
            return true;
        })
    /*
    check('agreeTerm')25
        .notEmpty().withMessage('Must agree with user terms and conditions')
   */
]

const validateLogin = [
    check('email')
        .notEmpty().withMessage('Must complete your email')
        .isEmail().withMessage('Must be a valid email'),

    check('password')
        .notEmpty().withMessage('Must complete your password')
]

module.exports = validateRegister, validateLogin;