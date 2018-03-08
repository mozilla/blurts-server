"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    email: DataTypes.STRING,
    sha1: DataTypes.STRING,
  }, {});
  User.associate = function(models) {
    User.hasMany(models.BreachedUser);
  };
  return User;
};
