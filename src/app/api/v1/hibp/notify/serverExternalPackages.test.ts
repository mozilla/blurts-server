/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Regression guard for MNTOR-5314.
 *
 * `@grpc/grpc-js` (and its google-gax / @google-cloud/pubsub stack) must stay in
 * `next.config.js` `serverExternalPackages`. If Next.js bundles grpc-js, its gRPC StatusObject is
 * corrupted, which breaks the Pub/Sub publish in this route (`POST /api/v1/hibp/notify`) and makes
 * every failure render as the opaque "undefined undefined: undefined" — the cause of the ~7-week
 * breach-alert outage that started with the 2026-05-26 deploy. Keeping them external loads them
 * unbundled from node_modules, where publishing works.
 *
 * Read as text (rather than importing the config) because next.config.js's default export is
 * wrapped in `withSentryConfig(...)`, which would run the Sentry plugin at import time.
 */
describe("next.config.js serverExternalPackages (MNTOR-5314 regression guard)", () => {
  const source = readFileSync(
    path.join(process.cwd(), "next.config.js"),
    "utf8",
  );
  // The literal contents of the serverExternalPackages array (not the surrounding comments), so
  // this fails if a package is only mentioned in a comment but dropped from the array.
  const arrayBody = source.match(
    /serverExternalPackages:\s*\[([\s\S]*?)\]/,
  )?.[1];

  it("declares a serverExternalPackages array", () => {
    expect(arrayBody).toBeDefined();
  });

  it.each(["@grpc/grpc-js", "google-gax", "@google-cloud/pubsub"])(
    "keeps %s external so grpc-js is not bundled",
    (pkg) => {
      expect(arrayBody ?? "").toContain(`"${pkg}"`);
    },
  );
});
