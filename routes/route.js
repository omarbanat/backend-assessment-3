const express = require('express');
const controller = require('../controller/blogController');
const router = express.Router();

router.get('/get', controller.getAllBlogs);
router.put('/update/:id', controller.updateBlogs);
router.post('/add', controller.addBlog);
router.delete('/delete/:id', controller.deleteBlog);

module.exports = router;
