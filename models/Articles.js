const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: String,
  author: String,
  images: [String],
  cover: String,
}, { timestamps: true });

module.exports = mongoose.model("Article", articleSchema);
