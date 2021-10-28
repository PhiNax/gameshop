const express = require('express');

const router = express.Router();

const mainController = require('../controllers/mainController');
const userController = require('../controllers/userController');

const validateRegister = require('../middleware/validator');

// Set Routes
// Index Route
router.get('/', mainController.index);

// Product Details Route
//router.get('/productDetails', mainController.detail);

// Cart Details Route
router.get('/cart', userController.cart);
// Login Route
router.get('/login', userController.login);
// Login User
router.post('/login', userController.loginUser);
// Logout User
router.get('/logout', userController.logoutUser);
// Register Route
router.get('/register', userController.register);
// Create New User
router.post('/register', validateRegister, userController.createUser);

module.exports = router;