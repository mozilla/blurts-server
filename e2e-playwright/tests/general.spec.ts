/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  test,
  expect,
  defaultLocalForcedFeatureFlags,
} from "../fixtures/baseTest";
import { getEnabledFeatureFlags } from "../playwright.config";
import { FeatureFlagName } from "../../src/db/tables/featureFlags";
import { getBaseTestEnvUrl } from "../utils/helpers";

const isLocal = process.env.E2E_TEST_ENV === "local";

// extend enabled local feature flags for testing purposes
const extraFeatureFlags: FeatureFlagName[] = ["GA4SubscriptionEvents"];
test.use({ extraLocalForcedFeatureFlags: extraFeatureFlags });

// General tests to confirm the E2E test setup works as expected
test.describe(`Verify general setup [${process.env.E2E_TEST_ENV}]`, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${getBaseTestEnvUrl()}/`);
  });

  test("check simulated location and locale", async ({ page }, testInfo) => {
    const geolocation: GeolocationCoordinates = await page.evaluate(
      () =>
        new Promise((resolve) =>
          navigator.geolocation.getCurrentPosition((pos) =>
            resolve(pos.coords),
          ),
        ),
    );
    expect(geolocation.latitude).toBe(
      testInfo.project.use.geolocation?.latitude,
    );
    expect(geolocation.longitude).toBe(
      testInfo.project.use.geolocation?.longitude,
    );

    const language = await page.evaluate(() => navigator.language);
    expect(language).toBe(testInfo.project.use.locale);
  });

  test("uses expected enabled feature flags", async ({
    localForcedFeatureFlags,
    enabledFeatureFlags,
  }) => {
    const expectedFeatureFlags = getEnabledFeatureFlags();
    const finalExpectedFeatureFlags = isLocal
      ? [...expectedFeatureFlags, ...localForcedFeatureFlags]
      : expectedFeatureFlags;

    expect(enabledFeatureFlags).toEqual(
      expect.arrayContaining(finalExpectedFeatureFlags),
    );
  });

  test("extending local feature flags", async ({ localForcedFeatureFlags }) => {
    const expectedFeatureFlags = isLocal
      ? [...defaultLocalForcedFeatureFlags, ...extraFeatureFlags]
      : [];

    expect(localForcedFeatureFlags).toEqual(
      expect.arrayContaining(expectedFeatureFlags),
    );
  });
});
