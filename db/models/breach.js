"use strict";

module.exports = (sequelize, DataTypes) => {
  const Breach = sequelize.define("Breach", {
    name: DataTypes.STRING,
  }, {});

  Breach.associate = function(models) {
    Breach.belongsToMany(models.EmailHash, { through: "BreachedHashes" });
  };

  return Breach;
};
