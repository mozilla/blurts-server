'use strict'

const DB = require('../db/DB');

/**
 * Cron: Hourly
 * Delete any records of subscribers not verified within 24 hrs
 */
(async () => {
  await DB.deleteUnverifiedSubscribers()
  process.exit()
})()
