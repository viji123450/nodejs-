const { createServer } = require('http');
const fs = require('fs');
const path = require('path');

const server = createServer((req, res) => {
  // Determine the file path based on the request URL
  let filePath = path.join(__dirname, req.url === '/' ? 'education.html' : req.url);
  
  // Determine the content type based on the file extension
  let contentType = 'text/html';

  switch (path.extname(filePath)) {
    case '.css':
      contentType = 'text/css';
      break;
    case '.js':
      contentType = 'application/javascript';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpeg';
      break;
    case '.gif':
      contentType = 'image/gif';
      break;
    // Add more cases as needed
  }

  // Read the file and serve it
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 - Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});



