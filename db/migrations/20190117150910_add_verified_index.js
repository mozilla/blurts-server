"use strict";

exports.up = function(knex, Promise) {
    return knex.schema.table("subscribers", table => {
        table.index("verified", "subscribers_verified_idx");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table("subscribers", table => {
        table.dropIndex("verified", "subscribers_verified_idx");
    });
};
