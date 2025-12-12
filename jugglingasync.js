/**
 * SOURCES:
 * - Node.js http docs (client) :contentReference[oaicite:18]{index=18}
 *
 * Goal: perform 3 HTTP GETs (urls in argv[2], argv[3], argv[4])
 * and print results in the same order as the arguments.
 *
 * Trick: async requests finish in random order, so we store results by index.
 */

const http = require('node:http');

const urls = [process.argv[2], process.argv[3], process.argv[4]];
const results = new Array(3);
let completed = 0;

function fetch(index) {
  http.get(urls[index], (res) => {
    res.setEncoding('utf8');

    let data = '';
    res.on('data', (chunk) => (data += chunk));
    res.on('end', () => {
      results[index] = data;
      completed++;

      // When all 3 are done, print in order
      if (completed === 3) {
        results.forEach((r) => console.log(r));
      }
    });

    res.on('error', (err) => console.error(err));
  }).on('error', (err) => console.error(err));
}

for (let i = 0; i < 3; i++) fetch(i);
