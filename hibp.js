"use strict";

const got = require("got");

const AppConstants = require("./app-constants");
const DBUtils = require("./db/utils");
const pkg = require("./package.json");


const HIBP_USER_AGENT = `${pkg.name}/${pkg.version}`;


const HIBP = {
  async req(path, options = {}) {
    // Construct HIBP url and standard headers
    const url = `${AppConstants.HIBP_KANON_API_ROOT}${path}?code=${encodeURIComponent(AppConstants.HIBP_KANON_API_TOKEN)}`;
    const hibpOptions = {
      headers: {
        "User-Agent": HIBP_USER_AGENT,
      },
      json: true
    };
    const reqOptions = {...options, ...hibpOptions};
    return await got(url, reqOptions);
  },

  async getBreachesForEmail(sha1) {
    let foundBreaches = [];
    const sha1Prefix = sha1.slice(0, 6).toUpperCase();
    const path = `/breachedaccount/range/${sha1Prefix}`;

    try {
      const response = await HIBP.req(path);
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
    return foundBreaches.filter(({meta}) => meta.IsVerified && !meta.IsRetired && !meta.IsSensitive && !meta.IsSpamList);
  },

  async subscribeHash(sha1) {
    const sha1Prefix = sha1.slice(0, 6).toUpperCase();
    const path = "/range/subscribe";
    const options = {
      method: "POST",
      body: {hashPrefix: sha1Prefix},
    }

    try {
      const response = await HIBP.req(path, options);
    } catch (error) {
      console.error(error);
    }
    return response;
  },
};

module.exports = HIBP;
