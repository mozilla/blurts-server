"use strict";

const got = require("got");

const AppConstants = require("./app-constants");
const DBUtils = require("./db/utils");
const pkg = require("./package.json");


const HIBP_USER_AGENT = `${pkg.name}/${pkg.version}`;


const HIBP = {
  async getBreachesForEmail(sha1) {
    let foundBreaches = [];

    const sha1Prefix = sha1.slice(0, 6).toUpperCase();
    const url = `${AppConstants.HIBP_API_ROOT}/breachedaccount/range/${sha1Prefix}?code=${encodeURIComponent(AppConstants.HIBP_API_TOKEN)}`;
    const headers = {
      "User-Agent": HIBP_USER_AGENT,
    };

    //console.info(`Fetching ${url}...`);

    try {
      const response = await got(url, {headers, json: true});
      // Parse response body, format:
      // [
      //   {"hashSuffix":<suffix>,"websites":[<breach1Name>,...]},
      //   {"hashSuffix":<suffix>,"websites":[<breach1Name>,...]},
      // ]
      for (const breachedAccount of response.body) {
        if (sha1.toUpperCase() === sha1Prefix + breachedAccount.hashSuffix) {
          foundBreaches = await DBUtils.getBreachesByNames(breachedAccount.websites);
        }
      }
    } catch (error) {
      console.error(error);
    }
    return foundBreaches;
  },
};

module.exports = HIBP;
