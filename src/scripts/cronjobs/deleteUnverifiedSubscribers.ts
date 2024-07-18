"use strict";

import { deleteUnverifiedSubscribers } from "../../db/tables/subscribers";

/**
 * Cron: Hourly
 * Delete any records of subscribers not verified within 24 hrs
 */
(async () => {
  await deleteUnverifiedSubscribers();
  process.exit();
})();
