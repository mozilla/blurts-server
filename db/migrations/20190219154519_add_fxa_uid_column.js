"use strict";

exports.up = function(knex, Promise) {
    return knex.schema.table("subscribers", table => {
        table.string("fxa_uid");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table("subscribers", table => {
        table.dropColumn("fxa_uid");
    });
};
