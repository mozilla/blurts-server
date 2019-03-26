"use strict";

const footer = require("./footer");
const header = require("./header");
const legacyHelpers = require("./hbs-helpers");


module.exports = {
  helpers: Object.assign(
    footer,
    header,
    legacyHelpers,
  ),
};
