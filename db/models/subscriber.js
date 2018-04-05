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
  }, {});

  Subscriber.associate = function(models) {
    Subscriber.hasOne(models.EmailHash);
  };

  Subscriber.prototype.saveSha1 = async function(models) {
    const sha1 = crypto.createHash("sha1").update(this.email).digest("hex");
    const emailHash = await models.EmailHash.findOrCreate( { where: { sha1 }});
    await this.setEmailHash(emailHash);
  };

  return Subscriber;
};
