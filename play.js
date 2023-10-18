// play.js
const { connect } = require("./client"); // Import the connect function from client.js
const { setupInput } = require('./input');

console.log("Connecting ...");
connect();


setupInput();