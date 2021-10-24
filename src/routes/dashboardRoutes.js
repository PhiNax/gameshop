const express = require('express');

const router = express.Router();

const dashboardController = require('../controllers/dashboardController');

// Set Admin Routes
// Dashboard Admin
router.get('/', dashboardController.dashboard);

router.get('/create', dashboardController.create);

router.post('/store', dashboardController.store);

router.get('/edit/:id', dashboardController.edit);

router.put('/update', dashboardController.update);

router.put('/delete', dashboardController.destroy);

router.get('/platform/:id', dashboardController.platform);

module.exports = router;