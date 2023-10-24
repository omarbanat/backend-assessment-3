
const Blog = require("../model/blog");

const addBlog = async (req, res) => {
    try {
      const newBlog = new Blog({
          title: req.body.title,
          category: req.body.category,
          body: req.body.body,
          publisher: req.body.publisher,
      });
  
      const savedBlog = await newBlog.save();
      res.status(201).json(savedBlog);
    } catch (error) {
      res.status(400).json({ error: 'Failed to save blog post' });
    }
  };
  
  // Get all records
  const getAllBlogs = async (req, res) => {
    try {
      const blogs = await Blog.find();
      res.status(200).json(blogs);
    } catch (error) {
      res.status(500).json({ error: 'Failed to find the blog' });
    }
  };
  
  
  // Update a record
  const updateBlogs = async (req, res) => {
    try {
      const updatedBlog = await Blog.findByIdAndUpdate(
        req.params.id,
        {
          title: req.body.title,
          category: req.body.category,
          body: req.body.body,
          publisher: req.body.publisher,
        },
      );
  
      if (!updatedBlog) {
        return res.status(404).json({ error: 'Blog not found' });
      }
      res.status(200).json(updatedBlog);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update Blog' });
    }
  };
  
  // Delete a record
  const deleteBlog = async (req, res) => {
    try {
      const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
  
      if (!deletedBlog) {
        return res.status(404).json({ error: 'Blog not found' });
      }
      res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete Blog' });
    }
  };
  
  module.exports = {addBlog, getAllBlogs, updateBlogs, deleteBlog};