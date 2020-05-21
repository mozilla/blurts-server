"use strict";

exports.up = function(knex, Promise) {
    return knex.schema.table("subscribers", table => {
        table.string("fxa_refresh_token");
        table.jsonb("fxa_profile_json");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table("subscribers", table => {
        table.dropColumn("fxa_refresh_token");
        table.dropColumn("fxa_profile_json");
    });
};
