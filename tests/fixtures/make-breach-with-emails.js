"use strict";

require("dotenv").load();
const Knex = require("knex");
const knexConfig = require("../../db/knexfile");
const { Model } = require("objection");

const DBUtils = require("../../db/utils");

const knex = Knex(knexConfig);
Model.knex(knex);

const sampleBreaches = [
  {
    name: "Test Breach 1",
    meta: { },
    emails: [ "test1@test.com", "test2@test.com" ],
  },
  {
    name: "Test Breach 2",
    meta: { },
    emails: [ "test2@test.com", "test3@test.com" ],
  },
  {
    name: "Test Breach 3",
    meta: { },
    emails: [ "test3@test.com", "test1@test.com" ],
  },
];

(async () => {
  for (const sB of sampleBreaches) {
    await DBUtils.createBreach(sB.name, sB.meta);
    for (const e of sB.emails) {
      await DBUtils.addBreachedEmail(sB.name, e);
    }
  }

  const testEmail = "test1@test.com";
  const foundBreaches = await DBUtils.getBreachesForEmail(testEmail);
  await DBUtils.deleteBreach(999999);
  console.log(`\n\n${testEmail} was found in the following breaches:\n`);
  console.log(foundBreaches.map(b => b.name));
  // eslint-disable-next-line no-process-exit
  process.exit();
})();
