const Sequelize = require("sequelize");
const sequelize = new Sequelize("node_js", "root", "Shivani@28", {
  dailect: "mysql",
  host: "localhost",
});

module.exports = Sequelize;
