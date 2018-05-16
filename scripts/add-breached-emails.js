"use strict";

const arg = require("arg");

require("dotenv").load();

const DBUtils = require("../db/utils");


const args = arg({
  "--extraTestEmail": String,
  "--help": Boolean,
});

if (args["--help"]) {
  console.log("Usage: node add-breached-emails.js [--extraTestEmail=<...>]");
  console.log("Adds test[1-3]@test.com emails to LinkedIn, Adobe, and AllMusic breaches.");
  console.log("--extraTestEmail also adds the supplied test email address and includes it in the LinkedIn, Adobe, and AllMusic breaches.");
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
  for (const sB of sampleBreaches) {
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
