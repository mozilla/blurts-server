/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

 /**
  * @param { import("knex").Knex } knex
  * @returns { Promise<void> }
  */
 export function up(knex) {
  return knex.schema
    .table("qa_custom_brokers", table => {
      table.dropColumn("onerep_profile_id");
      table.string('data_broker_id').nullable();
      table.string('id').primary();
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.table('qa_custom_brokers',table => {
      table.string("onerep_profile_id").nullable();
      table.dropColumn('data_broker_id');  
      table.dropColumn('id');  
    });
}
