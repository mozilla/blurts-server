/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up (knex) {
  return knex.schema.table("subscribers", table => {
    table.timestamp("churn_prevention_email_sent_at");
    table.index("churn_prevention_email_sent_at");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down (knex) {
  return knex.schema.table("subscribers", table => {
    table.dropIndex("churn_prevention_email_sent_at")
    table.dropColumn("churn_prevention_email_sent_at");
  });
}
