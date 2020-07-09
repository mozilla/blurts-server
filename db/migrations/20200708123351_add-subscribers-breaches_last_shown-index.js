"use strict";


exports.up = function(knex) {
  return knex.schema.table("subscribers", table => {
    table.index("breaches_last_shown", "subscribers_breaches_last_shown_idx");
  });
};

exports.down = function(knex) {
  return knex.schema.table("email_addresses", table => {
    table.dropIndex("breaches_last_shown", "subscribers_breaches_last_shown_idx");
  });
};
