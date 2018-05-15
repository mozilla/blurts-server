"use strict";

const arg = require("arg");

require("dotenv").load();

const DBUtils = require("../../db/utils");


const args = arg({
  "--createAMBreach": Boolean,
  "--extraTestEmail": String,
  "--help": Boolean,
});

if (args["--help"]) {
  console.log("Usage: node make-breach-with-emails.js [--createAMBreach] [--extraTestEmail=<...>]");
  console.log("--createAMBreach creates the 'AllMusic' test fixture breach.");
  console.log("--extraTestEmail adds the supplied test email address and includes it in the LinkedIn, Adobe, and AllMusic breaches.");
  // We can `process.exit()` here since it's a CLI script.
  // eslint-disable-next-line no-process-exit
  process.exit();
}

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
  if (args["--createAMBreach"]) {
    await DBUtils.createBreach("AllMusic", {
      Name: "AllMusic",
      BreachDate: "2015-012-06",
      DataClasses: ["Email addresses", "IP addresses", "Passwords", "Usernames", "Website activity"],
      PwnCount: 1436486,
    });
  }
  for (const sB of sampleBreaches) {
    await DBUtils.getBreachByName(sB.name);
    for (const e of sB.emails) {
      await DBUtils.addBreachedEmail(sB.name, e);
      if (args["--extraTestEmail"]) {
        DBUtils.addBreachedEmail(sB.name, args["--extraTestEmail"]);
      }
    }
  }

  const testEmail = "test1@test.com";
  await DBUtils.deleteBreach(999999);
  const breach = await DBUtils.getBreachByName("LinkedIn");
  await DBUtils.setBreachedHashNotified(breach, testEmail);
  // eslint-disable-next-line no-process-exit
  process.exit();
})();
