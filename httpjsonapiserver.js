/**
 * SOURCES:
 * - Official learnyounode problem statement: HTTP JSON API Server :contentReference[oaicite:26]{index=26}
 * - Node.js http docs :contentReference[oaicite:27]{index=27}
 *
 * Goal:
 * - GET /api/parsetime?iso=... => { hour, minute, second }
 * - GET /api/unixtime?iso=...  => { unixtime }
 */

const http = require('node:http');
const { URL } = require('node:url'); // WHATWG URL parser (built-in)

const port = Number(process.argv[2]);

function parseTime(iso) {
  const d = new Date(iso);
  return {
    hour: d.getHours(),
    minute: d.getMinutes(),
    second: d.getSeconds(),
  };
}

function unixTime(iso) {
  const d = new Date(iso);
  return { unixtime: d.getTime() };
}

const server = http.createServer((req, res) => {
  // Build a full URL so we can use URL() even though req.url is only a path+query
  const url = new URL(req.url, 'http://localhost');

  if (req.method !== 'GET') {
    res.statusCode = 405;
    return res.end();
  }

  const iso = url.searchParams.get('iso');

  let result;

  if (url.pathname === '/api/parsetime') {
    result = parseTime(iso);
  } else if (url.pathname === '/api/unixtime') {
    result = unixTime(iso);
  }

  if (!result) {
    res.statusCode = 404;
    return res.end();
  }

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(result));
});

server.listen(port);
