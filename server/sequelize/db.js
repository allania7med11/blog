const { Sequelize } = require("sequelize");
const { host, user, password, database } = process.env;
var sequelize = new Sequelize(database, user, password, {
  host: host,
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

module.exports = sequelize
