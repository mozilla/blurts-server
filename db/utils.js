"use strict";

const Knex = require("knex");
const knexConfig = require("./knexfile");
const { Model } = require("objection");

const Breach = require("./models/breach");
const EmailHash = require("./models/emailhash");
const BreachedHash = require("./models/breachedhash");

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
      if (e.code && e.code === "23505") {
        // Duplicate error, silently log.
        console.log(`Duplicate breach: ${name}`);
        return;
      }

      throw e;
    }
  },

  async deleteBreach(id) {
    await Breach.query().deleteById(id);
  },

  // Used internally, ideally should not be called by consumers.
  async _getSha1EntryAndDo(sha1, aFoundCallback, aNotFoundCallback) {
    const existingEntries = await EmailHash
      .query()
      .where("sha1", sha1);

    if (existingEntries.length && aFoundCallback) {
      return await aFoundCallback(existingEntries[0]);
    }

    if (aNotFoundCallback) {
      return await aNotFoundCallback();
    }
  },

  // Used internally.
  async _addEmailHash(sha1, email) {
    return await this._getSha1EntryAndDo(sha1, async aEntry => {
      // Entry existed, patch the email value if supplied.
      if (email) {
        return await aEntry
          .$query()
          .patch({ email })
          .returning("*"); // Postgres trick to return the updated row as model.
      }

      return aEntry;
    }, async () => {
      return await EmailHash
        .query()
        .insert({ sha1, email });
    });
  },

  async addSubscriber(email) {
    return await this._addEmailHash(getSha1(email), email);
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

  async setBreachedHashNotified(breach, subscriber) {
    return await BreachedHash.query().patch({notified: true}).where("breach_id", "=", breach.id).andWhere("sha1_id", "=", subscriber.id);
  },

  async getBreachesForHash(sha1) {
    return await this._getSha1EntryAndDo(sha1, async aEntry => {
      return await aEntry
        .$relatedQuery("breaches")
        .orderBy("name");
    });
  },

  getBreachesForEmail(email) {
    return this.getBreachesForHash(getSha1(email));
  },

  async getBreachByName(breachName) {
    return (await Breach.query().where("name", breachName))[0];
  },
};

module.exports = DBUtils;
