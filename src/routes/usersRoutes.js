const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

const { validateRegister, validateLogin } = require('../middleware/formValidator');

const { authMiddleware, guestMiddleware } = require('../middleware/userAuth');

// Login form
router.get('/login', authMiddleware, userController.login);
// Login User
router.post('/login', validateLogin, userController.loginUser);

// Register form
router.get('/register', authMiddleware, userController.register);
// Create New User
router.post('/register', validateRegister, userController.createUser);

// Profile User
router.get('/profile', guestMiddleware, userController.profile);

// Logout User
router.get('/logout', userController.logoutUser);

// User Cart Details
router.get('/cart', guestMiddleware, userController.cart);

module.exports = router;