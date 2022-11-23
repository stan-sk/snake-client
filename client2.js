const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({     //passing in ab object here
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();



//------------------------------------

// process.stdin.on("data", (message) => {    
//   client.write(message);
// });