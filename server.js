const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors"); // ✅ FIXED

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: "http://localhost:3000", // ✅ Allow your frontend
  origin: "https://dailyscope-332y.vercel.app",
  credentials: true,
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

const articleRoutes = require("./routes/articleRoutes");
const userRoutes = require("./routes/userRoutes");
const spotlightRoutes = require("./routes/spotlightRoutes"); // ✅ FIXED
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);
app.use("/api/users", userRoutes); 
app.use("/api/articles", articleRoutes);
app.use("/api/spotlights", spotlightRoutes); // ✅ FIXED

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

module.exports = app;
