const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controllers/userController");
const protect = require("../middlewares/authMiddleware");

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, (req, res) => {
  res.json(req.user);
});

module.exports = router;
