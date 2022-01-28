const path = require('path');
// Call Express Validator module
const { check } = require('express-validator');
// Call User Model 
const { User } = require('../database/connectDB');

const validateRegister = [
    check('name')
        .notEmpty().withMessage('Complete your name')
        .isLength({ min: 3 }).withMessage('Your name must have at least 3 characters'),

    check('nickname')
        .notEmpty().withMessage('Complete your nickname')
        .isLength({ min: 3 }).withMessage('Your nickname must have at least 3 characters')
        .custom(async (value) => {
            const nicknameUsed = await User.findOne({
                where: {
                    nickname: value
                }
            });
            if (nicknameUsed) {
                throw new Error('Choose another nickname');
            }

            return true;
        }),

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
        .isLength({ min: 8 }).withMessage('Your password must have at least 8 characters'),
]

module.exports = validateRegister;