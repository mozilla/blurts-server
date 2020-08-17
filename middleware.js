"use strict";

const { URLSearchParams } = require("url");

const { negotiateLanguages, acceptedLanguages } = require("fluent-langneg");
const Sentry = require("@sentry/node");

const AppConstants = require("./app-constants");
Sentry.init({
  dsn: AppConstants.SENTRY_DSN,
  environment: AppConstants.NODE_ENV,
});
const DB = require("./db/DB");
const { FXA } = require("./lib/fxa");
const { FluentError } = require("./locale-utils");
const mozlog = require("./log");

const HIBP = require("./hibp");

const log = mozlog("middleware");


// adds the request object to a res.local var
function addRequestToResponse (req, res, next) {
  res.locals.req = req;
  next();
}


// picks available language by Accept-Language and assigns to request
function pickLanguage (req, res, next) {
  res.vary("Accept-Language");
  const requestedLanguage = acceptedLanguages(req.headers["accept-language"]);
  const supportedLocales = negotiateLanguages(
    requestedLanguage,
    req.app.locals.AVAILABLE_LANGUAGES,
    {defaultLocale: "en"}
  );
  req.supportedLocales = supportedLocales;

  req.fluentFormat = (id, args = null, errors = null) => {
    for (const locale of supportedLocales) {
      const bundle = req.app.locals.FLUENT_BUNDLES[locale];
      if (bundle.hasMessage(id)) {
        const message = bundle.getMessage(id);
        return bundle.format(message, args);
      }
    }
    return id;
  };

  next();
}


async function recordVisitFromEmail (req, res, next) {
  if (req.query.utm_source && req.query.utm_source !== "fx-monitor") {
    next();
    return;
  }
  if (req.query.utm_medium && req.query.utm_medium !== "email") {
    next();
    return;
  }

  const breachDetailsRE = /breach-details\/(\w*)$/;
  const capturedMatch = req.path.match(breachDetailsRE);

  // Send engagement ping to FXA if req.query contains a valid subscriber ID
  if (req.query.subscriber_id && Number.isInteger(Number(req.query.subscriber_id))) {
    const subscriber = await DB.getSubscriberById(req.query.subscriber_id);

    if (!subscriber.fxa_uid || subscriber.fxa_uid === "") {
      next();
      return;
    }
    const utmContent = (capturedMatch) ? `&utm_content=${capturedMatch[1]}` : "";
    const fxaMetricsFlowPath = `metrics-flow?utm_source=${req.query.utm_source}&utm_medium=${req.query.utm_medium}${utmContent}&event_type=engage&uid=${subscriber.fxa_uid}&service=${AppConstants.OAUTH_CLIENT_ID}`;
    const fxaResult = await FXA.sendMetricsFlowPing(fxaMetricsFlowPath);
    log.info(`fxaResult: ${fxaResult}`);
  }

  if (req.session.user) {
    next();
    return;
  }

  // Redirect users who have clicked "Resolve this breach" or "Go to Dashboard" from an email
  // and aren't signed in to the /oauth flow.
  if (
    req.query.utm_campaign && req.query.utm_campaign === "resolve-this-breach-link" ||
    req.query.utm_campaign && req.query.utm_campaign === "go-to-dashboard-link"
    ) {
    const oauthUrl = new URL("/oauth/init", AppConstants.SERVER_URL);
    ["utm_source", "utm_campaign", "utm_medium"].forEach(param => {
      if (req.query[param]) {
        oauthUrl.searchParams.append(param, req.query[param]);
      }
    });
    req.url = `${oauthUrl.pathname}/${oauthUrl.search}`;
    next();
    return;
  }
  next();
}


// Helps handle errors for all async route controllers
// See https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016
function asyncMiddleware (fn) {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}


function logErrors (err, req, res, next) {
  log.error("error", {stack: err.stack});
  Sentry.captureException(err);
  next(err);
}


function localizeErrorMessages (err, req, res, next) {
  if (err instanceof FluentError) {
    err.message = req.fluentFormat(err.fluentID);
  }
  next(err);
}


function clientErrorHandler (err, req, res, next) {
  if (req.xhr || req.headers["content-type"] === "application/json") {
    res.status(500).send({ message: err.message });
  } else {
    next(err);
  }
}


function errorHandler (err, req, res, next) {
  res.status(500);
  res.render("subpage", {
    analyticsID: "error",
    headline: req.fluentFormat("error-headline"),
    subhead: err.message,
  });
}


async function _getRequestSessionUser(req, res, next) {
  if (req.session && req.session.user) {
    // make sure the user object has all subscribers and email_addresses properties
    return DB.getSubscriberById(req.session.user.id);
  }
  return null;
}


async function requireSessionUser(req, res, next) {
  const user = await _getRequestSessionUser(req);
  if (!user) {
    const queryParams = new URLSearchParams(req.query).toString();
    return res.redirect(`/oauth/init?${queryParams}`);
  }
  const fxaProfileData = await FXA.getProfileData(user.fxa_access_token);
  if (fxaProfileData.hasOwnProperty("name") && fxaProfileData.name === "HTTPError") {
    delete req.session.user;
    return res.redirect("/");
  }
  await DB.updateFxAProfileData(user, fxaProfileData);
  req.session.user = user;
  req.user = user;
  next();
}

function getShareUTMs(req, res, next) {
  // Step 1: See if the user needs to be redirected to the homepage or to a breach-detail page.
  const generalShareUrls = [
    "/share/orange", //Header
    "/share/purple", // Footer
    "/share/blue",  // user/dashboard
    "/share/",
  ];

  if (generalShareUrls.includes(req.url)) {
    // If not breach specific, redirect to "/"
    req.session.redirectHome = true;
  }

  const inNotInActiveExperiment = (!req.session.experimentFlags);

  // Excluse user from experiment if they don't have any experimentFlags set already.
  if (inNotInActiveExperiment) {

    // Step 2: Determine if user needs to have share-link UTMs set
    const colors = [
      "orange", //Header
      "purple", // Footer
      "blue", // user/dashboard
    ];

    const urlArray = req.url.split("/");
    const color = urlArray.slice(-1)[0];

    req.session.utmOverrides = {
      campaignName: "shareLinkTraffic",
      campaignTerm: "default",
    };

    // Set Color Var in UTM
    if (color.length && colors.includes(color)) {
      req.session.utmOverrides.campaignTerm = color;
    }

    if (color.length && !colors.includes(color)) {
      const allBreaches = req.app.locals.breaches;
      const breachName = color;
      const featuredBreach = HIBP.getBreachByName(allBreaches, breachName);

      if (featuredBreach) {
        req.session.utmOverrides.campaignTerm = featuredBreach.Name;
      }
    }

    // Exclude share users
    req.session.experimentFlags = {
      excludeFromExperiment: true,
    };
  }

  next();
}


module.exports = {
  addRequestToResponse,
  pickLanguage,
  recordVisitFromEmail,
  asyncMiddleware,
  logErrors,
  localizeErrorMessages,
  clientErrorHandler,
  errorHandler,
  requireSessionUser,
  getShareUTMs,
};
