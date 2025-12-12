/**
 * SOURCES:
 * - Node.js http docs :contentReference[oaicite:24]{index=24}
 * - Node.js streams concept (req/res are streams) :contentReference[oaicite:25]{index=25}
 *
 * Goal: HTTP server that uppercases POST body and sends it back.
 */

const http = require('node:http');

const port = Number(process.argv[2]);

const server = http.createServer((req, res) => {
  // Only handle POST per the exercise expectation
  if (req.method !== 'POST') {
    res.statusCode = 405;
    return res.end('Send a POST\n');
  }

  req.setEncoding('utf8');

  req.on('data', (chunk) => {
    res.write(chunk.toUpperCase());
  });

  req.on('end', () => {
    res.end();
  });

  req.on('error', (err) => {
    res.statusCode = 500;
    res.end(String(err));
  });
});

server.listen(port);
