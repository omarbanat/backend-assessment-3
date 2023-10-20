const express = require('express');
const Blog = require('../model/blog');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newBlog = new Blog({
        title: req.body.title,
        category: req.body.category,
        body: req.body.body,
        publisher: req.body.publisher,
    //   institution: req.body.institution,
    //   degree: req.body.degree,
    //   graduation_date: req.body.graduation_date,
    });

    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(400).json({ error: 'Failed to save blog post' });
  }
});

// Get all records
router.get('/', async (req, res) => {
  try {
    const blogs = await blogs.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to find the blog' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const Blog = await Blog.findById(req.params.id);
    if (!Blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json(education);
  } catch (error) {
    res.status(500).json({ error: 'Failed to find Blog' });
  }
});

// Update a record
router.put('/:id', async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        category: req.body.category,
        body: req.body.body,
        publisher: req.body.publisher,
      },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update Blog' });
  }
});

// Delete a record
router.delete('/:id', async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);

    if (!deletedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete Blog' });
  }
});

module.exports = router;