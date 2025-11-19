const express = require('express');
const cors = require('cors');
const SneaksAPI = require('sneaks-api');

const app = express();
const sneaks = new SneaksAPI();

app.use(cors());

app.get('/api/sneakers', (req, res) => {
  const limit = Number(req.query.limit) || 50;

  sneaks.getMostPopular(limit, (err, products) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error fetching sneakers' });
    }
    res.json(products);
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
