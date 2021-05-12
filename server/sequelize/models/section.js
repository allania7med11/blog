const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("section", {
    type: {
      type: DataTypes.STRING,
      validate:{
        isIn: {
          args: [['page', 'section']],
          msg: "Must be page or section"
        }  
      }
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    body: {
      type: DataTypes.TEXT('long'),
    },
    duration: {
      type: DataTypes.INTEGER,
    },
  });
};
