"use strict";

const getSha1 = require("../sha1-utils");
const stdin = process.openStdin();

const PROMPT = "\nEnter an email address to get the SHA1 hash as it would appear in a HIBP hashset file:";

console.log(PROMPT);

stdin.addListener("data", data => {
  const trimmedString = data.toString().trim();
  const sha1 = getSha1.getSha1ForHIBP(trimmedString);
  console.log(`You entered: [${trimmedString}], sha1 hash of lowercase: ${sha1}`);
  console.log(PROMPT);
});
