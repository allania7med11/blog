function applyExtraSetup(sequelize) {
    const { section } = sequelize.models;
    section.hasMany(section);
    section.belongsTo(section);
}

module.exports = { applyExtraSetup };
