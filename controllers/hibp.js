"use strict";

const AppConstants = require("../app-constants");
const DB = require("../db/DB");
const HIBP = require("../hibp");


async function notify (req, res) {
  const hashes = req.body.hashSuffixes.map(suffix=>req.body.hashPrefix + suffix);

  const subscribers = await DB.getSubscribersByHashes(hashes);

  const reqBreachName = req.body.breachName.toLowerCase();
  const breach = HIBP.breaches.find(breach => breach.Name.toLowerCase() === reqBreachName);

  console.log(`Found ${subscribers.length} subscribers in ${breach.Name}. Notifying ...`);
  // TODO: loop over subscribers and send breach notification(s)
  res.status(200);
  res.json(
    {info: "Notified subscribers of breach."}
  );
}


/*
 * Endpoint for clients to request latest breaches data.
 * Clients should send the date-time of the most recent breach they know in the
 * If-Modified-Since HTTP header.
 *
   > GET /hibp/breaches HTTP/1.1
   > If-Modified-Since: 2018-08-25T00:00:00
 *
 * If the client already has the latest breach, it will receive a 304:
 *
 * < HTTP/1.1 304 Not Modified
 *
 * ... or, if the client needs new breach data, it will receive a 200 with the
 * latest breach date in the Last-Modified header with a full body of breach data:
 *
 * < HTTP/1.1 200 OK
 * < Last-Modified: Thu Aug 23 2018 23:36:24 GMT-0500 (CDT)
 * <
 * [{"Title":"000webhost","Name":"000webhost", ...}]
 *
 * The client should store the 'Last-Modified' value and start sending it in
 * its 'If-Modified-Since' header in future requests.
 */
async function breaches (req, res, next) {
  const clientMostRecentBreachDateTime = new Date(req.headers["if-modified-since"]);
  const serverMostRecentBreachDateTime = HIBP.mostRecentBreachDateTime;
  if (clientMostRecentBreachDateTime < serverMostRecentBreachDateTime) {
    res.append("Last-Modified", serverMostRecentBreachDateTime);
    res.json(HIBP.filterOutUnsafeBreaches(HIBP.breaches));
  } else {
    res.sendStatus(304);
  }

  if (new Date() - HIBP.breachesLoadedDateTime >= AppConstants.HIBP_RELOAD_BREACHES_TIMER) {
    await HIBP.loadBreachesIntoApp(req.app);
    const freshBreachesLatestBreachDateTime = HIBP.getLatestBreachDateTime(HIBP.breaches);
    if (freshBreachesLatestBreachDateTime > HIBP.mostRecentBreachDateTime) {
      HIBP.mostRecentBreachDateTime = freshBreachesLatestBreachDateTime;
    }
  }
}


module.exports = {
  notify,
  breaches,
};
