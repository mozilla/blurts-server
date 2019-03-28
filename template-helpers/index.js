"use strict";

const articles = require("./articles");
const breaches = require("./breaches");
const footer = require("./footer");
const header = require("./header");
const legacyHelpers = require("./hbs-helpers");
const monitorFeatures = require("./monitor-features");
const scanResults = require("./scan-results");


module.exports = {
  helpers: Object.assign(
    articles,
    breaches,
    footer,
    header,
    legacyHelpers,
    monitorFeatures,
    scanResults,
  ),
};
