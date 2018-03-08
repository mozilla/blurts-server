"use strict";
module.exports = (sequelize, DataTypes) => {
  const BreachedUser = sequelize.define("BreachedUser", {
    userId: DataTypes.INTEGER,
    breachId: DataTypes.INTEGER,
    notified: DataTypes.DATE,
  }, {});
  BreachedUser.associate = function(models) {
    BreachedUser.belongsTo(models.User);
    BreachedUser.belongsTo(models.Breach);
  };
  return BreachedUser;
};
