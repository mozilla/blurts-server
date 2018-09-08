"use strict";

const AppConstants = require("../app-constants");
const DB = require("../db/DB");
const EmailUtils = require("../email-utils");
const HIBP = require("../hibp");
const sha1 = require("../sha1-utils");
const HBSHelpers = require("../hbs-helpers");

async function notify (req, res) {

  const hashes = req.body.hashSuffixes.map(suffix=>req.body.hashPrefix + suffix);
  const subscribers = await DB.getSubscribersByHashes(hashes);

  const reqBreachName = req.body.breachName.toLowerCase();
  let breachAlert = HIBP.getBreachByName(req.app.locals.breaches, reqBreachName);
  
  if (!breachAlert) {
    // If breach isn't found, try to reload breaches from HIBP
    await HIBP.loadBreachesIntoApp(req.app);
    breachAlert = HIBP.getBreachByName(req.app.locals.breaches, reqBreachName);
    if (!breachAlert) {
      // If breach *still* isn't found, we have a real error
      throw new Error("Unrecognized breach: " + reqBreachName);
    }
  }

  console.log(`Found ${subscribers.length} subscribers in ${breachAlert.Name}. Notifying ...`);

  const notifiedSubscribers = [];

  for (const subscriber of subscribers) {
    const email = subscriber.email;

    const unsafeBreachesForEmail = await HIBP.getUnsafeBreachesForEmail(
      sha1(email),
      req.app.locals.breaches
    );

    if (!notifiedSubscribers.includes(email)) {
      console.log(email);
      await EmailUtils.sendEmail(
        email,
        "Firefox Monitor Alert : Your account was involved in a breach.",
        "report",
        { 
          email,
          date: HBSHelpers.prettyDate(new Date()),
          breachAlert, 
          unsafeBreachesForEmail, 
          SERVER_URL: req.app.locals.SERVER_URL,
        }
      );
      notifiedSubscribers.push(email);
    }
  }
  console.log(`Notified ${notifiedSubscribers.length} unique subscribers.`);
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
  const serverMostRecentBreachDateTime = req.app.locals.mostRecentBreachDateTime;
  if (clientMostRecentBreachDateTime < serverMostRecentBreachDateTime) {
    res.append("Last-Modified", serverMostRecentBreachDateTime);
    res.json(req.app.locals.breaches);
  } else {
    res.sendStatus(304);
  }

  if (Date.now() - req.app.locals.breachesLoadedDateTime >= AppConstants.HIBP_RELOAD_BREACHES_TIMER * 1000) {
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
