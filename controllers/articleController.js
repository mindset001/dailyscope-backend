const Article = require("../models/Articles");

exports.createArticle = async (req, res) => {
  try {
    const { title, author, content, category } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required." });
    }

    // Example: handle files
    const cover = req.files?.cover?.[0];
    const images = req.files?.images || [];

    // Create article logic here
    const article = await Article.create({
      title,
      author,
      content,
      category,
      // Optional: save image data if needed
    });

    res.status(201).json(article);
  } catch (error) {
    console.error("Create article error:", error);
    res.status(500).json({ message: error.message });
  }
};


exports.getArticles = async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: -1 });
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
