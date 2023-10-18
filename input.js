// input.js

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
  if (key === '\u0077') { // w
    connection.write("Move: up");
  } 
  if (key === '\u0061') { // a
    connection.write("Move: left");
  }
  if (key === '\u0073') { // s
    connection.write("Move: down");
  }
  if (key === '\u0064') { // d
    connection.write("Move: right");
  }
  if (key === '\u0003') { // crtl+c
    process.exit();
  }
    if (key === '1') { // 1
      connection.write("Say: LOL");
    }
    if (key === '2') { // 2
      connection.write("Say: u r bad!");
    }
  
};

module.exports = { setupInput };

