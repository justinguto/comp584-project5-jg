/**
 * SOURCES:
 * - Node.js fs docs (readFileSync) :contentReference[oaicite:4]{index=4}
 * - learnyounode workshopper instructions :contentReference[oaicite:5]{index=5}
 *
 * Goal: read a file synchronously and print number of newline characters.
 */

const fs = require('node:fs');

const filePath = process.argv[2];

// readFileSync returns a Buffer by default; convert to string so we can split.
const contents = fs.readFileSync(filePath, 'utf8');

// Split on '\n'. If file ends with newline, split still behaves fine for this exercise.
const lines = contents.split('\n');

// Newline count is lines - 1
console.log(lines.length - 1);
