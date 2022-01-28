const express = require('express');
const router = express.Router();

// Call admin controller
const adminController = require('../controllers/adminController');

// Call multer middleware to upload games images cover
const uploadCoverImage = require('../middleware/multerGameImage');

// Call multer middleware to upload users images avatars
const uploadAvatar = require('../middleware/multer');

const adminMiddleware = require('../middleware/adminMiddleware');

// Game Details Route
router.get('/', adminMiddleware, adminController.list);

// Game Search form
router.post('/search', adminMiddleware, adminController.search);

// Game Create Route
router.get('/create', adminMiddleware, adminController.create);
// Game Store Catch Data from Create Form Route
router.post('/store', adminMiddleware, uploadCoverImage.single("coverImage"), adminController.store);

// Game Edit
router.get("/edit/:id", adminMiddleware, adminController.getEdit)
// Game Update
router.put('/update/:id', adminMiddleware, uploadCoverImage.single("coverImage"), adminController.edit)

// Game Delete
router.delete('/delete/:id', adminMiddleware, adminController.delete)


// User routes
// User List Route
router.get('/user/', adminMiddleware, adminController.userList);
// User Create
router.get('/user/create', adminMiddleware, adminController.userCreate);
// User => Store New User Route
router.post('/user/store', adminMiddleware, uploadAvatar.single("coverImage"), adminController.userStore);
// User Edit
router.get('/user/:id', adminMiddleware, adminController.userGetEdit);
// User Update
router.put('/user/update/:id', adminMiddleware, uploadAvatar.single("coverImage"), adminController.userUpdate)

module.exports = router;