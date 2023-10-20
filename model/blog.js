const mongoose = require('mongoose');

// Define the schema for the blog
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  }
},
{
  timestamps: true 
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
