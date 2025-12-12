/**
 * SOURCES:
 * - Node.js fs docs (readdir) :contentReference[oaicite:12]{index=12}
 * - Node.js path.extname docs :contentReference[oaicite:13]{index=13}
 *
 * This module exports ONE function that:
 * - reads a directory
 * - filters by extension
 * - calls a callback with (err, filteredList)
 */

const fs = require('node:fs');
const path = require('node:path');

module.exports = function listFiltered(dir, ext, callback) {
  fs.readdir(dir, (err, list) => {
    if (err) return callback(err);

    const filtered = list.filter((name) => path.extname(name) === `.${ext}`);
    callback(null, filtered);
  });
};
