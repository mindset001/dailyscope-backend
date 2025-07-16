const Spotlight = require("../models/spotlight");

exports.createSpotlight = async (req, res) => {
  try {
    const { title, author, content, location, tags } = req.body;

    if (!title || !author) {
      return res.status(400).json({ message: "Title and Author are required." });
    }

    const cover = req.files?.cover?.[0]?.filename || null;
    const images = req.files?.images?.map((file) => file.filename) || [];

    const spotlight = await Spotlight.create({
      title,
      author,
      content,
      location,
    //   tags: tags ? tags.split(",").map((tag) => tag.trim()) : [],
      cover,
      images,
    });

    res.status(201).json(spotlight);
  } catch (error) {
    console.error("Create spotlight error:", error);
    res.status(500).json({ message: error.message });
  }
};

exports.getSpotlights = async (_req, res) => {
  try {
    const spotlights = await Spotlight.find().sort({ createdAt: -1 });
    res.json(spotlights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
