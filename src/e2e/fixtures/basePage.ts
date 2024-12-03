/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test as base, expect } from "@playwright/test";
import { LandingPage } from "../pages/landingPage.js";
import { AuthPage } from "../pages/authPage.js";
import { DashboardPage } from "../pages/dashBoardPage.js";
import { DataBreachPage } from "../pages/dataBreachPage.js";
import { SettingsPage } from "../pages/settingsPage.js";
import { ScanPage } from "../pages/scanPage.js";
import { PurchasePage } from "../pages/purchasePage.js";
import { WelcomePage } from "../pages/welcomeScanPage.js";
import { DataBrokersPage } from "../pages/dataBrokersPage.js";
import { AutomaticRemovePage } from "../pages/automaticRemovePage.js";

const test = base.extend<{
  landingPage: LandingPage;
  authPage: AuthPage;
  dashboardPage: DashboardPage;
  dataBreachPage: DataBreachPage;
  settingsPage: SettingsPage;
  scanPage: ScanPage;
  purchasePage: PurchasePage;
  welcomePage: WelcomePage;
  dataBrokersPage: DataBrokersPage;
  automaticRemovePage: AutomaticRemovePage;
}>({
  // The `use` function is no React hook and not linted correctly.
  // For more info see issue: https://github.com/facebook/react/issues/31237
  /* eslint-disable react-hooks/rules-of-hooks */
  authPage: async ({ page }, use) => {
    await use(new AuthPage(page));
  },
  landingPage: async ({ page }, use) => {
    await use(new LandingPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  dataBreachPage: async ({ page }, use) => {
    await use(new DataBreachPage(page));
  },
  settingsPage: async ({ page }, use) => {
    await use(new SettingsPage(page));
  },
  scanPage: async ({ page }, use) => {
    await use(new ScanPage(page));
  },
  purchasePage: async ({ page }, use) => {
    await use(new PurchasePage(page));
  },
  welcomePage: async ({ page }, use) => {
    await use(new WelcomePage(page));
  },
  dataBrokersPage: async ({ page }, use) => {
    await use(new DataBrokersPage(page));
  },
  automaticRemovePage: async ({ page }, use) => {
    await use(new AutomaticRemovePage(page));
  },
  /* eslint-enable react-hooks/rules-of-hooks */
});

export { test, expect };
