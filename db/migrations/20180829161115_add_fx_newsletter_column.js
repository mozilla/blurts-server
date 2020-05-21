"use strict";

exports.up = function(knex, Promise) {
    return knex.schema.table("subscribers", table => {
        table.boolean("fx_newsletter").defaultTo(false);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table("subscribers", table => {
        table.dropColumn("fx_newsletter");
    });
};
