"use strict";

const crypto = require("crypto");

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      validate: { isEmail: true },
    },
    verificationToken: {
      type: DataTypes.STRING,
      defaultValue: function () {
        return crypto.randomBytes(40).toString("hex");
      },
    },
    sha1: DataTypes.STRING,
  }, {});

  User.associate = function(models) {
    User.hasMany(models.BreachedUser);
  };

  return User;
};
