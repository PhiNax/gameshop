const express = require('express');

const router = express.Router();

const mainController = require('../controllers/mainController');

// Set Routes
// Index Route
router.get('/', mainController.index);

// Product Details Route
router.get('/productDetails', mainController.detail);

// Cart Details Route
router.get('/cart', mainController.cart);

// Login Route
router.get('/login', mainController.login);
// Login User
router.post('/login', mainController.loginUser);

// Register Route
router.get('/register', mainController.register);
// Create New User
router.post('/register', mainController.createUser)

module.exports = router;