"use strict";

const crypto = require("crypto");

function getSha1(email) {
  return crypto.createHash("sha1").update(email).digest("hex").toUpperCase();
}

module.exports = getSha1;
