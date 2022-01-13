"use strict";

exports.up = function (knex) {
  return knex.schema.table("subscribers", (table) => {
    table.dropColumn("removal_would_pay");
  });
};

exports.down = function (knex) {
  return knex.schema.table("subscribers", (table) => {
    table.boolean("removal_would_pay");
  });
};
