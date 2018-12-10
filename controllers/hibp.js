"use strict";

const { negotiateLanguages, acceptedLanguages } = require("fluent-langneg");

const AppConstants = require("../app-constants");
const DB = require("../db/DB");
const EmailUtils = require("../email-utils");
const HIBP = require("../hibp");
const { LocaleUtils } = require ("../locale-utils");
const HBSHelpers = require("../hbs-helpers");
const mozlog = require("../log");


const log = mozlog("controllers.hibp");


async function notify (req, res) {
  if (!req.token || req.token !== AppConstants.HIBP_NOTIFY_TOKEN) {
    const errorMessage = "HIBP notify endpoint requires valid authorization token.";
    throw new Error(errorMessage);
  }
  if(!["breachName", "hashPrefix", "hashSuffixes"].every(req.body.hasOwnProperty, req.body)) {
    throw new Error("Breach notification requires breachName, hashPrefix, and hashSuffixes.");
  }

  const reqBreachName = req.body.breachName.toLowerCase();
  const reqHashPrefix = req.body.hashPrefix.toLowerCase();
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

  if (breachAlert.IsSpamList || breachAlert.Domain === "" || breachAlert.IsFabricated) {
    log.info(`${breachAlert.Name} is fabricated, a spam list, or not associated with a website. \n Breach Alert not sent.`);
    return res.json(
      {info: "Breach loaded into database."}
    );
  }

  const hashes = req.body.hashSuffixes.map(suffix=>reqHashPrefix + suffix.toLowerCase());
  const subscribers = await DB.getSubscribersByHashes(hashes);


  log.info("notification", { length: subscribers.length, breachAlertName: breachAlert.Name });

  const notifiedSubscribers = [];

  for (const subscriber of subscribers) {
    log.info("notify", {subscriber});

    const email = subscriber.email;
    const requestedLanguage = subscriber.signup_language ? acceptedLanguages(subscriber.signup_language) : "";
    const supportedLocales = negotiateLanguages(
      requestedLanguage,
      req.app.locals.AVAILABLE_LANGUAGES,
      {defaultLocale: "en"}
    );
    const unsubscribeUrl = EmailUtils.unsubscribeUrl(subscriber);

    if (!notifiedSubscribers.includes(email)) {
      await EmailUtils.sendEmail(
        email,
        LocaleUtils.fluentFormat(supportedLocales, "hibp-notify-email-subject"),
        "default_email",
        {
          email,
          supportedLocales,
          date: HBSHelpers.prettyDate(supportedLocales, new Date()),
          unsubscribeUrl,
          breachAlert,
          SERVER_URL: req.app.locals.SERVER_URL,
          buttonValue: LocaleUtils.fluentFormat(supportedLocales, "report-scan-another-email"),
          whichView: "email_partials/report",
        },
      );
      notifiedSubscribers.push(email);
    }
  }
  log.info("notified", { length: notifiedSubscribers.length });
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
  const serverMostRecentBreachDateTime = req.app.locals.mostRecentBreachDateTime;
  const clientMostRecentBreachDateTime = req.headers["if-modified-since"] ? new Date(req.headers["if-modified-since"]) : new Date(0);

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
