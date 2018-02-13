"use strict";

const crypto = require("crypto");
const stdin = process.openStdin();


console.log("Enter an email address to get the SHA1 hash as it would appear in a HIBP hashset file.");

stdin.addListener("data", data => {
  const shasum = crypto.createHash("sha1");
  const trimmedString = data.toString().trim();
  console.log("You entered: [" + trimmedString + "], sha1 hash of lowercase: ");
  shasum.update(trimmedString.toLowerCase());
  console.log(shasum.digest("hex"));
  console.log("Enter an email address to get the SHA1 hash as it would appear in a HIBP hashset file.");
});
