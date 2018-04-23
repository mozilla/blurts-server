"use strict";

const AppConstants = require("../app-constants");

module.exports = {
  client: "postgresql",
  connection: AppConstants.DATABASE_URL,
  pool: {
    min: 2,
    max: 10,
  },
};
