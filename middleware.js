"use strict";

const got = require("got");

const AppConstants = require("./app-constants");


// Verifies SES notification message signatures
async function sesAuth (req, res, next) {
  let error = "";
  const messageBody = JSON.parse(req.body);
  if (messageBody.SignatureVersion !== "1") {
    error = "Wrong SES Signature version";
  }
  if (!messageBody.SigningCertURL.startsWith("https://")) {
    error = "SigningCertURL must be https://";
  }

  const certificate = await got(messageBody.SigningCertURL);

  if (false) {
    next();
  } else {
    res.status(401).send("Access denied. Error: ", error);
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
  sesAuth: asyncMiddleware(sesAuth),
  asyncMiddleware,
};
