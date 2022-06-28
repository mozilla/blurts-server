"use strict";

exports.up = async function(knex) {
  await knex.schema.createTable("onerep_events", table => {
    table.integer("event_id").primary();
    table.integer("object_id").notNullable();
    table.integer("profile_id").notNullable();
    table.string("event_type").notNullable();
    table.timestamp("date_time").notNullable();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("onerep_events");
};
