"use strict";

exports.up = function(knex) {
    return knex.schema.table("email_addresses", table => {
        table.index("email", "email_addresses_email_idx");
    });
};

exports.down = function(knex) {
    return knex.schema.table("email_addresses", table => {
        table.dropIndex("email", "email_addresses_email_idx");
    });
};
