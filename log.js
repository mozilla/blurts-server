"use strict";

const mozlog = require("mozlog");

const AppConstants = require("./app-constants");


const log = mozlog({
  app: "fx-monitor",
  level: AppConstants.MOZLOG_LEVEL,
});


module.exports = log;
