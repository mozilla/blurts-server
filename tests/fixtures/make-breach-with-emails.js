"use strict";

require("dotenv").load();

const models = require("../../db/models");
const crypto = require("crypto");

const sampleBreaches = [
  {
    name: "Test Breach 1",
    emails: [ "test1@test.com", "test2@test.com" ],
  },
  {
    name: "Test Breach 2",
    emails: [ "test2@test.com", "test3@test.com" ],
  },
  {
    name: "Test Breach 3",
    emails: [ "test3@test.com", "test1@test.com" ],
  },
];

models.sequelize.sync().then(async () => {
  for (const sB of sampleBreaches) {
    const [breach] = await models.Breach.findOrCreate({ where: { name: sB.name }});
    for (const e of sB.emails) {
      const [emailHash] = await models.EmailHash.findOrCreate({where: { sha1: getSha1(e) }});
      await emailHash.addBreach(breach);
    }
  }

  const testEmail = "test1@test.com";
  const emailHash = await models.EmailHash.findOne({ where: { sha1: getSha1(testEmail) }});
  const foundBreaches = (await emailHash.getBreaches()).map(aBreach => aBreach.dataValues.name);
  console.log(`\n\n${testEmail} was found in the following breaches:\n`);
  console.log(foundBreaches);
  process.exit();
});

function getSha1(email) {
  return crypto.createHash("sha1").update(email.toLowerCase()).digest("hex");
}
