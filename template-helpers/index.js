"use strict";

const articles = require("./articles");
const breaches = require("./breaches");
const breachStats = require("./breach-stats");
const emails = require("./emails");
const footer = require("./footer");
const header = require("./header");
const legacyHelpers = require("./hbs-helpers");
const signUpBanners = require("./sign-up-banners");
const breachDetail = require("./breach-detail");

module.exports = {
  helpers: Object.assign(
    articles,
    breaches,
    breachStats,
    emails,
    footer,
    header,
    legacyHelpers,
    signUpBanners,
    breachDetail,
  ),
};
