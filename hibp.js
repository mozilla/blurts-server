"use strict";

const got = require("got");

const AppConstants = require("./app-constants");
const DBUtils = require("./db/utils");
const pkg = require("./package.json");
const getSha1 = require("./sha1-utils");


const HIBP_USER_AGENT = `${pkg.name}/${pkg.version}`;


const HIBP = {
  async getBreachesForEmail(email) {
    let foundBreaches = [];

    const sha1 = getSha1(email);
    const sha1Prefix = sha1.slice(0, 6);
    const url = `${AppConstants.HIBP_STUB_API_ROOT}/breachedaccount/range/${sha1Prefix}`;
    const headers = {
      "User-Agent": HIBP_USER_AGENT,
    };

    console.log(`Fetching ${url}...`);

    try {
      const response = await got(url, {headers});
      // Parse response body, format:
      // {breachedAccount1sha1}:{breach1Name}[,{breach2Name},...]
      // {breachedAccount2sha1}:{breach3Name}[,{breach4Name},...]
      for (const breachedAccount of response.body.trim().split("\n")) {
        const sliceIndex = breachedAccount.indexOf(":");
        const breachedSha1 = breachedAccount.slice(0, sliceIndex);
        const breachNamesStr = breachedAccount.slice(sliceIndex + 1);
        const breachNames = breachNamesStr.split(",");
        if (sha1 === breachedSha1) {
          foundBreaches = await DBUtils.getBreachesByNames(breachNames);
        }
      }
    } catch (error) {
      console.error(error);
    }
    return foundBreaches;
  },
};

module.exports = HIBP;
