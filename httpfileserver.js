/**
 * SOURCES:
 * - Node.js http docs (createServer) :contentReference[oaicite:21]{index=21}
 * - Node.js fs docs (createReadStream) :contentReference[oaicite:22]{index=22}
 * - Node.js streams: readable.pipe(writable) :contentReference[oaicite:23]{index=23}
 *
 * Goal: HTTP server that serves a file via streaming.
 * argv[2] = port, argv[3] = file path
 */

const http = require('node:http');
const fs = require('node:fs');

const port = Number(process.argv[2]);
const filePath = process.argv[3];

const server = http.createServer((req, res) => {
  // Stream the file directly into the response (no buffering the whole file)
  const stream = fs.createReadStream(filePath);

  stream.on('error', (err) => {
    res.statusCode = 500;
    res.end(String(err));
  });

  stream.pipe(res);
});

server.listen(port);
