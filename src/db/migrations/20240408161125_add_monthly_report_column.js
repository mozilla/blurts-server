/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export function up(knex) {
  return knex.schema.table("subscribers", (table) => {
    table.dropColumn("monthly_email_optout");
    table.dropColumn("monthly_email_at");
    table.boolean("monthly_monitor_report").defaultTo(true);
    table.timestamp("monthly_monitor_report_at");
  });
}

export function down(knex) {
  return knex.schema.table("subscribers", (table) => {
    table.boolean("monthly_email_optout");
    table.timestamp("monthly_email_at");
    table.dropColumn("monthly_monitor_report");
    table.dropColumn("monthly_monitor_report_at");
  });
}
