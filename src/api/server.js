const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors())

const games = require('./products.json');

server.get('/api', (req, res) => {
  return res.json(games);
});

server.listen(3000, () => {
  console.log('Server is running 🎉 at http://localhost:3000/api 🔥')
});
