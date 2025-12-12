/**
 * SOURCES:
 * - Node.js net docs (TCP servers & sockets) :contentReference[oaicite:19]{index=19}
 *
 * Goal: create a TCP server that writes the current date/time in format:
 * "YYYY-MM-DD hh:mm\n"
 * then closes the connection.
 */

const net = require('node:net');

const port = Number(process.argv[2]);

function pad2(n) {
  return String(n).padStart(2, '0');
}

const server = net.createServer((socket) => {
  const d = new Date();

  const year = d.getFullYear();
  const month = pad2(d.getMonth() + 1); // getMonth() is 0-based
  const day = pad2(d.getDate());
  const hour = pad2(d.getHours());
  const minute = pad2(d.getMinutes());

  const out = `${year}-${month}-${day} ${hour}:${minute}\n`;

  // socket.end(data) writes then half-closes (FIN) :contentReference[oaicite:20]{index=20}
  socket.end(out);
});

server.listen(port);
