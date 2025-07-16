const mongoose = require("mongoose");

const spotlightSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: [String],
  city: String,
  country: String,
  author: String,
  images: [String],
  cover: String,
}, { timestamps: true });

module.exports = mongoose.model("Spotlight", spotlightSchema);
