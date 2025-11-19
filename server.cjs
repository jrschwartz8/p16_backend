// server.cjs
// CommonJS file so we can use require() even with "type": "module" in package.json

const express = require('express');
const cors = require('cors');
const SneaksAPI = require('sneaks-api');

const app = express();
const sneaks = new SneaksAPI();

app.use(cors());

// Simple health check
app.get('/', (req, res) => {
  res.send('Sneaks backend is running');
});

// Return "all" the shoes we can get from Sneaks-API in one go
// Frontend will do *all* filtering/searching.
app.get('/api/sneakers', (req, res) => {
  // Pick a large limit so you get a lot of shoes at once.
  // If the API has fewer than this, it will just return what it has.
  const LIMIT = 200;

  sneaks.getMostPopular(LIMIT, (err, products) => {
    if (err) {
      console.error('Sneaks API error:', err);
      return res.status(500).json({ error: 'Error fetching sneakers from Sneaks API' });
    }

    // Always send an array (even if undefined/null)
    res.json(products || []);
  });
});

// Render provides PORT in production
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
