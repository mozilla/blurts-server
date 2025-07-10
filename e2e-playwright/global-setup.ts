/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { chromium, request } from "@playwright/test";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  type E2E_TEST_ENV_VALUE,
  getBaseTestEnvUrl,
} from "./utils/environment";
import { locations } from "./playwright.config";
import { goToFxA, signUpUser } from "./utils/fxa";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function setupFeatureFlags() {
  const baseURL =
    process.env.E2E_TEST_ENV === "production"
      ? getBaseTestEnvUrl("production" as E2E_TEST_ENV_VALUE)
      : getBaseTestEnvUrl("stage" as E2E_TEST_ENV_VALUE);
  const apiContext = await request.newContext();
  const response = await apiContext.get(
    `${baseURL}/api/v1/admin/feature-flags`,
  );

  if (!response.ok()) {
    throw new Error(`Failed to fetch feature flags: ${response.status()}`);
  }

  fs.writeFileSync(
    path.resolve(__dirname, "./storage/enabled-feature-flags.json"),
    JSON.stringify({ data: (await response.json()) ?? [] }),
  );
}

async function setupUserAccounts() {
  const browser = await chromium.launch();
  const emails: Record<string, string> = {};

  for (const location of locations) {
    const countryCode = location.name.toLowerCase();
    const context = await browser.newContext({
      geolocation: location.geolocation,
      locale: location.locale,
      permissions: ["geolocation"],
    });
    const page = await context.newPage();

    // Sign up flow
    const timestamp = Date.now();
    const email = `${process.env.E2E_TEST_ACCOUNT_BASE_EMAIL}_${countryCode}_${timestamp}@restmail.net`;
    emails[countryCode] = email;

    await goToFxA(page, countryCode);
    await signUpUser(
      page,
      email,
      process.env.E2E_TEST_ACCOUNT_BASE_PASSWORD as string,
    );

    // Validate user is signed in
    await page.waitForURL("**/user/**");

    // Store test user session
    await context.storageState({
      path: path.resolve(
        __dirname,
        `./storage/user-session-${countryCode}.json`,
      ),
    });

    await context.close();
  }

  await browser.close();

  // Store test user emails
  fs.writeFileSync(
    path.resolve(__dirname, "./storage/user-emails.json"),
    JSON.stringify(emails),
  );
}

const globalSetup = async () => {
  await setupFeatureFlags();
  await setupUserAccounts();
};

export default globalSetup;
