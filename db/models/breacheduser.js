"use strict";
module.exports = (sequelize, DataTypes) => {
  const BreachedHash = sequelize.define("BreachedHash", {
    sha1: DataTypes.STRING,
    breachId: DataTypes.INTEGER,
    notified: DataTypes.DATE,
  }, {});
  BreachedHash.associate = function(models) {
    BreachedHash.belongsTo(models.Breach, { "as": "Breaches" });
  };
  return BreachedHash;
};
