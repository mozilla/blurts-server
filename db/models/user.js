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

  User.prototype.saveSha1 = async function() {
    this.sha1 = crypto.createHash("sha1").update(this.email).digest("hex");
    await this.save();
    return this.sha1;
  };

  return User;
};
