const express = require('express');
const router = express.Router();


const {
  getAllBlogs,
  getBlogByID,
  addBlog,
  updateBlogByID,
  deleteBlog,
} = require('../contollers/blogsController');

router.get('/getAll', getAllBlogs);
router.get('/get/:ID', getBlogByID);
router.post('/add', addBlog);
router.put('/update/:ID', updateBlogByID);
router.delete('/delete/:ID', deleteBlog);

module.exports = router;