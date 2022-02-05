// Call Express Validator module
const { check } = require('express-validator');
// Call User Model 
const { User } = require('../database/connectDB');

const validateRegister = [
    check('firstname')
        .notEmpty().withMessage('Complete your name')
        .isLength({ min: 3 }).withMessage('Your name must have at least 3 characters'),

    check('lastname')
        .notEmpty().withMessage('Complete your lastname')
        .isLength({ min: 3 }).withMessage('Your lastname must have at least 3 characters'),

    check('email')
        .notEmpty().withMessage('Complete your email')
        .isEmail().withMessage('Your email must be valid')
        .custom(async (value) => {
            const emailUsed = await User.findOne({
                where: {
                    email: value
                }
            });

            if (emailUsed) {
                throw new Error('Choose another email');
            }

            return true;
        }),

    check('password')
        .notEmpty().withMessage('Complete your password')
        .isLength({ min: 8 }).withMessage('Password must have at least 8 characters'),

    check('passwordC')
        .notEmpty().withMessage('Complete your confirmation password')
        .isLength({ min: 8 }).withMessage('Password must have at least 8 characters')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Password do not match');
            }
            return true;
        }),

    check('terms')
        .custom((value) => {
            if (value !== 'accept') {
                throw new Error('Must accept Terms');
            }
            return true;
        })
]

module.exports = validateRegister;