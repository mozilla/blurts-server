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
    const url = `${AppConstants.HIBP_STAGE_API_ROOT}/breachedaccount/range/${sha1Prefix}?code=${encodeURIComponent(AppConstants.HIBP_STAGE_API_TOKEN)}`;
    console.log(`************in hipb with email ${email} and now ${sha1Prefix} and now url ++ ${url}`);
    const headers = {
      "User-Agent": HIBP_USER_AGENT,
    };

    console.info(`Fetching ${url}...`);

    try {
      const response = await got(url, {headers, json: true});
      // Parse response body, format:
      // [
      //   {"HashSuffix":<suffix>,"Websites":[<breach1Name>,...]},
      //   {"HashSuffix":<suffix>,"Websites":[<breach1Name>,...]},
      // ]
      for (const breachedAccount of response.body) {
        if (sha1.toUpperCase() === sha1Prefix + breachedAccount.HashSuffix) {
          foundBreaches = await DBUtils.getBreachesByNames(breachedAccount.Websites);
        }
      }
    } catch (error) {
      console.error(error);
    }
    return foundBreaches;
  },
};

module.exports = HIBP;
