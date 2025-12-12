/**
 * SOURCES:
 * - learnyounode workshopper instructions :contentReference[oaicite:3]{index=3}
 *
 * Goal: sum all command line args (after node + script name).
 * Example: node 02-baby-steps.js 1 2 3  => 6
 */

// process.argv is an array of strings.
// argv[0] = node path, argv[1] = script path, argv[2...] = user args.
let sum = 0;

for (let i = 2; i < process.argv.length; i++) {
  sum += Number(process.argv[i]); // Number("5") -> 5
}

console.log(sum);
