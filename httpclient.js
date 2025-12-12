/**
 * SOURCES:
 * - Node.js http docs (response is a stream; 'data' events) :contentReference[oaicite:15]{index=15}
 *
 * Goal: HTTP GET a URL and print the response body to stdout.
 */

const http = require('node:http');

const url = process.argv[2];

http.get(url, (res) => {
  // Ensure we receive strings instead of Buffer chunks
  res.setEncoding('utf8');

  // Streams emit 'data' chunks as they arrive :contentReference[oaicite:16]{index=16}
  res.on('data', (chunk) => {
    console.log(chunk);
  });

  res.on('error', (err) => {
    console.error(err);
  });
}).on('error', (err) => {
  console.error(err);
});
