const express = require("express");
const {
  createArticle,
  getArticles,
} = require("../controllers/articleController");
const upload = require("../middlewares/uploadMiddleware");

const router = express.Router();

// Handle multiple files: one cover + multiple images
router.post(
  "/",
  upload.fields([
    { name: "cover", maxCount: 1 },
    { name: "images", maxCount: 4 },
  ]),
  createArticle
);
router.get("/", getArticles);

module.exports = router;
