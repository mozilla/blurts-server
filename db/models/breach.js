"use strict";

const Model = require("objection").Model;
const path = require("path");

class Breach extends Model {
  // Table name is the only required property.
  static get tableName() {
    return "breaches";
  }

  static get relationMappings() {
    return {
      email_hashes: {
        relation: Model.ManyToManyRelation,
        modelClass: path.join(__dirname, "EmailHash"),
        join: {
          from: "breaches.id",
          through: {
            from: "breached_hashes.breach_id",
            to: "breached_hashes.sha1_id",
          },
          to: "email_hashes.id",
        },
      },
    };
  }
}

module.exports = Breach;
