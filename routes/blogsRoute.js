const express = require('express');
const router = express.Router();

const {
  getAllBlogs,
  addBlog,
  updateBlogByID,
  deleteBlog,
} = require('../contollers/blogsController');

router.get('/getAll', getAllBlogs);
router.post('/add', addBlog);
router.put('/update/:ID', updateBlogByID);
router.delete('/delete/:ID', deleteBlog);

module.exports = router;
