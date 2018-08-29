"use strict";


// eslint-disable-next-line node/no-extraneous-require
const uuidv4 = require("uuid/v4");
const Knex = require("knex");
const Basket = require("mozilla-basket");

const AppConstants = require("../app-constants");
const HIBP = require("../hibp");
const getSha1 = require("../sha1-utils");

const knexConfig = require("./knexfile");
let knex = Knex(knexConfig);


const DB = {
  async getSubscriberByToken(token) {
    const res = await knex("subscribers")
      .where("verification_token", "=", token);

    return res[0];
  },

  async getSubscriberByTokenAndHash(token, emailSha1) {
    const res = await knex.table("subscribers")
      .first()
      .where({
        "verification_token": token,
        "sha1": emailSha1,
      });
    return res;
  },

  async getSubscribersByEmail(email) {
    return await knex("subscribers")
      .where("email", "=", email);
  },

  async addSubscriberUnverifiedEmailHash(email, fxNewsletter = false) {
    const res = await knex("subscribers").insert(
      { email: email, sha1: getSha1(email), verification_token: uuidv4(), verified: false, fx_newsletter: fxNewsletter }
    ).returning("*");
    return res[0];
  },

  async verifyEmailHash(token) {
    const unverifiedSubscriber = await this.getSubscriberByToken(token);
    if (!unverifiedSubscriber) {
      throw new Error("Token not found");
    }
    const verifiedSubscriber = await this._verifySubscriber(unverifiedSubscriber);
    return verifiedSubscriber[0];
  },

  // Used internally, ideally should not be called by consumers.
  async _getSha1EntryAndDo(sha1, aFoundCallback, aNotFoundCallback) {
    const existingEntries = await knex("subscribers")
      .where("sha1", sha1);

    if (existingEntries.length && aFoundCallback) {
      return await aFoundCallback(existingEntries[0]);
    }

    if (!existingEntries.length && aNotFoundCallback) {
      return await aNotFoundCallback();
    }
  },

  // Used internally.
  async _addEmailHash(sha1, email, verified = false) {
    return await this._getSha1EntryAndDo(sha1, async aEntry => {
      // Entry existed, patch the email value if supplied.
      if (email) {
        const res = await knex("subscribers")
          .update({
            email,
            verified,
            updated_at: knex.fn.now(),
          })
          .where("id", "=", aEntry.id)
          .returning("*");
        return res[0];
      }

      return aEntry;
    }, async () => {
      const res = await knex("subscribers")
        .insert({ sha1, email, verified })
        .returning("*");
      return res[0];
    });
  },

  async addSubscriber(email) {
    const emailHash = await this._addEmailHash(getSha1(email), email, true);
    const verifiedSubscriber = await this._verifySubscriber(emailHash);
    return verifiedSubscriber[0];
  },

  async _verifySubscriber(emailHash) {
    // Subscribe user to HIBP
    await HIBP.subscribeHash(emailHash.sha1);

    // Update our subscriber record to verified
    const verifiedSubscriber = await knex("subscribers")
      .where("email", "=", emailHash.email)
      .update({
        verified: true,
        updated_at: knex.fn.now(),
      })
      .returning("*");

    // If the user opted in, send newsletter subscription request to basket
    if (emailHash.fx_newsletter) {
      const b = new Basket({BASKET_URL: AppConstants.BASKET_URL, API_KEY: AppConstants.BASKET_API_KEY});
      // Duplicative calling code; see https://github.com/mozilla/node-basket/issues/4
      b.subscribe(emailHash.email, AppConstants.BASKET_NEWSLETTER, { email: emailHash.email, newsletters: AppConstants.BASKET_NEWSLETTER, validated: true}, (err, body) => {
        if (err) {
          console.error(err);
        } else {
          console.log(body);
        }
      });
    }

    return verifiedSubscriber;
  },

  async removeSubscriberByEmail(email) {
    const sha1 = getSha1(email);
    return await this._getSha1EntryAndDo(sha1, async aEntry => {
      await knex("subscribers")
        .where("id", "=", aEntry.id)
        .del();
      console.log("Removed subscriber ID: ", aEntry.id);
      return aEntry;
    }, async () => {
      console.warn("removeSubscriber called with email not found in database.");
      return;
    });
  },

  async removeSubscriberByToken(token, emailSha1) {
    const subscriber = await this.getSubscriberByTokenAndHash(token, emailSha1);
    await knex("subscribers")
      .where({
        "verification_token": subscriber.verification_token,
        "sha1": subscriber.sha1,
      })
      .del();
    return subscriber;
  },

  async getSubscribersByHashes(hashes) {
    return await knex("subscribers").whereIn("sha1", hashes).andWhere("verified", "=", true);
  },

  async deleteUnverifiedSubscribers() {
    const expiredDateTime = new Date(Date.now() - AppConstants.DELETE_UNVERIFIED_SUBSCRIBERS_TIMER * 1000);
    const expiredTimeStamp = expiredDateTime.toISOString();
    await knex("subscribers")
      .where("verified", false)
      .andWhere("created_at", "<", expiredTimeStamp)
      .del();
  },

  async createConnection() {
    if (knex === null) {
      knex = Knex(knexConfig);
    }
  },

  async destroyConnection() {
    await knex.destroy();
    knex = null;
  },

};

module.exports = DB;
