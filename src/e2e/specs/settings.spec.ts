/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from "../fixtures/basePage.js";

// bypass login
test.use({ storageState: "./e2e/storageState.json" });
test.describe(`${process.env.E2E_TEST_ENV} Settings Page`, () => {
  test("Verify settings page loads", async ({ settingsPage }) => {
    // should go directly to data breach page
    await settingsPage.open();

    await expect(settingsPage.settingsHeader).toBeVisible();
    await expect(settingsPage.addEmailButton).toBeVisible();
    await expect(settingsPage.emailHeader).toBeVisible();
  });

  test("Verify that a user can select between the Breach alert preferences", async ({
    settingsPage,
  }) => {
    test.info().annotations.push({
      type: "issue",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2095115",
    });

    // go to monitor settings page
    await settingsPage.open();
    await settingsPage.tabNotifications.click();

    await expect(async () => {
      // select "send breach alerts to the affected email address" option
      // force is needed when another element intercepts pointer events
      await settingsPage.sendToAffectedEmailRadioButton.click({ force: true });

      // verify option is selected
      await expect(settingsPage.sendToAffectedEmailRadioButton).toBeChecked();
    }).toPass({ timeout: 2000 });

    await expect(async () => {
      // select "send all breach alerts to the primary email address"
      // force is needed when another element intercepts pointer events
      await settingsPage.sendToPrimaryEmailRadioButton.click({ force: true });

      // verify option is selected
      await expect(settingsPage.sendToPrimaryEmailRadioButton).toBeChecked();
    }).toPass({ timeout: 2000 });
  });
});
