"use strict";


// Note: this index was created on heroku, stage, and prod by hand
// Use this statement to "fake" the migration:
// INSERT INTO knex_migrations (name, batch, migration_time) values ('20190713193852_add_email_sha1_index.js', (SELECT max(batch) + 1 FROM knex_migrations), '2019-07-13 19:52:42.000-05');
exports.up = function(knex, Promise) {
    return knex.schema.table("email_addresses", table => {
        table.index("sha1", "email_addresses_sha1_idx");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table("email_addresses", table => {
        table.dropIndex("sha1", "email_addresses_sha1_idx");
    });
};
