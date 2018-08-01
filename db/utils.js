"use strict";

// eslint-disable-next-line node/no-extraneous-require
const uuidv4 = require("uuid/v4");
const Knex = require("knex");
const knexConfig = require("./knexfile");
const { Model } = require("objection");

const Breach = require("./models/breach");
const EmailHash = require("./models/emailhash");

// FIXME: TODO: resolve circular depenency b/w db/utils and hibp
// const HIBP = require("../hibp");
const getSha1 = require("../sha1-utils");

const knex = Knex(knexConfig);
Model.knex(knex);


const DBUtils = {
  async createBreach(name, meta) {
    try {
      return await Breach
        .query()
        .insert({ name, meta });
    } catch(e) {
      console.error(e);
      if (e.code && e.code === "23505") {
        // Duplicate error, silently log.
        console.error(`Duplicate breach: ${name}`);
        return;
      }

      throw e;
    }
  },

  async deleteBreach(id) {
    await Breach.query().deleteById(id);
  },

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
    // FIXME: TODO: resolve circular depenency b/w db/utils and hibp
    // await HIBP.subscribeHash(emailHash.sha1);
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

  async getSubscribersForBreach(breach) {
    return await breach
      .$relatedQuery("email_hashes")
      .whereNotNull("email")
      .where("notified", false);
  },

  async getSubscribersByHashes(hashes) {
    return await EmailHash.query().whereIn("sha1", hashes).andWhere("verified", "=", true);
  },

  async addBreachedHash(breachName, sha1) {
    const addedEmailHash = await this._addEmailHash(sha1);

    const breachesByName = await Breach
      .query()
      .where("name", breachName);

    if (!breachesByName.length) {
      return;
    }

    const breach = breachesByName[0];

    const relatedSha1 = await breach
      .$relatedQuery("email_hashes")
      .where("sha1", sha1);

    if (relatedSha1.length) {
      // Already associated, nothing to do.
      return;
    }

    return await breach
      .$relatedQuery("email_hashes")
      .relate(addedEmailHash.id);
  },

  async addBreachedEmail(breachName, email) {
    return await this.addBreachedHash(breachName, getSha1(email));
  },

  async setBreachedHashNotified(breach, email) {
    return await breach
      .$relatedQuery("email_hashes")
      .where("sha1", getSha1(email))
      .patch({ notified: true });
  },

  async getBreachesForHash(sha1) {
    return await this._getSha1EntryAndDo(sha1, async aEntry => {
      return await aEntry
        .$relatedQuery("breaches")
        .orderBy("name");
    }, async () => {
      return [];
    });
  },

  async getBreachesForHashPrefix(sha1Prefix) {
    return await this._getSha1EntriesFromPrefixAndDo(sha1Prefix, async aEntries => {
      return aEntries;
    }, async () => {
      return [];
    });
  },

  getBreachesForEmail(email) {
    return this.getBreachesForHash(getSha1(email));
  },

  async getBreachByName(breachName) {
    return (await Breach.query().where("name", breachName))[0];
  },

  async getBreachesByNames(breachNames) {
    return await Breach.query().where("name", "in", breachNames);
  },

};

module.exports = DBUtils;
