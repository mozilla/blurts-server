"use strict";

// Note: this index was created on heroku, stage, and prod by hand
// Use this statement to "fake" the migration:
// INSERT INTO knex_migrations (name, batch, migration_time) values ('20181007085241_add_sha1_index.js', 4, '2018-10-07 08:52:42.000-05');
exports.up = function(knex, Promise) {
    return knex.schema.table("subscribers", table => {
        table.index("sha1", "subscribers_sha1_idx");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table("subscribers", table => {
        table.dropIndex("sha1", "subscribers_sha1_idx");
    });
};
