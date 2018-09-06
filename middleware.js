"use strict";


// Helps handle errors for all async route controllers
// See https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016
function asyncMiddleware (fn) {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}


function logErrors (err, req, res, next) {
  console.log("logErrors");
  console.error(err.stack);
  next(err);
}


function clientErrorHandler (err, req, res, next) {
  console.log("clientErrorHandler");
  if (req.xhr) {
    res.status(500).send({ error: err });
  } else {
    next(err);
  }
}


function errorHandler (err, req, res, next) {
  console.log("errorHandler");
  res.status(500);
  res.render("error", { error: err.message });
}


module.exports = {
  asyncMiddleware,
  logErrors,
  clientErrorHandler,
  errorHandler,
};
