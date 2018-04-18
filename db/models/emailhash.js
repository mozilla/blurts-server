"use strict";

const Model = require("objection").Model;

class EmailHash extends Model {
  // Table name is the only required property.
  static get tableName() {
    return "email_hashes";
  }

/*
  static get jsonSchema() {
    return {
      type: "object",
      required: [],

      properties: {
        id: { type: "integer" },
      }
    };
  }
*/

  static get relationMappings() {
    return {
      breaches: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + "/Breach",
        join: {
          from: "email_hashes.id",
          through: {
            from: "breached_hashes.sha1_id",
            to: "breached_hashes.breach_id",
          },
          to: "breaches.id",
        },
      },
    };
  }
}

module.exports = EmailHash;
