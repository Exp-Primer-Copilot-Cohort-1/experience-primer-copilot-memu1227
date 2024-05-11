// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create array to store comments
const comments = [];

// Serve static files
app.use(express.static('public'));

// Parse JSON
app.use(express.json());

// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

