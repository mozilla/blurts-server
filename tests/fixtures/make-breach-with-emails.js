"use strict";

require("dotenv").load();

const DBUtils = require("../../db/utils");


const extraTestEmail = process.argv[2];

const sampleBreaches = [
  {
    name: "Linkedin",
    meta: {
      date: "5 May 2012",
      dataClasses: "Email addresses, Passwords",
      acCount: "164,611,595",
    },
    emails: [ "test1@test.com", "test2@test.com" ],
  },
  {
    name: "Adobe",
    meta: {
      date: "4 October 2013",
      dataClasses: "Email addresses, Password hints, Passwords, Usernames",
      acCount: "152,445,165",
    },
    emails: [ "test2@test.com", "test3@test.com" ],
  },
  {
    name: "AllMusic",
    meta: {
      date: "6 December 2015",
      dataClasses: "Email addresses, IP addresses, Passwords, Usernames, Website activity",
      acCount: "1,436,486",
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
