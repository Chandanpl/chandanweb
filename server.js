// server.js
const express = require('express');
const path = require('path');
const app = express();

// directory where your HTML/CSS/JS/images live
const publicDir = path.join(__dirname); // change to './public' if you move files into a public folder

// 1) let Express serve static files (images, CSS, JS, other html files)
app.use(express.static(publicDir));

// 2) when a user opens '/', send profile.html
app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'profile.html'));
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
