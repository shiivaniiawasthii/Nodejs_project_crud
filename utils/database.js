const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node_js",
  password: "Shivani@28",
});

module.exports = pool.promise();
