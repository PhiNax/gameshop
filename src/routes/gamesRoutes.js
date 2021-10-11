const express = require('express');

const router = express.Router();

const gamesController = require('../controllers/gamesController');

/*
const path = require("path");

// Call Multer for image storage module
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/img/products/cover'));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e13) + '-' + file.originalname;
        cb(null, file.fieldname + '-' + uniqueSuffix);
    },
});

const upload = multer({ storage: storage });
upload.single('image')
*/
// Set Routes
// Product Details Route
router.get('/platform/:id', gamesController.platform);

// Product Details Route
//router.get('/:id', gamesController.detail);


module.exports = router;