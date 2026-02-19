/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as Sentry from "@sentry/node";
import { config } from "../../../config";
import { run } from "./syncBreaches";

Sentry.init({
  dsn: config.sentryDsn,
  tracesSampleRate: 1.0,
});

const SENTRY_SLUG = "cron-sync-breaches";

const checkInId = Sentry.captureCheckIn({
  monitorSlug: SENTRY_SLUG,
  status: "in_progress",
});

try {
  await run();
  Sentry.captureCheckIn({
    checkInId,
    monitorSlug: SENTRY_SLUG,
    status: "ok",
  });
} catch (error) {
  Sentry.captureCheckIn({
    checkInId,
    monitorSlug: SENTRY_SLUG,
    status: "error",
  });
  throw error;
}
setTimeout(process.exit, 1000);
