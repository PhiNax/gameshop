const express = require('express');
const router = express.Router();
// Call products controller
const productsController = require('../controllers/productsController');

// Set Routes
// Product Details Route
router.get('/:id', productsController.detail);

router.get('/platform/:name', productsController.platform);

router.post('/search', productsController.search);

module.exports = router;