"use strict";

exports.up = function(knex, Promise) {
    return knex.schema.table("subscribers", table => {
        table.index("email", "subscribers_email_idx");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table("subscribers", table => {
        table.dropIndex("email", "subscribers_email_idx");
    });
};
