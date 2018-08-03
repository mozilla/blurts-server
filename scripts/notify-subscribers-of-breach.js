"use strict";

const DBUtils = require("../db/DB");
const EmailUtils = require("../email-utils");


const breachName = process.argv[2];
if (!breachName) {
  throw("Usage: node notify-subscribers-of-breach.js \"breach-name\"");
}

EmailUtils.init();


async function notifySubscribersOfNewBreach(breachName) {
  // FIXME: TODO: change to load breaches from HIBP
  const breach = await DBUtils.getBreachByName(breachName);
  console.log("Found breach: ", breach);
  // FIXME: TODO: change to updated DB module code
  const breachedSubscribers = await DBUtils.getSubscribersForBreach(breach);
  console.log(`Found ${breachedSubscribers.length} un-notified subscribers in the breach`);
  for (const subscriber of breachedSubscribers) {
    console.log(`Sending email to subscriber ID: ${subscriber.id} ...`);
    const subject = `${subscriber.email} was involved in the ${breach.name} breach.`;
    try {
      await EmailUtils.sendEmail(
        subscriber.email,
        subject,
        "breach_notification",
        { email: subscriber.email, breach: breach }
      );
      console.log("DONE sending email.");
      console.log("Setting notified=true ...");
      // FIXME: TODO: change to updated DB module code
      await DBUtils.setBreachedHashNotified(breach, subscriber.email);
      console.log("DONE setting notified=true");
    } catch (e) {
      console.log(e);
    }
  }
}

(async () => {
  await notifySubscribersOfNewBreach(breachName);
  process.exit();
})();
