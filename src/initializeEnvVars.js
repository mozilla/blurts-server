/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * This module would be part of config.ts, except that we still have a few plain-JS files that also need to access env vars
 */

import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import env from "@next/env";

// Doesn't run in tests by design, so ignore for coverage:
/* c8 ignore start */
if (
  typeof process.env.NEXT_RUNTIME !== "string" &&
  (process.env.NODE_ENV !== "test" || process.env.PLAYWRIGHT === "true")
) {
  // If we're in Next.js, our `.env` files are already set up to be loaded.
  // Outside of Next.js (e.g. in cron jobs), however, we need to explicitly load them.
  // (In unit tests, `next/jest` takes care of this, so no need to run this there.)
  env.loadEnvConfig(resolve(fileURLToPath(import.meta.url), "../../"));
}
