"use strict";

module.exports = (sequelize, DataTypes) => {
  const Breach = sequelize.define("Breach", {
    name: DataTypes.STRING,
  }, {});

  Breach.associate = function(models) {
    Breach.hasMany(models.BreachedHash, { "as": "Hashes" });
  };

  return Breach;
};
