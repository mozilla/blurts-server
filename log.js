"use strict";

const mozlog = require("mozlog");

const AppConstants = require("./app-constants");

const log = mozlog({
  app: "fx-monitor",
  level: AppConstants.MOZLOG_LEVEL,
  fmt: AppConstants.MOZLOG_FMT,
});


module.exports = log;
