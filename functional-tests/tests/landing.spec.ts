/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from "../fixtures/baseTest";
import { getBaseTestEnvUrl } from "../utils/environment";

test.describe(`Verify landing page [${process.env.E2E_TEST_ENV}]`, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${getBaseTestEnvUrl()}/`);
  });

  test("matches locale from project config", async ({ page }, testInfo) => {
    const htmlLang = await page.getAttribute("html", "lang");
    const expectedLang = testInfo.project.use.locale;
    expect(expectedLang).toContain(htmlLang);
  });

  test("landing page loads", async ({ page }, testInfo) => {
    if (
      process.env.E2E_TEST_ENV !== "local" &&
      testInfo.project.use.countryCode === "nl"
    ) {
      const heading = page.locator("h1", {
        hasText: "Ontdek waar uw privégegevens zijn gelekt – en neem ze terug",
      });
      await expect(heading).toBeVisible();
    } else {
      const heading = page.locator("h2", {
        hasText: "Find where your personal info is exposed — and take it back",
      });
      await expect(heading).toBeVisible();
    }
  });
});
