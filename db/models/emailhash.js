"use strict";

const Model = require("objection").Model;

class EmailHash extends Model {
  // Table name is the only required property.
  static get tableName() {
    return "email_hashes";
  }
}

module.exports = EmailHash;
