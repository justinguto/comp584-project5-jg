/**
 * SOURCES:
 * - learnyounode modular pattern guidance (module.exports) :contentReference[oaicite:14]{index=14}
 *
 * Goal: use your own module to do the filtering.
 */

const listFiltered = require('./06-ls-module');

const dir = process.argv[2];
const ext = process.argv[3];

listFiltered(dir, ext, (err, filtered) => {
  if (err) {
    console.error(err);
    return;
  }

  filtered.forEach((name) => console.log(name));
});
