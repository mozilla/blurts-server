"use strict";

// eslint-disable-next-line node/no-extraneous-require
const uuidv4 = require("uuid/v4");
const Knex = require("knex");
const { attachPaginate } = require("knex-paginate");

const { FluentError } = require("../locale-utils");
const AppConstants = require("../app-constants");
const { FXA } = require("../lib/fxa");
const HIBP = require("../hibp");
const getSha1 = require("../sha1-utils");
const mozlog = require("../log");

const knexConfig = require("./knexfile");

let knex = Knex(knexConfig);
attachPaginate();

const log = mozlog("DB");

const { REMOVAL_CONSTANTS } = require("../removal-constants"); //DATA REMOVAL SPECIFIC

const DB = {
  async getSubscriberByToken(token) {
    const res = await knex("subscribers").where(
      "primary_verification_token",
      "=",
      token
    );

    return res[0];
  },

  async getEmailByToken(token) {
    const res = await knex("email_addresses").where(
      "verification_token",
      "=",
      token
    );

    return res[0];
  },

  async getEmailById(emailAddressId) {
    const res = await knex("email_addresses").where("id", "=", emailAddressId);

    return res[0];
  },

  async getSubscriberByTokenAndHash(token, emailSha1) {
    const res = await knex.table("subscribers").first().where({
      primary_verification_token: token,
      primary_sha1: emailSha1,
    });
    return res;
  },

  async joinEmailAddressesToSubscriber(subscriber) {
    if (subscriber) {
      const emailAddressRecords = await knex("email_addresses").where({
        subscriber_id: subscriber.id,
      });
      subscriber.email_addresses = emailAddressRecords.map((emailAddress) => ({
        id: emailAddress.id,
        email: emailAddress.email,
      }));
    }
    return subscriber;
  },

  async getSubscriberById(id) {
    const [subscriber] = await knex("subscribers").where({
      id: id,
    });
    const subscriberAndEmails = await this.joinEmailAddressesToSubscriber(
      subscriber
    );
    return subscriberAndEmails;
  },

  async getSubscriberByFxaUid(uid) {
    const [subscriber] = await knex("subscribers").where({
      fxa_uid: uid,
    });
    const subscriberAndEmails = await this.joinEmailAddressesToSubscriber(
      subscriber
    );
    return subscriberAndEmails;
  },

  async getPreFxaSubscribersPage(pagination) {
    return await knex("subscribers")
      .whereRaw("(fxa_uid = '') IS NOT FALSE")
      .paginate(pagination);
  },

  async getSubscriberByEmail(email) {
    const [subscriber] = await knex("subscribers").where({
      primary_email: email,
      primary_verified: true,
    });
    const subscriberAndEmails = await this.joinEmailAddressesToSubscriber(
      subscriber
    );
    return subscriberAndEmails;
  },

  async getEmailAddressRecordByEmail(email) {
    const emailAddresses = await knex("email_addresses").where({
      email: email,
      verified: true,
    });
    if (!emailAddresses) {
      return null;
    }
    if (emailAddresses.length > 1) {
      // TODO: handle multiple emails in separate(?) subscriber accounts?
      log.warn("getEmailAddressRecordByEmail", {
        msg: "found the same email multiple times",
      });
    }
    return emailAddresses[0];
  },

  async addSubscriberUnverifiedEmailHash(user, email) {
    const res = await knex("email_addresses")
      .insert({
        subscriber_id: user.id,
        email: email,
        sha1: getSha1(email),
        verification_token: uuidv4(),
        verified: false,
      })
      .returning("*");
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
      throw new FluentError(
        "Error message for this verification email timed out or something went wrong."
      );
    }
    const verifiedEmail = await this._verifyNewEmail(unverifiedEmail);
    return verifiedEmail[0];
  },

  // TODO: refactor into an upsert? https://jaketrent.com/post/upsert-knexjs/
  // Used internally, ideally should not be called by consumers.
  async _getSha1EntryAndDo(sha1, aFoundCallback, aNotFoundCallback) {
    const existingEntries = await knex("subscribers").where(
      "primary_sha1",
      sha1
    );

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
      return await this._getSha1EntryAndDo(
        sha1,
        async (aEntry) => {
          // Entry existed, patch the email value if supplied.
          if (email) {
            const res = await knex("subscribers")
              .update({
                primary_email: email,
                primary_sha1: getSha1(email.toLowerCase()),
                primary_verified: verified,
                updated_at: knex.fn.now(),
              })
              .where("id", "=", aEntry.id)
              .returning("*");
            return res[0];
          }

          return aEntry;
        },
        async () => {
          // Always add a verification_token value
          const verification_token = uuidv4();
          const res = await knex("subscribers")
            .insert({
              primary_sha1: getSha1(email.toLowerCase()),
              primary_email: email,
              signup_language,
              primary_verification_token: verification_token,
              primary_verified: verified,
            })
            .returning("*");
          return res[0];
        }
      );
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
   * @param {string} signupLanguage from Accept-Language
   * @param {string} fxaAccessToken from Firefox Account Oauth
   * @param {string} fxaRefreshToken from Firefox Account Oauth
   * @param {string} fxaProfileData from Firefox Account
   * @returns {object} subscriber knex object added to DB
   */
  async addSubscriber(
    email,
    signupLanguage,
    fxaAccessToken = null,
    fxaRefreshToken = null,
    fxaProfileData = null
  ) {
    const emailHash = await this._addEmailHash(
      getSha1(email),
      email,
      signupLanguage,
      true
    );
    const verified = await this._verifySubscriber(emailHash);
    const verifiedSubscriber = Array.isArray(verified) ? verified[0] : null;
    if (fxaRefreshToken || fxaProfileData) {
      return this._updateFxAData(
        verifiedSubscriber,
        fxaAccessToken,
        fxaRefreshToken,
        fxaProfileData
      );
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

    return verifiedSubscriber;
  },

  // Verifies new emails added by existing users
  async _verifyNewEmail(emailHash) {
    await HIBP.subscribeHash(emailHash.sha1);

    const verifiedEmail = await knex("email_addresses")
      .where("id", "=", emailHash.id)
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
   * @param {string} fxaAccessToken from Firefox Account Oauth
   * @param {string} fxaRefreshToken from Firefox Account Oauth
   * @param {string} fxaProfileData from Firefox Account
   * @returns {object} updated subscriber knex object in DB
   */
  async _updateFxAData(
    subscriber,
    fxaAccessToken,
    fxaRefreshToken,
    fxaProfileData
  ) {
    const fxaUID = JSON.parse(fxaProfileData).uid;
    const updated = await knex("subscribers")
      .where("id", "=", subscriber.id)
      .update({
        fxa_uid: fxaUID,
        fxa_access_token: fxaAccessToken,
        fxa_refresh_token: fxaRefreshToken,
        fxa_profile_json: fxaProfileData,
      })
      .returning("*");
    const updatedSubscriber = Array.isArray(updated) ? updated[0] : null;
    if (updatedSubscriber) {
      FXA.destroyOAuthToken({ refresh_token: subscriber.fxa_refresh_token });
    }
    return updatedSubscriber;
  },

  async updateFxAProfileData(subscriber, fxaProfileData) {
    await knex("subscribers").where("id", subscriber.id).update({
      fxa_profile_json: fxaProfileData,
    });
    return this.getSubscriberById(subscriber.id);
  },

  async setBreachesLastShownNow(subscriber) {
    // TODO: turn 2 db queries into a single query (also see #942)
    const nowDateTime = new Date();
    const nowTimeStamp = nowDateTime.toISOString();
    await knex("subscribers").where("id", "=", subscriber.id).update({
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

  async setBreachesResolved(options) {
    const { user, updatedResolvedBreaches } = options;
    await knex("subscribers").where("id", user.id).update({
      breaches_resolved: updatedResolvedBreaches,
    });
    return this.getSubscriberByEmail(user.primary_email);
  },

  async setWaitlistsJoined(options) {
    const { user, updatedWaitlistsJoined } = options;
    await knex("subscribers").where("id", user.id).update({
      waitlists_joined: updatedWaitlistsJoined,
    });
    return this.getSubscriberByEmail(user.primary_email);
  },

  async removeSubscriber(subscriber) {
    await knex("email_addresses").where({ subscriber_id: subscriber.id }).del();
    await knex("subscribers").where({ id: subscriber.id }).del();
  },

  // This is used by SES callbacks to remove email addresses when recipients
  // perma-bounce or mark our emails as spam
  // Removes from either subscribers or email_addresses as necessary
  async removeEmail(email) {
    const subscriber = await this.getSubscriberByEmail(email);
    if (!subscriber) {
      const emailAddress = await this.getEmailAddressRecordByEmail(email);
      if (!emailAddress) {
        log.warn("removed-subscriber-not-found");
        return;
      }
      await knex("email_addresses")
        .where({
          email: email,
          verified: true,
        })
        .del();
      return;
    }
    // This can fail if a subscriber has more email_addresses and marks
    // a primary email as spam, but we should let it fail so we can see it
    // in the logs
    await knex("subscribers")
      .where({
        primary_verification_token: subscriber.primary_verification_token,
        primary_sha1: subscriber.primary_sha1,
      })
      .del();
    return;
  },

  async removeSubscriberByToken(token, emailSha1) {
    const subscriber = await this.getSubscriberByTokenAndHash(token, emailSha1);
    if (!subscriber) {
      return false;
    }
    await knex("subscribers")
      .where({
        primary_verification_token: subscriber.primary_verification_token,
        primary_sha1: subscriber.primary_sha1,
      })
      .del();
    return subscriber;
  },

  async removeOneSecondaryEmail(emailId) {
    await knex("email_addresses")
      .where({
        id: emailId,
      })
      .del();
    return;
  },

  async getSubscribersByHashes(hashes) {
    return await knex("subscribers")
      .whereIn("primary_sha1", hashes)
      .andWhere("primary_verified", "=", true);
  },

  async getEmailAddressesByHashes(hashes) {
    return await knex("email_addresses")
      .join(
        "subscribers",
        "email_addresses.subscriber_id",
        "=",
        "subscribers.id"
      )
      .whereIn("email_addresses.sha1", hashes)
      .andWhere("email_addresses.verified", "=", true);
  },

  async deleteUnverifiedSubscribers() {
    const expiredDateTime = new Date(
      Date.now() - AppConstants.DELETE_UNVERIFIED_SUBSCRIBERS_TIMER * 1000
    );
    const expiredTimeStamp = expiredDateTime.toISOString();
    const numDeleted = await knex("subscribers")
      .where("primary_verified", false)
      .andWhere("created_at", "<", expiredTimeStamp)
      .del();
    log.info("deleteUnverifiedSubscribers", {
      msg: `Deleted ${numDeleted} rows.`,
    });
  },

  async deleteSubscriberByFxAUID(fxaUID) {
    await knex("subscribers").where("fxa_uid", fxaUID).del();
  },

  async deleteEmailAddressesByUid(uid) {
    await knex("email_addresses").where({ subscriber_id: uid }).del();
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

  //DATA REMOVAL SPECIFIC

  async removeKan(subscriber) {
    await knex("subscribers")
      .where({ id: subscriber.id })
      .update({
        kid: null,
        removal_would_pay: null,
        removal_enrolled_time: null,
        removal_optout: true, //MH TODO: set to false if we want to be able to debug re-enrollment
      })
      .catch((e) => {
        console.error("error removing kanary id", e);
      });
  },

  async removalOptout(subscriber, doOptOut = true) {
    const res = await knex("subscribers")
      .where({ id: subscriber.id })
      .update({
        removal_optout: doOptOut,
      })
      .catch((e) => {
        console.error("error updating optout status in db", e);
      });
    return res;
  },

  async handleRemovalOptOutByEmail(email, doOptOut = true) {
    const res = await knex("subscribers")
      .where({ primary_email: email })
      .update({
        removal_optout: doOptOut,
      })
      .catch((e) => {
        console.error("error updating optout status in db", e);
        return false;
      });
    return res;
  },

  async getRemovalOptoutStatus(user) {
    const res = await knex
      .select("removal_optout")
      .from("subscribers")
      .where("id", user.id)
      .pluck("removal_optout"); //return only the values in an array not the object
    return res[0];
  },

  async getRemoveParticipants() {
    const res = await knex
      .select("kid")
      .from("subscribers")
      .whereNotNull("kid")
      .pluck("kid"); //return only the values in an array not the object ({kid: xxxx})
    return res;
  },

  async setKanaryID(user, kid) {
    await knex("subscribers")
      .where("id", user.id)
      .update({
        kid: kid,
      })
      .catch((e) => {
        console.error("error setting kanary id", e);
      });
    return kid;
  },

  async getRemovalPilotByName(pilot_name) {
    const res = await knex("removal_pilot")
      .where("name", REMOVAL_CONSTANTS.REMOVAL_PILOT_GROUP)
      .catch((e) => {
        console.error("error retrieving pilot record", e);
      });
    return res[0];
  },

  async setRemovalEnrollTime(user, ts) {
    await knex("subscribers")
      .where("id", user.id)
      .update({
        removal_enrolled_time: ts,
      })
      .catch((e) => {
        console.error("error setting removal enrolled time", e);
      });
    return ts;
  },

  async incrementRemovalEnrolledUsers(user, ts) {
    return await knex("removal_pilot")
      .where("name", REMOVAL_CONSTANTS.REMOVAL_PILOT_GROUP)
      .increment("enrolled_users", 1)
      .catch((e) => {
        console.error("error incrementing enrolled users", e);
      });
  },
  //END DATA REMOVAL SPECIFIC
};

module.exports = DB;
