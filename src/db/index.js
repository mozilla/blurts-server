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
export * from './tables/email_addresses.js'
