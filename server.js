// server.js
const express = require('express');
const { port } = require('./config/config');
const apiRoutes = require('./routes/apiRoutes');
const path = require('path'); // Import path module for static file serving

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
