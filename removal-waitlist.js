"use strict";

const { readFile } = require("fs/promises");

async function getHashedWaitlist() {
  const hashedWaitlistArray = await readFile("hashed-waitlist.txt", "binary");
  return hashedWaitlistArray.toString().split("\n");
}

module.exports = {
  getHashedWaitlist,
};
