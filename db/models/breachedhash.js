"use strict";

const Model = require("objection").Model;
const path = require("path");

class BreachedHash extends Model {
  // Table name is the only required property.
  static get tableName() {
    return "breached_hashes";
  }

  static get relationMappings() {
    return {
      breach: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, "breach"),
        join: {
          from: "breached_hashes.breach_id",
          to: "breaches.id",
        },
      },
      email_hash: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, "emailhash"),
        join: {
          from: "breached_hashes.sha1_id",
          to: "email_hashes.id",
        },
      },
    };
  }
}

module.exports = BreachedHash;
