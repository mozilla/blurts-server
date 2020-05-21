"use strict";

exports.up = knex => {
    return knex.schema
        .createTable("subscribers", table => {
            table.increments("id").primary();
            table.string("sha1");
            table.string("email");
            table.string("verification_token").unique();
            table.boolean("verified").defaultTo(false);
        });
};

exports.down = knex => {
    return knex.schema
        .dropTableIfExists("subscribers");
};
