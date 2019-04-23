"use strict";

const articles = require("./articles");
const breaches = require("./breaches");
const breachStats = require("./breach-stats");
const dashboard = require("./dashboard");
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
    dashboard,
    emails,
    footer,
    header,
    legacyHelpers,
    signUpBanners,
    breachDetail,
  ),
};
