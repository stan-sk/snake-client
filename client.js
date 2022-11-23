const net = require("net");

const host = "165.227.47.243";
const port = 50541;
const connectionConfig = {
  host,
  port
};
// establishes a connection with the game server
const connect = function () {
const conn = net.createConnection(connectionConfig);

  // interpret incoming data as text
conn.setEncoding("utf8");

conn.on("connect", () => {
  console.log("you are connected to the server");
});

conn.on("data", (data) => {
  console.log(data);
});

return conn;
};


module.exports = {connect};