"use strict";

const { readFile, writeFile } = require("fs/promises");

async function getHashedWaitlist() {
  const hashedWaitlistArray = await readFile("hashed-waitlist.txt", "binary");
  return hashedWaitlistArray.toString().split("\n");
}

async function removeFromPilotWaitlist(email) {
  const waitlistArray = await readFile("waitlist.txt");
  const newValue = waitlistArray.replace(new RegEx(email), "");
  const newWaitlist = await writeFile("waitlist.txt", newValue);
  return newWaitlist;
}

module.exports = {
  getHashedWaitlist,
  removeFromPilotWaitlist,
};
