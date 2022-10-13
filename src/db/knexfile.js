import pgConnectionStr from 'pg-connection-string'

import AppConstants from '../app-constants.js'
const { DATABASE_URL, NODE_ENV } = AppConstants
const connectionObj = pgConnectionStr.parse(DATABASE_URL)
if (NODE_ENV === 'heroku') {
  connectionObj.ssl = { rejectUnauthorized: false }
}

// For runtime, use DATABASE_URL
const RUNTIME_CONFIG = {
  client: 'postgresql',
  connection: connectionObj
}

// For tests, use test-DATABASE
const testConnectionObj = pgConnectionStr.parse(DATABASE_URL.replace(/\/(\w*)$/, '/test-$1'))
const TESTS_CONFIG = {
  client: 'postgresql',
  connection: testConnectionObj
}

let defaultConfig = {}
if (NODE_ENV === 'tests') {
  defaultConfig = TESTS_CONFIG
} else {
  defaultConfig = RUNTIME_CONFIG
}

export default defaultConfig
