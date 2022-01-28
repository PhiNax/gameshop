// Call Express Validator module
const { check } = require('express-validator');

const validateLogin = [
    check('email')
        .notEmpty().withMessage('Completa tu email')
        .isEmail().withMessage('Debes ingresar un email valido'),

    check('password')
        .notEmpty().withMessage('Completa tu password')
        .isLength({ min: 8 }).withMessage('La password debe contener minimo 8 caracteres')
]

module.exports = validateLogin;