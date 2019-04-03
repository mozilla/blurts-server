"use strict";

const articles = require("./articles");
const breaches = require("./breaches");
const emails = require("./emails");
const footer = require("./footer");
const header = require("./header");
const legacyHelpers = require("./hbs-helpers");
const scanResults = require("./scan-results");
const signUpBanners = require("./sign-up-banners");
const breachDetail = require("./breach-detail");

module.exports = {
  helpers: Object.assign(
    articles,
    breaches,
    emails,
    footer,
    header,
    legacyHelpers,
    scanResults,
    signUpBanners,
    breachDetail,
  ),
};
