const sequelize = require("./db");
const { applyExtraSetup } = require("./extra-setup");
const modelDefiners = [
  require("./models/section"),
  // Add more models here...
  // require('./models/item'),
];

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}
applyExtraSetup(sequelize);
sequelize.sync({ alter: true })
module.exports = sequelize;