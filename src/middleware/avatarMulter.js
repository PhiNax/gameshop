const path = require('path');

// Call Multer for image storage module
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/img/avatars/'));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e13);
        cb(null, file.fieldname + '-' + uniqueSuffix);
    },
});

const uploadAvatar = multer({ storage: storage });

module.exports = uploadAvatar;