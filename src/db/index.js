import Knex from 'knex'
import knexConfig from './knexfile.js'
import * as subscribers from './tables/subscribers.js'
import * as emailAddresses from './tables/email_addresses.js'
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
  destroyConnection,
  subscribers,
  emailAddresses
}
