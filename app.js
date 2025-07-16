const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Example test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;
