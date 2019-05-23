"use strict";


// eslint-disable-next-line node/no-extraneous-require
const uuidv4 = require("uuid/v4");
const Knex = require("knex");

const { FluentError } = require("../locale-utils");
const AppConstants = require("../app-constants");
const HIBP = require("../hibp");
const Basket = require("../basket");
const getSha1 = require("../sha1-utils");
const mozlog = require("../log");

const knexConfig = require("./knexfile");

let knex = Knex(knexConfig);
const log = mozlog("DB");


const DB = {
  async getSubscriberByToken(token) {
    const res = await knex("subscribers")
      .where("primary_verification_token", "=", token);

    return res[0];
  },

  async getEmailByToken(token) {
    const res = await knex("email_addresses")
      .where("verification_token", "=", token);

    return res[0];
  },

  async getEmailById(emailAddressId) {
    const res = await knex("email_addresses")
      .where("id", "=", emailAddressId);

    return res[0];
  },

  async getSubscriberByTokenAndHash(token, emailSha1) {
    const res = await knex.table("subscribers")
      .first()
      .where({
        "primary_verification_token": token,
        "primary_sha1": emailSha1,
      });
    return res;
  },

  async getSubscriberByEmail(email) {
    const [subscriber] = await knex("subscribers").where({
      "primary_email": email,
      "primary_verified": true,
    });
    if (subscriber) {
      subscriber.email_addresses = await knex("email_addresses").where({
        "subscriber_id": subscriber.id,
      });
    }
    return subscriber;
  },

  async addSubscriberUnverifiedEmailHash(user, email) {
    const res = await knex("email_addresses").insert({
      subscriber_id: user.id,
      email: email,
      sha1: getSha1(email),
      verification_token: uuidv4(),
      verified: false,
    }).returning("*");
    return res[0];
  },

  async resetUnverifiedEmailAddress(emailAddressId) {
    const newVerificationToken = uuidv4();
    const res = await knex("email_addresses")
      .update({
        verification_token: newVerificationToken,
        updated_at: knex.fn.now(),
      })
      .where("id", emailAddressId)
      .returning("*");
    return res[0];
  },

  async verifyEmailHash(token) {
    const unverifiedEmail = await this.getEmailByToken(token);
    if (!unverifiedEmail) {
      throw new FluentError("Error message for this verification email timed out or something went wrong.");
    }
    const verifiedEmail = await this._verifyNewEmail(unverifiedEmail);
    return verifiedEmail[0];
  },

  // TODO: refactor into an upsert? https://jaketrent.com/post/upsert-knexjs/
  // Used internally, ideally should not be called by consumers.
  async _getSha1EntryAndDo(sha1, aFoundCallback, aNotFoundCallback) {
    const existingEntries = await knex("subscribers")
      .where("primary_sha1", sha1);

    if (existingEntries.length && aFoundCallback) {
      return await aFoundCallback(existingEntries[0]);
    }

    if (!existingEntries.length && aNotFoundCallback) {
      return await aNotFoundCallback();
    }
  },

  // Used internally.
  async _addEmailHash(sha1, email, signup_language, verified = false) {
    try {
      return await this._getSha1EntryAndDo(sha1, async aEntry => {
        // Entry existed, patch the email value if supplied.
        if (email) {
          const res = await knex("subscribers")
            .update({
              primary_email: email,
              primary_verified: verified,
              updated_at: knex.fn.now(),
            })
            .where("id", "=", aEntry.id)
            .returning("*");
          return res[0];
        }

        return aEntry;
      }, async () => {
        // Always add a verification_token value
        const verification_token = uuidv4();
        const res = await knex("subscribers")
          .insert({ primary_sha1: sha1, primary_email: email, signup_language, primary_verification_token: verification_token, primary_verified: verified })
          .returning("*");
        return res[0];
      });
    } catch (e) {
      throw new FluentError("error-could-not-add-email");
    }
  },

  /**
   * Add a subscriber:
   * 1. Add a record to subscribers
   * 2. Immediately call _verifySubscriber
   * 3. For FxA subscriber, add refresh token and profile data
   *
   * @param {string} email to add
   * @param {string} fxaRefreshToken from Firefox Account Oauth
   * @param {string} fxaProfileData from Firefox Account
   * @returns {object} subscriber knex object added to DB
   */
  async addSubscriber(email, signupLanguage, fxaRefreshToken=null, fxaProfileData=null) {
    const emailHash = await this._addEmailHash(getSha1(email), email, signupLanguage, true);
    const verified = await this._verifySubscriber(emailHash);
    const verifiedSubscriber = Array.isArray(verified) ? verified[0] : null;
    if (fxaRefreshToken || fxaProfileData) {
      return this._updateFxAData(verifiedSubscriber, fxaRefreshToken, fxaProfileData);
    }
    return verifiedSubscriber;
  },

  /**
   * When an email is verified, convert it into a subscriber:
   * 1. Subscribe the hash to HIBP
   * 2. Update our subscribers record to verified
   * 3. (if opted in) Subscribe the email to Fx newsletter
   *
   * @param {object} emailHash knex object in DB
   * @returns {object} verified subscriber knex object in DB
   */
  async _verifySubscriber(emailHash) {
    // TODO: move this "up" into controllers/users ?
    await HIBP.subscribeHash(emailHash.primary_sha1);

    const verifiedSubscriber = await knex("subscribers")
      .where("primary_email", "=", emailHash.primary_email)
      .update({
        primary_verified: true,
        updated_at: knex.fn.now(),
      })
      .returning("*");

    // TODO: move this "up" into controllers/users ?
    if (emailHash.fx_newsletter) {
      Basket.subscribe(emailHash.primary_email);
    }

    return verifiedSubscriber;
  },

  // Verifies new emails added by existing users
  async _verifyNewEmail(emailHash) {
    await HIBP.subscribeHash(emailHash.sha1);

    const verifiedEmail = await knex("email_addresses")
      .where("email", "=", emailHash.email)
      .update({
        verified: true,
      })
      .returning("*");

  return verifiedEmail;
  },

  async getUserEmails(userId) {

    const userEmails = await knex("email_addresses")
      .where("subscriber_id", "=", userId)
      .returning("*");

    return userEmails;
  },

  /**
   * Update fxa_refresh_token and fxa_profile_json for subscriber
   *
   * @param {object} subscriber knex object in DB
   * @param {string} fxaRefreshToken from Firefox Account Oauth
   * @param {string} fxaProfileData from Firefox Account
   * @returns {object} updated subscriber knex object in DB
   */
  async _updateFxAData(subscriber, fxaRefreshToken, fxaProfileData) {
    const fxaUID = JSON.parse(fxaProfileData).uid;
    const updated = await knex("subscribers")
    .where("id", "=", subscriber.id)
    .update({
      fxa_uid: fxaUID,
      fxa_refresh_token: fxaRefreshToken,
      fxa_profile_json: fxaProfileData,
    })
    .returning("*");
    const updatedSubscriber = Array.isArray(updated) ? updated[0] : null;
    return updatedSubscriber;
  },

  async setBreachesLastShownNow(subscriber) {
    // TODO: turn 2 db queries into a single query (also see #942)
    const nowDateTime = new Date();
    const nowTimeStamp = nowDateTime.toISOString();
    await knex("subscribers")
    .where("id", "=", subscriber.id)
    .update({
      breaches_last_shown: nowTimeStamp,
    });
    return this.getSubscriberByEmail(subscriber.primary_email);
  },

  async setAllEmailsToPrimary(subscriber, allEmailsToPrimary) {
    const updated = await knex("subscribers")
    .where("id", subscriber.id)
    .update({
      all_emails_to_primary: allEmailsToPrimary,
    })
    .returning("*");
    const updatedSubscriber = Array.isArray(updated) ? updated[0] : null;
    return updatedSubscriber;
  },

  async removeSubscriber(subscriber) {
    await knex("email_addresses").where({"subscriber_id": subscriber.id}).del();
    await knex("subscribers").where({"id": subscriber.id}).del();
  },

  async removeSubscriberByEmail(email) {
    const sha1 = getSha1(email);
    return await this._getSha1EntryAndDo(sha1, async aEntry => {
      await knex("subscribers")
        .where("id", "=", aEntry.id)
        .del();
      log.info("removed-subscriber", { id: aEntry.id });
      return aEntry;
    }, async () => {
      log.warn("removed-subscriber-not-found");
      return;
    });
  },

  async removeSubscriberByToken(token, emailSha1) {
    const subscriber = await this.getSubscriberByTokenAndHash(token, emailSha1);
    if (!subscriber) {
      return false;
    }
    await knex("subscribers")
      .where({
        "primary_verification_token": subscriber.primary_verification_token,
        "primary_sha1": subscriber.primary_sha1,
      })
      .del();
    return subscriber;
  },

  async removeOneSecondaryEmail(emailId) {
    await knex("email_addresses")
      .where({
        "id": emailId,
      })
      .del();
      return;
  },

  async getSubscribersByHashes(hashes) {
    return await knex("subscribers").whereIn("primary_sha1", hashes).andWhere("primary_verified", "=", true);
  },

  async getEmailAddressesByHashes(hashes) {
    return await knex("email_addresses")
      .join("subscribers", "email_addresses.subscriber_id", "=", "subscribers.id")
      .whereIn("email_addresses.sha1", hashes)
      .andWhere("email_addresses.verified", "=", true);
  },

  async deleteUnverifiedSubscribers() {
    const expiredDateTime = new Date(Date.now() - AppConstants.DELETE_UNVERIFIED_SUBSCRIBERS_TIMER * 1000);
    const expiredTimeStamp = expiredDateTime.toISOString();
    await knex("subscribers")
      .where("primary_verified", false)
      .andWhere("created_at", "<", expiredTimeStamp)
      .del();
  },

  async deleteSubscriberByFxAUID(fxaUID) {
    await knex("subscribers").where("fxa_uid", fxaUID).del();
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
