"use strict";

const Model = require("objection").Model;
const path = require("path");

class EmailHash extends Model {
  // Table name is the only required property.
  static get tableName() {
    return "email_hashes";
  }

  static get relationMappings() {
    return {
      breaches: {
        relation: Model.ManyToManyRelation,
        modelClass: path.join(__dirname, "breach"),
        join: {
          from: "email_hashes.id",
          through: {
            from: "breached_hashes.sha1_id",
            to: "breached_hashes.breach_id",
            extra: ["notified"],
          },
          to: "breaches.id",
        },
      },
    };
  }
}

module.exports = EmailHash;
