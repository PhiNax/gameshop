const express = require('express');
const router = express.Router();
// Call API controller
const apiController = require('../controllers/apiController');

// Set API Routes
router.get('/users', apiController.users);

router.get('/users/:id', apiController.userId);

router.get('/products', apiController.products);

router.get('/products/:id', apiController.productId)

module.exports = router;