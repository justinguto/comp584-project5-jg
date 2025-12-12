/**
 * SOURCES:
 * - Node.js fs docs (readdir) :contentReference[oaicite:9]{index=9}
 * - Node.js path.extname docs :contentReference[oaicite:10]{index=10}
 *
 * Goal: print files in a directory filtered by extension (no dot in input).
 * Example: node 05-filtered-ls.js mydir js
 */

const fs = require('node:fs');
const path = require('node:path');

const dir = process.argv[2];
const ext = process.argv[3]; // ex: "js" (no dot)

fs.readdir(dir, (err, list) => {
  if (err) {
    console.error(err);
    return;
  }

  list
    .filter((name) => path.extname(name) === `.${ext}`) // extname includes dot :contentReference[oaicite:11]{index=11}
    .forEach((name) => console.log(name));
});
