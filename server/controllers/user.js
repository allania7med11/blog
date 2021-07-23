const { models } = require("../sequelize");
const passport = require("../middlewares/auth");

module.exports = {
  create: async (req, res) => {
    let { username, email, password } = req.body;
    try {
      let data = await models.user.create({ username, email, password });
      res.send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  login: [passport.authenticate("local"), function (req, res) {
    const { username, email } = req.user;
    res.send(JSON.stringify({ username, email }));
  }],
  current: (req, res) => {
    if (req.user) {
      const { username, email } = req.user;
      res.send(JSON.stringify({ username, email }));
    } else {
      res.sendStatus(401);
    }
  },
  logout: function (req, res) {
    req.logout();
    res.sendStatus(200);
  }
};
