// input.js
const {
  MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  CONTROL_C,
} = require("./constants");
// Stores the active TCP connection object.
let connection;
// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => handleUserInput(key));

  return stdin;
};

const handleUserInput = function (key) {
  if (key === MOVE_UP_KEY) {
    // w
    connection.write("Move: up");
  }
  if (key === MOVE_LEFT_KEY) {
    // a
    connection.write("Move: left");
  }
  if (key === MOVE_DOWN_KEY) {
    // s
    connection.write("Move: down");
  }
  if (key === MOVE_RIGHT_KEY) {
    // d
    connection.write("Move: right");
  }
  if (key === CONTROL_C) {
    // crtl+c
    process.exit();
  }
  if (key === "1") {
    // 1
    connection.write("Say: LOL");
  }
  if (key === "2") {
    // 2
    connection.write("Say: Howdy");
  }
};

module.exports = { setupInput };
