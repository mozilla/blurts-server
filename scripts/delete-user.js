"use strict";

const readline = require("readline");

const DB = require("../db/DB");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

(async () => {
  rl.question("What FXA primary email address? ", first_answer => {
    rl.question("Please re-type the email address to confirm. ", async (second_answer) => {
      if (first_answer !== second_answer) {
        console.error("Email addresses do not match.");
        process.exit(1);
      }

      const subscriber = await DB.getSubscriberByEmail(second_answer);
      if (!subscriber) {
        console.error("Could not find subscriber.");
        process.exit(1);
      }

      await DB.deleteEmailAddressesByUid(subscriber.id);
      await DB.deleteSubscriberByFxAUID(subscriber.fxa_uid);
      console.log("Deleted email_addresses and subscribers records.");
      process.exit();
    });
  });
})();
