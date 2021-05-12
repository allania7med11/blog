const { models } = require("../sequelize");

module.exports = {
  create: async (req, res) => {
    let obj = req.body;
    try {
      let data = await models.section.create(obj);
      res.send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  read: async (req, res) => {
    var id = req.params.id;
    try {
      let data;
      if (!id) {
        let sections = await models.section.findAll({
          where: { sectionId: null },
          include: models.section,
        });
        data = { sections };
      } else {
        data = await models.section.findOne({
          where: { id },
          include: models.section,
        });
      }
      res.send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  update: async (req, res) => {
    let id = req.params.id;
    let obj = req.body;
    try {
      let data = await models.section.update(obj, {
        where: {
          id: id,
        },
      });
      res.send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  delete: async (req, res) => {
    let id = req.params.id;
    try {
      let data = await models.section.destroy({
        where: {
          id: id,
        },
      });
      res.send({ data });
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
