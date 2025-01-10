/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up (knex) {
  return knex.schema.table("subscribers", table => {
    table.boolean("churn_prevention_email_sent").defaultTo(false);
    table.index("churn_prevention_email_sent");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down (knex) {
  return knex.schema.table("subscribers", table => {
    table.dropIndex("churn_prevention_email_sent")
    table.dropColumn("churn_prevention_email_sent");
  });
}
