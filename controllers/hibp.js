"use strict";

const AppConstants = require("../app-constants");
const DB = require("../db/DB");
const HIBP = require("../hibp");


async function notify (req, res) {
  const hashes = req.body.hashSuffixes.map(suffix=>req.body.hashPrefix + suffix);

  const subscribers = await DB.getSubscribersByHashes(hashes);

  const reqBreachName = req.body.breachName.toLowerCase();
  const breach = req.app.locals.breaches.find(breach => breach.Name.toLowerCase() === reqBreachName);

  console.log(`Found ${subscribers.length} subscribers in ${breach.Name}. Notifying ...`);
  // TODO: loop over subscribers and send breach notification(s)
  res.status(200);
  res.json(
    {info: "Notified subscribers of breach."}
  );
}


async function breaches (req, res, next) {
  const clientMostRecentBreachDateTime = new Date(req.headers["if-modified-since"]);
  const serverMostRecentBreachDateTime = req.app.locals.mostRecentBreachDateTime;
  if (clientMostRecentBreachDateTime < serverMostRecentBreachDateTime) {
    res.append("Last-Modified", serverMostRecentBreachDateTime);
    res.json(HIBP.filterOutUnsafeBreaches(req.app.locals.breaches));
  } else {
    res.sendStatus(304);
  }

  if (new Date() - req.app.locals.breachesLoadedDateTime >= AppConstants.HIBP_RELOAD_BREACHES_TIMER) {
    await HIBP.loadBreachesIntoApp(req.app);
    const freshBreachesLatestBreachDateTime = HIBP.getLatestBreachDateTime(req.app.locals.breaches);
    if (freshBreachesLatestBreachDateTime > req.app.locals.mostRecentBreachDateTime) {
      req.app.locals.mostRecentBreachDateTime = freshBreachesLatestBreachDateTime;
    }
  }
}


module.exports = {
  notify,
  breaches,
};
