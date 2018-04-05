"use strict";

const crypto = require("crypto");

module.exports = (sequelize, DataTypes) => {

  const EmailHash = sequelize.import("./emailhash");

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

  Subscriber.associate = function() {
    Subscriber.hasOne(EmailHash);
  };

  Subscriber.prototype.saveSha1 = async function() {
    const sha1 = crypto.createHash("sha1").update(this.email).digest("hex");
    const emailHash = await EmailHash.findOrCreate( { where: { sha1 }});
    await this.setEmailHash(emailHash.id);
  };

  return Subscriber;
};
