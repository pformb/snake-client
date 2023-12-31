// client.js
const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  });

  conn.on("connect", () => {
    console.log("u r connected");
    conn.write("Name: PMF");
  });

  conn.on("timeout", () => {
    console.log("you ded cuz you idled");
  });

  // Handle incoming data
  conn.on("data", (data) => {
    console.log("Received data from the server:", data);
    // You can process the data here or perform other actions as needed.
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };
