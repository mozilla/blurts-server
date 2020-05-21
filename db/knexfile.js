"use strict";

const AppConstants = require("../app-constants");


// For runtime, use DATABASE_URL
const RUNTIME_CONFIG = {
    client: "postgresql",
    connection: AppConstants.DATABASE_URL,
};

// For tests, use test-DATABASE
const TEST_DATABASE_URL = AppConstants.DATABASE_URL.replace(/\/(\w*)$/, "/test-$1");
const TESTS_CONFIG = {
    client: "postgresql",
    connection: TEST_DATABASE_URL,
};

if (AppConstants.NODE_ENV === "tests" ) {
    module.exports = TESTS_CONFIG;
} else {
    module.exports = RUNTIME_CONFIG;
}
