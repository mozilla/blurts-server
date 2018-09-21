"use strict";

const got = require("got");
const createDOMPurify = require("dompurify");
const { JSDOM } = require("jsdom");

const AppConstants = require("./app-constants");
const mozlog = require("./log");
const pkg = require("./package.json");


const DOMPurify = createDOMPurify((new JSDOM("")).window);
const HIBP_USER_AGENT = `${pkg.name}/${pkg.version}`;
const log = mozlog("hibp");


const HIBP = {
  _addStandardOptions (options = {}) {
    const hibpOptions = {
      headers: {
        "User-Agent": HIBP_USER_AGENT,
      },
      json: true,
    };
    return Object.assign(options, hibpOptions);
  },

  async _throttledGot (url, reqOptions, tryCount = 1) {
    let response;
    try {
      response = await got(url, reqOptions);
      return response;
    } catch (err) {
      log.error("_throttledGot", {err: err});
      if (err.statusCode === 404) {
        // 404 can mean "no results", return undefined response; sorry calling code
        return response;
      } else if (err.statusCode === 429) {
        log.info("_throttledGot", {err: "got a 429, tryCount: " + tryCount});
        if (tryCount >= AppConstants.HIBP_THROTTLE_MAX_TRIES) {
          log.error("_throttledGot", {err: err});
          throw new Error("Too many connections to HIBP.");
        } else {
          tryCount++;
          await new Promise(resolve => setTimeout(resolve, AppConstants.HIBP_THROTTLE_DELAY * tryCount));
          return await this._throttledGot(url, reqOptions, tryCount);
        }
      } else {
        throw new Error("Error connecting to HIBP.");
      }
    }
  },

  async req(path, options = {}) {
    const url = `${AppConstants.HIBP_API_ROOT}${path}?code=${encodeURIComponent(AppConstants.HIBP_API_TOKEN)}`;
    const reqOptions = this._addStandardOptions(options);
    return await this._throttledGot(url, reqOptions);
  },

  async kAnonReq(path, options = {}) {
    // Construct HIBP url and standard headers
    const url = `${AppConstants.HIBP_KANON_API_ROOT}${path}?code=${encodeURIComponent(AppConstants.HIBP_KANON_API_TOKEN)}`;
    const reqOptions = this._addStandardOptions(options);
    return await this._throttledGot(url, reqOptions);
  },

  async loadBreachesIntoApp(app) {
    log.info("loadBreachesIntoApp");
    try {
      const breachesResponse = await this.req("/breaches");
      const breaches = [];

      for (const breach of breachesResponse.body) {
        // const breach = breachesResponse.body[breachIndex];
        // purify the description
        breach.Description = DOMPurify.sanitize(breach.Description, {ALLOWED_TAGS: []});
        breaches.push(breach);
      }
      app.locals.breaches = breaches;
      app.locals.breachesLoadedDateTime = Date.now();
      app.locals.mostRecentBreachDateTime = this.getLatestBreachDateTime(breaches);
    } catch (error) {
      throw new Error("Could not load breaches: " + error);
    }
    log.info("done-loading-breaches");
  },

  async getUnsafeBreachesForEmail(sha1, allBreaches) {
    const allFoundBreaches = await this.getBreachesForEmail(sha1, allBreaches, true);

    const breachLists = {
      "websiteBreaches": allFoundBreaches.filter(breach => breach.IsSpamList === false),
      "spamLists": allFoundBreaches.filter(breach => breach.IsSpamList === true),
    };

    if (breachLists.websiteBreaches.length === 0 && breachLists.spamLists.length === 0) {
      return false;
    }

    breachLists.totalBreaches = allFoundBreaches.length;
    return breachLists;
  },

  async getBreachesForEmail(sha1, allBreaches, includeUnsafe = false) {
    let foundBreaches = [];
    const sha1Prefix = sha1.slice(0, 6).toUpperCase();
    const path = `/breachedaccount/range/${sha1Prefix}`;

    const response = await this.kAnonReq(path);
    if (!response) {
      return [];
    }
    // Parse response body, format:
    // [
    //   {"hashSuffix":<suffix>,"websites":[<breach1Name>,...]},
    //   {"hashSuffix":<suffix>,"websites":[<breach1Name>,...]},
    // ]
    for (const breachedAccount of response.body) {
      if (sha1.toUpperCase() === sha1Prefix + breachedAccount.hashSuffix) {
        foundBreaches = allBreaches.filter(breach => breachedAccount.websites.includes(breach.Name));
        break;
      }
    }

    if (includeUnsafe) {
      return foundBreaches;
    }
    return this.filterOutUnsafeBreaches(foundBreaches);
  },

  getBreachByName(allBreaches, breachName) {
    return allBreaches.find(breach => breach.Name.toLowerCase() === breachName.toLowerCase());
  },


  filterOutUnsafeBreaches(breaches) {
    return breaches.filter(
      breach => breach.IsVerified &&
                !breach.IsRetired &&
                !breach.IsSensitive &&
                !breach.IsSpamList
    );
  },


  getLatestBreachDateTime(breaches) {
    let latestBreachDateTime = new Date(0);
    for (const breach of breaches) {
      const breachAddedDate = new Date(breach.AddedDate);
      if (breachAddedDate > latestBreachDateTime) {
        latestBreachDateTime = breachAddedDate;
      }
    }
    return latestBreachDateTime;
  },


  async subscribeHash(sha1) {
    const sha1Prefix = sha1.slice(0, 6).toUpperCase();
    const path = "/range/subscribe";
    const options = {
      method: "POST",
      body: {hashPrefix: sha1Prefix},
    };

    return await this.kAnonReq(path, options);
  },
};

module.exports = HIBP;
