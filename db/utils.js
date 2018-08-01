"use strict";

// eslint-disable-next-line node/no-extraneous-require
const uuidv4 = require("uuid/v4");
const Knex = require("knex");
const knexConfig = require("./knexfile");
const { Model } = require("objection");

const EmailHash = require("./models/emailhash");

const HIBP = require("../hibp");
const getSha1 = require("../sha1-utils");

const knex = Knex(knexConfig);
Model.knex(knex);


const DBUtils = {
  async addUnverifiedEmailHash(email) {
    return await EmailHash.query().insert(
      {email: email, sha1: getSha1(email), verification_token: uuidv4(), verified: false}
    );
  },

  async verifyEmailHash(token, email) {
    const emailHash = await EmailHash.query()
      .where("verification_token", "=", token)
      .andWhere("email", "=", email);
    return await this.verifySubscriber(emailHash[0]);
  },

  // Used internally, ideally should not be called by consumers.
  async _getSha1EntryAndDo(sha1, aFoundCallback, aNotFoundCallback) {
    const existingEntries = await EmailHash
      .query()
      .where("sha1", sha1);

    if (existingEntries.length && aFoundCallback) {
      return await aFoundCallback(existingEntries[0]);
    }

    if (!existingEntries.length && aNotFoundCallback) {
      return await aNotFoundCallback();
    }
  },

  async _getSha1EntriesFromPrefixAndDo(sha1Prefix, aFoundCallback, aNotFoundCallback) {
    // Only accept 6-character hash prefixes so requests:
    // 1. can't get more than the intended hash range results FROM us
    // 2. can't reveal a more specific hash query TO us
    if (sha1Prefix.length !== 6) {
      return await aNotFoundCallback();
    }
    const existingEntries = await EmailHash.query().where("sha1", "like", sha1Prefix + "%").eager("breaches");

    if (existingEntries.length && aFoundCallback) {
      return await aFoundCallback(existingEntries);
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
        return await aEntry
          .$query()
          .patch({ email, verified })
          .returning("*"); // Postgres trick to return the updated row as model.
      }

      return aEntry;
    }, async () => {
      return await EmailHash
        .query()
        .insert({ sha1, email, verified });
    });
  },

  async addSubscriber(email) {
    const emailHash = await this._addEmailHash(getSha1(email), email, true);
    return this.verifySubscriber(emailHash);
  },

  async verifySubscriber(emailHash) {
    await HIBP.subscribeHash(emailHash.sha1);
    return await emailHash.$query().patch({ verified: true }).returning("*");
  },

  async removeSubscriber(email) {
    const sha1 = getSha1(email);

    return await this._getSha1EntryAndDo(sha1, async aEntry => {
      // Patch out the email from the entry.
      return await aEntry
        .$query()
        .patch({ email: null })
        .returning("*"); // Postgres trick to return the updated row as model.
    });
  },

  async getSubscribersByHashes(hashes) {
    return await EmailHash.query().whereIn("sha1", hashes).andWhere("verified", "=", true);
  },

};

module.exports = DBUtils;
