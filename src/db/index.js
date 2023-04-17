/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Knex from 'knex'
import knexConfig from './knexfile.js'
let knex = Knex(knexConfig)

async function createConnection () {
  if (knex === null) {
    knex = Knex(knexConfig)
  }
}

async function destroyConnection () {
  if (knex !== null) {
    await knex.destroy()
    knex = null
  }
}

export {
  createConnection,
  destroyConnection
}

export * from './tables/subscribers.js'
export * from './tables/emailAddresses.js'
