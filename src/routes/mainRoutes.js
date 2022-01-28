const express = require('express');
const router = express.Router();
// Call products controller
const mainController = require('../controllers/mainController');

// Set Routes
// Index Route
router.get('/', mainController.index);

module.exports = router;