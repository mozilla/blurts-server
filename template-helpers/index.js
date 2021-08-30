"use strict";

const articles = require("./articles");
const breachDetail = require("./breach-detail");
const breaches = require("./breaches");
const breachStats = require("./breach-stats");
const dashboard = require("./dashboard");
const emails = require("./emails");
const footer = require("./footer");
const header = require("./header");
const homepage = require("./homepage");
const legacyHelpers = require("./hbs-helpers");
const scanResults = require("./scan-results");
const signUpBanners = require("./sign-up-banners");
const vpnBanner = require("./vpn-banner");

module.exports = {
  helpers: Object.assign(
    articles,
    breachDetail,
    breaches,
    breachStats,
    dashboard,
    emails,
    footer,
    header,
    homepage,
    legacyHelpers,
    scanResults,
    signUpBanners,
    vpnBanner
  ),
};
