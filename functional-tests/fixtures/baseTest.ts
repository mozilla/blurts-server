/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test as baseTest, expect } from "@playwright/test";
import { FeatureFlagName } from "../../src/db/tables/featureFlags";
import { createTestClientRegionToken } from "../../src/app/functions/server/testCountryCodeToken";
import { getBaseTestEnvUrl } from "../utils/environment";

// Feature flags that are enabled by default locally
export const defaultLocalForcedFeatureFlags: FeatureFlagName[] = [
  "CancellationFlow",
  "AutomaticRemovalCsatSurvey",
  "AdditionalRemovalStatuses",
  "DataBrokerRemovalTimeEstimateLabel",
  "LandingPageRedesign",
  "DataBrokerRemovalAttempts",
  "SubPlat3",
];

const test = baseTest.extend<{
  extraLocalForcedFeatureFlags: FeatureFlagName[];
  localForcedFeatureFlags: FeatureFlagName[];
  enabledFeatureFlags: FeatureFlagName[];
  sharedBeforeEach: void;
}>({
  // Per-test flags to extend the default
  extraLocalForcedFeatureFlags: [],
  // Local force enabled feature flags
  localForcedFeatureFlags: async ({ extraLocalForcedFeatureFlags }, use) => {
    const mergedFlags: FeatureFlagName[] = Array.from(
      new Set([
        ...defaultLocalForcedFeatureFlags,
        ...extraLocalForcedFeatureFlags,
      ]),
    );
    await use(mergedFlags);
  },
  // All enabled feature flags
  enabledFeatureFlags: async ({ localForcedFeatureFlags }, use, testInfo) => {
    const enabledFeatureFlags: FeatureFlagName[] =
      testInfo.project.use?.enabledFeatureFlags ?? [];
    const mergedFlags: FeatureFlagName[] = Array.from(
      new Set([...enabledFeatureFlags, ...localForcedFeatureFlags]),
    );
    await use(mergedFlags);
  },
  sharedBeforeEach: [
    async ({ context, localForcedFeatureFlags }, use, testInfo) => {
      await context.route("**/*", async (route) => {
        const request = route.request();
        const requestUrl = request.url();
        const headers = request.headers();

        if (new URL(requestUrl).origin === getBaseTestEnvUrl()) {
          // Ensure that the region and language headers persist.
          const { countryCode, locale } = testInfo.project.use;
          headers["Accept-Language"] = `${locale},${countryCode};q=1.0`;
          headers["X-Client-Region"] = countryCode ?? "";
          headers["x-forced-client-region-token"] = createTestClientRegionToken(
            countryCode ?? "",
          );

          // See https://github.com/microsoft/playwright/issues/9468#issuecomment-943707670
          // Sets the `x-forced-feature-flags` and `x-nimbus-preview-mode` on every
          // request to Monitor.
          headers["x-forced-feature-flags"] = localForcedFeatureFlags.join(",");
          headers["x-nimbus-preview-mode"] = "true";

          await route.continue({ headers });
        } else {
          await route.continue();
        }
      });

      await use();
    },
    { scope: "test", auto: true },
  ],
});

export { test, expect };
