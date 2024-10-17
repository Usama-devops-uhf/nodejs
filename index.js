const http = require('http');
const port = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node this is my first node js pipeline!\n'
  const msg1 = 'this is my second  build!\n'
  res.end(msg1);
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
