const Blog = require('../models/blog');

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json({
      success: true,
      message: 'Data retrieved successfully',
      data: blogs,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: 'unable to get data',
      error: error,
    });
  }
};

const getBlogByID = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.ID);
    res.status(200).json({
      success: true,
      message: 'Blog retrieved successfully',
      data: blog,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: 'unable to get blog by ID',
      error: error,
    });
  }
};

const addBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(200).json({
      success: true,
      message: 'Blog added successfully',
      data: blog,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Blog not added successfully',
      error: error,
    });
  }
};

const updateBlogByID = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.ID, req.body);
    res.status(200).json({
      success: true,
      message: 'Blog updated successfully.',
      data: blog,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Unable to update blog',
      error: error,
    });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.deleteOne({ _id: req.params.ID });
    res.status(200).json({
      success: true,
      message: 'Blog deleted successfully',
      blog: blog,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error occured while deleting the blog',
      error: error,
    });
  }
};

module.exports = {
  getAllBlogs,
  getBlogByID,
  addBlog,
  updateBlogByID,
  deleteBlog,
};