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
  if (!req.query.subscriber_id || !Number.isInteger(Number(req.query.subscriber_id))) {
    next();
    return;
  }
  const subscriber = await DB.getSubscriberById(req.query.subscriber_id);
  if (!subscriber.fxa_uid || subscriber.fxa_uid === "") {
    next();
    return;
  }
  const breachDetailsRE = /breach-details\/(\w*)$/;
  const capturedMatch = req.path.match(breachDetailsRE);
  const utmContent = (capturedMatch) ? `&utm_content=${capturedMatch[1]}` : "";
  const fxaMetricsFlowPath = `metrics-flow?utm_source=${req.query.utm_source}&utm_medium=${req.query.utm_medium}${utmContent}&event_type=engage&uid=${subscriber.fxa_uid}&service=${AppConstants.OAUTH_CLIENT_ID}`;
  const fxaResult = await FXA.sendMetricsFlowPing(fxaMetricsFlowPath);
  log.info(`fxaResult: ${fxaResult}`);
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
};
