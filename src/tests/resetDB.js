'use strict'

import Knex from 'knex'

import { createConnection, destroyConnection } from '../db/index.js'
import knexConfig from '../db/knexfile.js'
import { TEST_SUBSCRIBERS, TEST_EMAIL_ADDRESSES } from '../db/seeds/test_subscribers.js'

// (Re-)create DB connection at the beginning of each test suite
const before = () => {
  createConnection()
}

// Reset the subscribers records before each test
const beforeEach = async () => {
  const knex = Knex(knexConfig)
  await knex('email_addresses').del()
  await knex('subscribers').del()
  await knex('subscribers').insert(Object.values(TEST_SUBSCRIBERS))
  await knex('email_addresses').insert(Object.values(TEST_EMAIL_ADDRESSES))
  knex.destroy()
}

// Destroy DB connection at the end of each test suite
// Without this, some test failures leave the handle open
// causing the test runner to hang.
const after = () => {
  destroyConnection()
}

export { before, beforeEach, after }
