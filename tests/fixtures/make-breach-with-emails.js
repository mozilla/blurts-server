"use strict";

require("dotenv").load();

const DBUtils = require("../../db/utils");


const extraTestEmail = process.argv[2];

const sampleBreaches = [
  {
    name: "LinkedIn",
    emails: [ "test1@test.com", "test2@test.com" ],
  },
  {
    name: "Adobe",
    emails: [ "test2@test.com", "test3@test.com" ],
  },
  {
    name: "AllMusic",
    emails: [ "test3@test.com", "test1@test.com" ],
  },
];

(async () => {
  for (const sB of sampleBreaches) {
    const breach = await DBUtils.getBreachByName(sB.name);
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
  const breach = await DBUtils.getBreachByName("LinkedIn");
  console.log(breach);
  await DBUtils.setBreachedHashNotified(breach, testEmail);
  // eslint-disable-next-line no-process-exit
  process.exit();
})();
