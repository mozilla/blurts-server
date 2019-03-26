"use strict";

const breaches = require("./breaches");
const footer = require("./footer");
const header = require("./header");
const legacyHelpers = require("./hbs-helpers");


module.exports = {
  helpers: Object.assign(
    breaches,
    footer,
    header,
    legacyHelpers,
  ),
};
