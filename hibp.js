"use strict";

const got = require("got");

const AppConstants = require("./app-constants");
const { FluentError } = require("./locale-utils");
const mozlog = require("./log");
const pkg = require("./package.json");


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
          throw new FluentError("error-hibp-throttled");
        } else {
          tryCount++;
          await new Promise(resolve => setTimeout(resolve, AppConstants.HIBP_THROTTLE_DELAY * tryCount));
          return await this._throttledGot(url, reqOptions, tryCount);
        }
      } else {
        throw new FluentError("error-hibp-connect");
      }
    }
  },

  async req(path, options = {}) {
    const url = `${AppConstants.HIBP_API_ROOT}${path}`;
    const reqOptions = this._addStandardOptions(options);
    return await this._throttledGot(url, reqOptions);
  },

  async kAnonReq(path, options = {}) {
    // Construct HIBP url and standard headers
    const url = `${AppConstants.HIBP_KANON_API_ROOT}${path}?code=${encodeURIComponent(AppConstants.HIBP_KANON_API_TOKEN)}`;
    const reqOptions = this._addStandardOptions(options);
    return await this._throttledGot(url, reqOptions);
  },

  matchFluentID(dataCategory) {
    return dataCategory.toLowerCase()
      .replace(/[^-a-z0-9]/g, "-")
      .replace(/-{2,}/g, "-")
      .replace(/(^-|-$)/g, "");
  },

  formatDataClassesArray(dataCategories) {
    const formattedArray = [];
      dataCategories.forEach(category => {
        formattedArray.push(this.matchFluentID(category));
      });
    return formattedArray;
  },

  async loadBreachesIntoApp(app) {
    log.info("loadBreachesIntoApp");
    try {
      const breachesResponse = await this.req("/breaches");
      const breaches = [];

      for (const breach of breachesResponse.body) {
        breach.DataClasses = this.formatDataClassesArray(breach.DataClasses);
        breach.LogoPath = /[^/]*$/.exec(breach.LogoPath)[0];
        breaches.push(breach);
      }
      app.locals.breaches = breaches;
      app.locals.breachesLoadedDateTime = Date.now();
      app.locals.latestBreach = this.getLatestBreach(breaches);
      app.locals.mostRecentBreachDateTime = app.locals.latestBreach.AddedDate;
    } catch (error) {
      throw new FluentError("error-hibp-load-breaches");
    }
    log.info("done-loading-breaches");
  },


  async getBreachesForEmail(sha1, allBreaches, includeSensitive = false) {
    let foundBreaches = [];
    const sha1Prefix = sha1.slice(0, 6);
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
      if (sha1 === sha1Prefix + breachedAccount.hashSuffix) {
        foundBreaches = allBreaches.filter(breach => breachedAccount.websites.includes(breach.Name));
        foundBreaches = this.filterBreaches(foundBreaches);
        foundBreaches.sort( (a,b) => {
          return new Date(b.AddedDate) - new Date(a.AddedDate);
        });
        break;
      }
    }

    if (includeSensitive) {
      return foundBreaches;
    }
    return foundBreaches.filter(
      breach => !breach.IsSensitive
    );
  },


  getBreachByName(allBreaches, breachName) {
    return allBreaches.find(breach => breach.Name.toLowerCase() === breachName.toLowerCase());
  },


  filterBreaches(breaches) {
    return breaches.filter(
      breach => !breach.IsRetired &&
                !breach.IsSpamList &&
                !breach.IsFabricated &&
                breach.IsVerified &&
                !(breach.Domain === "" && breach.Name !== "PDL")
    );
  },


  getLatestBreach(breaches) {
    let latestBreach = {};
    let latestBreachDateTime = new Date(0);
    for (const breach of breaches) {
      if (breach.IsSensitive) {
        continue;
      }
      const breachAddedDate = new Date(breach.AddedDate);
      if (breachAddedDate > latestBreachDateTime) {
        latestBreachDateTime = breachAddedDate;
        latestBreach = breach;
      }
    }
    return latestBreach;
  },


  async subscribeHash(sha1) {
    // Hashes sent to HIBP should be uppercased
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
