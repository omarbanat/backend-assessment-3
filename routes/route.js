const express = require('express');
const router = express.Router();
const {
  getAllBlogs,
  getBlogByID,
  addBlog,
  updateBlogByID,
  deleteBlog,
} = require('../controllers/controller');

router.get('/getAll', getAllBlogs);
router.get('/get/:id', getBlogByID); 
router.post('/add', addBlog);
router.put('/update/:id', updateBlogByID); 
router.delete('/delete/:id', deleteBlog); 

module.exports = router;