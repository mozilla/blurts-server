/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex("removal_pilot")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("removal_pilot").insert([
        { id: 1, name: "round_01", enrolled_users: 0 },
      ]);
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex("removal_pilot").del();
}
