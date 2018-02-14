"use strict";

const crypto = require("crypto");
const stdin = process.openStdin();

const PROMPT = "\nEnter an email address to get the SHA1 hash as it would appear in a HIBP hashset file:";

console.log(PROMPT);

stdin.addListener("data", data => {
  const trimmedString = data.toString().trim();
  const shasum = crypto.createHash("sha1");
  shasum.update(trimmedString.toLowerCase());
  console.log(`You entered: [${trimmedString}], sha1 hash of lowercase: ${shasum.digest("hex")}`);
  console.log(PROMPT);
});
