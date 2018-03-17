"use strict";

const crypto = require("crypto");

module.exports = (sequelize, DataTypes) => {

  const Subscriber = sequelize.define("Subscriber", {
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

  Subscriber.associate = function(models) {
    Subscriber.hasOne(models.EmailHash);
  };

  Subscriber.prototype.saveSha1 = async function() {
    this.sha1 = crypto.createHash("sha1").update(this.email).digest("hex");
    await this.save();
    return this.sha1;
  };

  return Subscriber;
};
