/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test as baseTest, expect } from "@playwright/test";
import { FeatureFlagName } from "../../src/db/tables/featureFlags";

// Feature flags that are enabled by default locally
export const defaultLocalForcedFeatureFlags: FeatureFlagName[] = [
  "CancellationFlow",
  "DiscountCouponNextThreeMonths",
  "AutomaticRemovalCsatSurvey",
  "AdditionalRemovalStatuses",
  "PromptNoneAuthFlow",
  "DataBrokerRemovalTimeEstimateLabel",
  "LandingPageRedesign",
  "CirrusV2",
  "DataBrokerRemovalAttempts",
  "SidebarNavigationRedesign",
  "EditScanProfileDetails",
  "SubPlat3",
  "Announcements",
  "PrivacyProductsBundle",
];

// The `use` function is no React hook and not linted correctly.
// For more info see issue: https://github.com/facebook/react/issues/31237
/* eslint-disable react-hooks/rules-of-hooks */
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
  // See https://github.com/microsoft/playwright/issues/9468#issuecomment-943707670
  // Sets the `x-forced-feature-flags` and `x-nimbus-preview-mode` on every
  // request to Monitor.
  sharedBeforeEach: [
    async ({ context, localForcedFeatureFlags }, use) => {
      await context.route("**/*", async (route) => {
        const requestUrl = route.request().url();
        const headers = route.request().headers();

        if (new URL(requestUrl).origin === process.env.E2E_TEST_BASE_URL) {
          headers["x-forced-feature-flags"] = localForcedFeatureFlags.join(",");
          headers["x-nimbus-preview-mode"] = "true";
        }

        await route.continue({ headers });
      });
      await use();
    },
    { scope: "test", auto: true },
  ],
});
/* eslint-enable react-hooks/rules-of-hooks */

export { test, expect };
