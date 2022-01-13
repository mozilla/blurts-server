"use strict";

exports.up = function (knex) {
  return knex.schema.table("subscribers", (table) => {
    table.dropColumn("removal_on_list");
  });
};

exports.down = function (knex) {
  return knex.schema.table("subscribers", (table) => {
    table.boolean("removal_on_list").defaultTo(false);
  });
};
