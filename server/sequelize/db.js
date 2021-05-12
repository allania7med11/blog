const { Sequelize } = require("sequelize");
const { host, user, password } = process.env;

var sequelize = new Sequelize("learning", user, password, {
  host: host,
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

module.exports = sequelize
