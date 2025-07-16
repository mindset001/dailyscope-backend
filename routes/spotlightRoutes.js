// routes/spotlightRoutes.js

const express = require("express");
const router = express.Router();
const {
  createSpotlight,
  getSpotlights,
} = require("../controllers/spotlightController");
const upload = require("../middlewares/uploadMiddleware");
const protect = require("../middlewares/authMiddleware");

// POST /api/spotlights - Create a spotlight entry
router.post(
  "/",
  upload.fields([
    { name: "cover", maxCount: 1 },
    { name: "images", maxCount: 4 },
  ]),
  protect, createSpotlight
);

// GET /api/spotlights - Get all spotlight entries
router.get("/", protect, getSpotlights);

module.exports = router;
