/**
 * SOURCES:
 * - Node.js "Reading files with Node.js" (fs.readFile callback style) :contentReference[oaicite:6]{index=6}
 * - Node.js errors: callbacks typically pass (err, data) :contentReference[oaicite:7]{index=7}
 *
 * Goal: async read a file and print number of newlines.
 */

const fs = require('node:fs');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', (err, contents) => {
  // In Node, async callbacks usually follow "error-first callback" convention:
  // first argument is an Error if something went wrong, otherwise it's null/undefined. :contentReference[oaicite:8]{index=8}
  if (err) {
    console.error(err);
    return;
  }

  const lines = contents.split('\n');
  console.log(lines.length - 1);
});
