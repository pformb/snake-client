// play.js

const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541  // PORT number here,
  });

  conn.on("connect", () => {
    console.log("u r connected");
  });

  conn.on('timeout', () => {
    console.log("you ded cuz you idled");
  });

  // Handle incoming data
  conn.on('data', (data) => {
    console.log("Received data from the server:", data);
    // You can process the data here or perform other actions as needed.
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();
