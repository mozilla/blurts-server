/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

'use strict'

exports.up = function (knex) {
  return knex.schema.table('subscribers', (table) => {
    table.boolean('db_migration_1')
    table.boolean('db_migration_2')
  })
}

exports.down = function (knex) {
  return knex.schema.table('subscribers', (table) => {
    table.dropColumn('db_migration_1')
    table.dropColumn('db_migration_2')
  })
}
