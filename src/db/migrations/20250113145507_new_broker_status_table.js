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
      table.string('broker_status').nullable();
      table.string('scan_result_status').nullable();
      table.string('url').nullable();
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.table('qa_custom_brokers',table => {
      table.dropColumn('broker_status');  
      table.dropColumn('scan_result_status');  
      table.dropColumn('url');  
    });
}
