"use strict";

const auth = require("basic-auth");

const AppConstants = require("./app-constants");


function checkSESAuth (user, pass) {
  return user === AppConstants.SES_USERNAME && pass === AppConstants.SES_PASSWORD;
}


function sesAuth (req, res, next) {
  const credentials = auth(req);
  if (!credentials || !checkSESAuth(credentials.name, credentials.pass)) {
    res.setHeader("WWW-Authenticate", `Basic realm="${AppConstants.SERVER_URL}"`);
    res.status(401).send("Access denied");
  } else {
    next();
  }
}


// Helps handle errors for all async route controllers
// See https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016
function asyncMiddleware (fn) {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

module.exports = {
  sesAuth,
  asyncMiddleware,
};
