// play.js
const { connect } = require("./client"); // Import the connect function from client.js

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // Pass the 'key' to handleUserInput
  stdin.on("data", (key) => handleUserInput(key)); 
  
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
};

setupInput();