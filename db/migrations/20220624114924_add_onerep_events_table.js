"use strict";

exports.up = function(knex) {
  return knex.schema.createTable("onerep_events", table => {
    table.integer("id").primary();
    table.integer("profile_id").notNullable();
    table.string("event_type").notNullable();
    table.timestamp("date_time").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("onerep_events");
};
