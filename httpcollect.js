/**
 * SOURCES:
 * - Node.js http docs: responses are streams; listen for 'data' and 'end' :contentReference[oaicite:17]{index=17}
 *
 * Goal: collect the full response, then print:
 * 1) number of characters
 * 2) the full response string
 */

const http = require('node:http');

const url = process.argv[2];

http.get(url, (res) => {
  res.setEncoding('utf8');

  let all = '';

  res.on('data', (chunk) => {
    all += chunk;
  });

  res.on('end', () => {
    console.log(all.length);
    console.log(all);
  });

  res.on('error', (err) => console.error(err));
}).on('error', (err) => console.error(err));
