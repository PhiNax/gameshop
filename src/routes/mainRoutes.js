const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');
const userController = require('../controllers/userController');

const { validateRegister, validateLogin } = require('../middleware/formValidator');

const { authMiddleware, guestMiddleware } = require('../middleware/userAuth');

// Set Routes
// Index Route
router.get('/', mainController.index);
// Cart Details Route
router.get('/cart', guestMiddleware, userController.cart);
// Login Route
router.get('/login', userController.login);
// Login User
router.post('/login', validateLogin, userController.loginUser);
// Logout User
router.post('/logout', userController.logoutUser);
// Register Route
router.get('/register', userController.register);
// Create New User
router.post('/register', validateRegister, userController.createUser);

module.exports = router;