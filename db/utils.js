"use strict";

const Breach = require("./models/Breach");
const EmailHash = require("./models/EmailHash");

const getSha1 = require("../sha1-utils");

const DBUtils = {
  async createBreach(name, meta) {
    try {
    return await Breach
      .query()
      .insert({ name, meta });
    } catch(e) {}
  },

  async deleteBreach(id) {
    await Breach.query().deleteById(id);
  },

  // Used internally, ideally should not be called by consumers.
  async _addEmailHash(sha1, email) {
    // Check if an entry exists
    const existingEntries = await EmailHash
      .query()
      .where("sha1", sha1);

    // If not, add it and return.
    if (!existingEntries.length) {
      return await EmailHash
        .query()
        .insert({ sha1, email });
    }

    // Entry existed, patch the email value if supplied.
    if (email) {
      return await existingEntries[0]
        .$query()
        .patch({ email })
        .returning('*'); // Postgres trick to return the updated row as model.
    }

    return existingEntries[0];
  },

  async addSubscriber(email) {
    const sha1 = getSha1(email);
    return await this._addEmailHash(sha1, email);
  },

  async removeSubscriber(email) {
    const sha1 = getSha1(email);

    // Check if an entry exists.
    const existingEntries = await EmailHash
      .query()
      .where("sha1", sha1);

    // If not, nothing to be done, return.
    if (!existingEntries.length) {
      return;
    }

    // Patch out the email from the entry.
    await existingEntries[0]
      .$query()
      .patch({ email: null })
      .returning('*'); // Postgres trick to return the updated row as model.
  },

  async addBreachedHash(breachName, sha1) {
    console.log(`Adding ${sha1} to ${breachName}`);
    const addedEmailHash = await this._addEmailHash(sha1);
    console.log(`Added email hash id: ${addedEmailHash.id}`);
    const breachesByName = await Breach
      .query()
      .where("name", breachName);
    console.log(`Got ${breachesByName.length} breaches for that name`);
    await breachesByName[0]
      .$relatedQuery("email_hashes")
      .relate(addedEmailHash.id);
  },

  addBreachedEmail(breachName, email) {
    return this.addBreachedHash(breachName, getSha1(email));
  },

  async getBreachesForHash(sha1) {
    console.log(`Finding EmailHash entry for ${sha1}`);
    const emailHashesBySha1 = await EmailHash
      .query()
      .where("sha1", sha1);
    console.log(`Found ${emailHashesBySha1.length} entries`);
    return await emailHashesBySha1[0]
      .$relatedQuery("breaches")
      .orderBy("name");
  },

  getBreachesForEmail(email) {
    return this.getBreachesForHash(getSha1(email));
  },
};

module.exports = DBUtils;
