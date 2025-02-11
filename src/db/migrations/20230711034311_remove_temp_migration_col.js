/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function up(knex) {
  if (await knex.schema.hasColumn("subscribers", "db_migration_1")) {
    await knex.schema.alterTable("subscribers", (table) => {
      table.dropColumn("db_migration_1");
    });
  }

  if (true === (await knex.schema.hasColumn("subscribers", "db_migration_2"))) {
    await knex.schema.alterTable("subscribers", (table) => {
      table.dropColumn("db_migration_2");
    });
  }
}

export async function down(knex) {
  if (true === (await knex.schema.hasColumn("subscribers", "db_migration_1"))) {
    console.log("do nothing for db_migration_1");
  }

  if (true === (await knex.schema.hasColumn("subscribers", "db_migration_2"))) {
    console.log("do nothing for db_migration_2");
  }
}
