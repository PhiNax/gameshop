const path = require("path");

// Call Multer for game image storage module
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

const uploadCorverImage = multer({ storage: storage });

module.exports = uploadCorverImage;