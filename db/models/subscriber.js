'use strict';

const Model = require("objection").Model;

class Subscriber extends Model {
  // Table name is the only required property.
  static get tableName() {
    return "subscribers";
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
      sha1: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + "/EmailHash",
        join: {
          from: "subscribers.sha1_id",
          to: "email_hashes.id",
        },
      },
    };
  }
}

module.exports = Subscriber;
