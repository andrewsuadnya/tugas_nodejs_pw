const express = require('express');
const path = require('path');

const app = express();

// Menyajikan file statis dari folder "public"
app.use(express.static(path.join(__dirname, 'public')));

// Menyajikan file index.html saat mengakses root URL ("/")
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint untuk menghitung luas lingkaran
app.get('/calculate-area', (req, res) => {
  const radius = req.query.radius;

  if (radius === undefined) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Error: Please provide a radius parameter in your query string.\n');
  } else {
    const area = Math.PI * radius ** 2;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`The area of a circle with radius ${radius} is ${area}.\n`);
  }
});

// Menjalankan server pada port 3000
app.listen(4000, () => {
  console.log('Server running at http://localhost:4000/');
});
