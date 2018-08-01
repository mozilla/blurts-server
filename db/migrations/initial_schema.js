"use strict";

exports.up = knex => {
  return knex.schema
    .createTable("email_hashes", table => {
      table.increments("id").primary();
      table.string("sha1");
      table.string("email");
      table.string("verification_token").unique();
      table.boolean("verified").defaultTo(false);
    });
};

exports.down = knex => {
  return knex.schema
    .dropTableIfExists("email_hashes");
};
