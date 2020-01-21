"use strict";

const crypto = require("crypto");

function getSha1Hash(email) {
  // Email addresses must be lowercased before
  // hashing to return correct results from HIBP
  const lowerCaseEmail = email.toLowerCase();
  const sha1EmailHash = crypto.createHash("sha1").update(lowerCaseEmail).digest("hex");

  // Hashes must be uppercased to return correct results from HIBP
  return sha1EmailHash.toUpperCase();
}


module.exports = getSha1Hash;
