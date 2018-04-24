"use strict";

require("dotenv").load();

const DBUtils = require("../../db/utils");


const extraTestEmail = process.argv[2];

const sampleBreaches = [
  {
    name: "Test Breach 1",
    meta: {
      date: "1/1/1",
      dataClasses: "a, b, c",
      acCount: 123,
    },
    emails: [ "test1@test.com", "test2@test.com" ],
  },
  {
    name: "Test Breach 2",
    meta: {
      date: "2/2/2",
      dataClasses: "d, e, f",
      acCount: 456,
    },
    emails: [ "test2@test.com", "test3@test.com" ],
  },
  {
    name: "Test Breach 3",
    meta: {
      date: "3/3/3",
      dataClasses: "g, h, i",
      acCount: 789,
    },
    emails: [ "test3@test.com", "test1@test.com" ],
  },
];

(async () => {
  for (const sB of sampleBreaches) {
    await DBUtils.createBreach(sB.name, sB.meta);
    for (const e of sB.emails) {
      await DBUtils.addBreachedEmail(sB.name, e);
      if (extraTestEmail) {
        DBUtils.addBreachedEmail(sB.name, extraTestEmail);
      }
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
