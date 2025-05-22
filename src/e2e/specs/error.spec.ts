/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from "../fixtures/basePage.js";
import "../utils/setFeatureFlags";

test.describe(`${process.env.E2E_TEST_ENV} - Verify Error Pages Functionality`, () => {
  test("Verify that the 404 page shows up on non-existent pages @smoke", async ({
    page,
  }) => {
    await page.goto("/non-existent-page/");
    await expect(
      page.locator("h1").getByText("⁨404⁩ Page not found"),
    ).toBeVisible();
  });
});
