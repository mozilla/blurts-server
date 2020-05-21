"use strict";


// Note: this index was created on stage and prod by hand
// Use this statement to "fake" the migration:
// INSERT INTO knex_migrations (name, batch, migration_time) values ('20191118100718_add-fxa-uid-index.js', (SELECT max(batch) + 1 FROM knex_migrations), '2019-11-18 11:00:00.000-05');

exports.up = function(knex) {
    return knex.schema.table("subscribers", table => {
        table.index("fxa_uid", "subscribers_fxa_uid_idx");
    });
};

exports.down = function(knex) {
    return knex.schema.table("subscribers", table => {
        table.dropIndex("fxa_uid", "subscribers_fxa_uid_idx");
    });
};
