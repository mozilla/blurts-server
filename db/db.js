"use strict";

// eslint-disable-next-line node/no-extraneous-require
const uuidv4 = require("uuid/v4");
const Knex = require("knex");
const knexConfig = require("./knexfile");

const HIBP = require("../hibp");
const getSha1 = require("../sha1-utils");

const knex = Knex(knexConfig);


const DB = {
  async addSubscriberUnverifiedEmailHash(email) {
    const res = await knex("subscribers").insert(
      { email: email, sha1: getSha1(email), verification_token: uuidv4(), verified: false }
    ).returning("verification_token");
    return res[0];
  },

  async verifyEmailHash(token, email) {
    const emailHash = await knex("subscribers")
      .where("verification_token", "=", token)
      .andWhere("email", "=", email);
    return await this.verifySubscriber(emailHash[0]);
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
          .update({ email, verified })
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
    return this.verifySubscriber(emailHash);
  },

  async verifySubscriber(emailHash) {
    await HIBP.subscribeHash(emailHash.sha1);
    return await knex("subscribers")
      .where("verification_token", "=", emailHash.verification_token)
      .update({ verified: true })
      .returning("*");
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
    return await knex("subscribers").whereIn("sha1", hashes).andWhere("verified", "=", true);
  },

};

module.exports = DB;
