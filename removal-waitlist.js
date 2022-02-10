"use strict";

const { readFile } = require("fs/promises");

async function getHashedWaitlist() {
  const hashedWaitlistArray = await readFile("hashed-waitlist.txt", "binary");
  return hashedWaitlistArray.toString().split("\n");
}

async function getHashedAdminList() {
  const hashedAdminList = await readFile("hashed-admin-list.txt", "binary");
  return hashedAdminList.toString().split("\n");
}

module.exports = {
  getHashedWaitlist,
  getHashedAdminList,
};
