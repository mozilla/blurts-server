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

const test = base.extend<{
  landingPage: LandingPage;
  authPage: AuthPage;
  dashboardPage: DashboardPage;
  dataBreachPage: DataBreachPage;
  settingsPage: SettingsPage;
  scanPage: ScanPage;
  purchasePage: PurchasePage;
  welcomePage: WelcomePage;
}>({
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
});

export { test, expect };
