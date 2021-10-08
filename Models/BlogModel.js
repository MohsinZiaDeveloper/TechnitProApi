const mongoose = require("mongoose");
const blogScheme = new mongoose.Schema({
  title: {
    type: String,
    required: [true, " A blog must have title"],
    trim: true,
    maxlength: [40, "A blog must have less or equal then 40 characters"],
    minlength: [10, "A blog must have more or equal then 10 characters"],
  },
  description: {
    type: String,
    required: [true, " A blog must have description"],
    trim: true,
    minlength: [10, "A blog must have more or equal then 10 characters"],
  },
  imageCover: {
    type: String,
    required: [true, " A blog must have image cover"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Blog = mongoose.model("Blog", blogScheme);
module.exports = Blog;
