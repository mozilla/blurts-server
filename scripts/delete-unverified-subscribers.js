'use strict'

import { deleteUnverifiedSubscribers } from '../src/db/tables/subscribers.js';

/**
 * Cron: Hourly
 * Delete any records of subscribers not verified within 24 hrs
 */
(async () => {
  await deleteUnverifiedSubscribers()
  process.exit()
})()
