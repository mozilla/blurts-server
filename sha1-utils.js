"use strict";

const crypto = require("crypto");

// Email addresses must be lowercased before hashing
// Hashes sent to HIBP should be uppercased
function getSha1ForHIBP (email) {
  const formattedEmail = email.toLowerCase();
  const emailHash = crypto.createHash("sha1").update(formattedEmail).digest("hex");
  return emailHash.toUpperCase();
}

// Email addresses must be lowercased before hashing
// Hashes that are stored in our DB should be lowercased
// The "crypto" hash library returns hashes with lowercase letters by default
function getLowerCaseSha1(email) {
  const formattedEmail = email.toLowerCase();
  return crypto.createHash("sha1").update(formattedEmail).digest("hex");
}

module.exports = {
  getSha1ForHIBP,
  getLowerCaseSha1,
};
