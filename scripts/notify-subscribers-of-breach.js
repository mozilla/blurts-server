"use strict";

const breachName = process.argv[2];
if (!breachName) {
  throw("Usage: node notify-subscribers-of-breach.js \"breach-name\"");
}

const DBUtils = require("../db/utils");
const EmailUtils = require("../email-utils");


EmailUtils.init();


async function notifySubscribersOfNewBreach(breachName) {
  const breach = await DBUtils.getBreachByName(breachName);
  const breachedSubscribers = await DBUtils.getSubscribersForBreach(breach);
  for (const subscriber of breachedSubscribers) {
    const subject = `${subscriber.email} was involved in the ${breach.name} breach.`;
    try {
      await EmailUtils.sendEmail(
        subscriber.email,
        subject,
        "breach_notification",
        { email: subscriber.email, breach: breach }
      );
      // TODO: mark the subscriber as already notified for this breach
    } catch (e) {
      console.log(e);
    }
  }
  return;
}

(async () => {
  await notifySubscribersOfNewBreach(breachName);
})();
