"use strict";

// eslint-disable-next-line node/no-extraneous-require
const { parse } = require("pg-connection-string");

const AppConstants = require("../app-constants");
const connectionObj = parse(AppConstants.DATABASE_URL);
if (AppConstants.NODE_ENV === "heroku") {
  connectionObj.ssl = {rejectUnauthorized: false};
}


// For runtime, use DATABASE_URL
const RUNTIME_CONFIG = {
  client: "postgresql",
  connection: connectionObj,
};

// For tests, use test-DATABASE
const testConnectionObj = parse(
  AppConstants.DATABASE_URL.replace(/\/(\w*)$/, "/test-$1")
);

const TESTS_CONFIG = {
  client: "postgresql",
  connection: testConnectionObj,
};

if (AppConstants.NODE_ENV === "tests") {
  module.exports = TESTS_CONFIG;
} else {
  module.exports = RUNTIME_CONFIG;
}
