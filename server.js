const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const radius = queryObject.radius;

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

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});