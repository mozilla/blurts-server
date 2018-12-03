"use strict";


const { negotiateLanguages, acceptedLanguages } = require("fluent-langneg");
const Sentry = require("@sentry/node");
const AppConstants = require("./app-constants");
Sentry.init({
  dsn: AppConstants.SENTRY_DSN,
  environment: AppConstants.NODE_ENV,
});

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


module.exports = {
  addRequestToResponse,
  pickLanguage,
  asyncMiddleware,
  logErrors,
  localizeErrorMessages,
  clientErrorHandler,
  errorHandler,
};
