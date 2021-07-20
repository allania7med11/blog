const { models } = require("../sequelize");


module.exports = {
  create: async (req, res) => {
    let { username, email, password } = req.body;
    try {
      let data = await models.user.create({ username, email, password });
      res.send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  }
};
