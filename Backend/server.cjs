const http = require('http');
const fs = require('fs');
const path = require('path');

// Serverinställningar
const PORT = 3001;

// Skapa server
const server = http.createServer((req, res) => {
  // Lägg till CORS-headrar
  res.setHeader('Access-Control-Allow-Origin', '*'); // Tillåter förfrågningar från alla domäner
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Tillåtna metoder
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Tillåtna headers

  // OPTIONS-förfrågan (Preflight)
  if (req.method === 'OPTIONS') {
    res.writeHead(204); // No Content
    res.end();
    return;
  }

  if (req.url === '/products' && req.method === 'GET') {
    // Läs customer.json
    const filePath = path.join(__dirname, 'customer.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
        return;
      }

      // Skicka JSON-data
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

// Starta servern
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
