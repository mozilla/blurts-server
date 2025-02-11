/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  // During some of our tests, we inserted scans with duplicate IDs.
  // Delete those:
  const duplicateScanIdSubQuery = knex("onerep_scans")
    .select("onerep_scan_id")
    .groupBy("onerep_scan_id")
    .havingRaw("COUNT(*) > ?", [1]);
  await knex("onerep_scans")
    .delete()
    .whereIn("onerep_scan_id", duplicateScanIdSubQuery);

  await knex.schema.alterTable("onerep_scans", (table) => {
    table.unique("onerep_scan_id");
  });

  await knex.schema.createTable("onerep_scan_results", (table) => {
    table.increments("id").primary();
    table.integer("onerep_scan_result_id").notNullable();
    table
      .integer("onerep_scan_id")
      .references("onerep_scans.onerep_scan_id")
      .notNullable();
    table.string("link").notNullable();
    table.integer("age").nullable();
    table.string("data_broker").notNullable();
    table.integer("data_broker_id").notNullable();
    table.jsonb("emails").notNullable();
    table.jsonb("phones").notNullable();
    table.jsonb("addresses").notNullable();
    table.jsonb("relatives").notNullable();
    table.string("first_name").notNullable();
    table.string("middle_name").nullable();
    table.string("last_name").notNullable();
    table.string("status").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
    table.index("onerep_scan_id");
    table.index("onerep_scan_result_id");
  });

  const scanRows = await knex("onerep_scans").select(
    "id",
    "onerep_scan_id",
    "onerep_scan_results",
  );

  const scanResultRows = scanRows
    .map((scan) => {
      return (
        scan.onerep_scan_results?.data.map((scanResult) => {
          const rowToInsert = {
            onerep_scan_result_id: scanResult.id,
            onerep_scan_id: scan.onerep_scan_id,
            link: scanResult.link,
            age:
              typeof scanResult.age === "string"
                ? Number.parseInt(scanResult.age, 10)
                : null,
            data_broker: scanResult.data_broker,
            data_broker_id: scanResult.data_broker_id,
            emails: JSON.stringify(scanResult.emails),
            phones: JSON.stringify(scanResult.phones),
            addresses: JSON.stringify(scanResult.addresses),
            relatives: JSON.stringify(scanResult.relatives),
            first_name: scanResult.first_name,
            middle_name: scanResult.middle_name,
            last_name: scanResult.last_name,
            status: scanResult.status,
          };
          return rowToInsert;
        }) ?? []
      );
    })
    .flat();

  if (scanResultRows.length > 0) {
    await knex("onerep_scan_results").insert(scanResultRows);
  }

  await knex.schema.alterTable("onerep_scans", (table) => {
    table.dropColumn("onerep_scan_results");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.alterTable("onerep_scans", (table) => {
    table.jsonb("onerep_scan_results");
  });
  await knex.schema.dropTable("onerep_scan_results");
  await knex.schema.alterTable("onerep_scans", (table) => {
    table.dropUnique("onerep_scan_id");
  });
}
