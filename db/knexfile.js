"use strict";

const AppConstants = require("../app-constants");


// For runtime, use DATABASE_URL
const RUNTIME_CONFIG = {
  client: "postgresql",
  connection: AppConstants.DATABASE_URL,
};
// For tests, use test-DATABASE
const TEST_DATABASE_URL = AppConstants.DATABASE_URL.replace(/\/(\w*)$/, "/test-$1");

module.exports = {
  dev: RUNTIME_CONFIG,
  stage: RUNTIME_CONFIG,
  prod: RUNTIME_CONFIG,
  tests: {
    client: "postgresql",
    connection: TEST_DATABASE_URL,
  },
};
