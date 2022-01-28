const express = require('express');
const router = express.Router();
// Call Users controller
const usersController = require('../controllers/usersController');
// Call Validator for Register form
const validateRegister = require('../middleware/registerValidator');

// Call Validator for Login form
const validateLogin = require('../middleware/loginValidator')

// Call guestMiddleware to check if user is already registered
const guestMiddleware = require('../middleware/guestMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

// Call multer middleware to upload user avatar image
const uploadAvatar = require('../middleware/multer');

// Register Route
router.get('/register', guestMiddleware, usersController.register);

router.post('/createuser', uploadAvatar.single('userimage'), validateRegister, usersController.createUser);

// Login Route
router.get('/login', guestMiddleware, usersController.login);

// Procesar el login
router.post('/login', validateLogin, usersController.loginProcess);

// Logout
router.get('/logout', usersController.logout);

// Perfil de Usuario
router.get('/profile', authMiddleware, usersController.profile);

// Cart Details Route
router.get('/cart', authMiddleware, usersController.cart);

module.exports = router;