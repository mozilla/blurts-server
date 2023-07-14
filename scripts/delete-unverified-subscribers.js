'use strict'

import { deleteUnverifiedSubscribers } from '../db/DB';

/**
 * Cron: Hourly
 * Delete any records of subscribers not verified within 24 hrs
 */
(async () => {
  await deleteUnverifiedSubscribers()
  process.exit()
})()
