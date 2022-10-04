'use strict'

const DB = require('../db/DB');

/**
 * A cron job that runs nightly to delete any records not verified within 24 hrs
 */
(async () => {
  await DB.deleteUnverifiedSubscribers()
  process.exit()
})()
