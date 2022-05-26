"use strict";

exports.up = function (knex) {
  return knex.schema.table("subscribers", (table) => {
    table.boolean("removal_optout").defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.table("subscribers", (table) => {
    table.dropColumn("removal_optout");
  });
};
