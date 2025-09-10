/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test as setup, request, Browser } from "@playwright/test";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  type E2E_TEST_ENV_VALUE,
  getBaseTestEnvUrl,
} from "../utils/environment";
import { goToFxA, signUpUser } from "../utils/fxa";
import { getTestUserSessionFilePath } from "../utils/user";
import { projects } from "../playwright.config";

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
    path.resolve(
      __dirname,
      "../functional-test-cache/enabled-feature-flags.json",
    ),
    JSON.stringify({ data: (await response.json()) ?? [] }),
  );
}

async function setupUserAccount(browser: Browser) {
  const emails: Record<string, string> = {};

  for (const project of projects) {
    const projectName = project.name!;
    const context = await browser.newContext({
      geolocation: project.use.geolocation,
      locale: project.use.locale,
      permissions: ["geolocation"],
    });
    const page = await context.newPage();

    // Sign up flow
    const timestamp = Date.now();
    const email = `${process.env.E2E_TEST_ACCOUNT_BASE_EMAIL}_${projectName.toLowerCase().replaceAll(" ", "-").replaceAll("(", "").replaceAll(")", "")}_${timestamp}@restmail.net`;
    emails[projectName] = email;

    await goToFxA(page, {
      countryCode: project.use.countryCode,
      isMobile: false,
    });
    await signUpUser(
      page,
      email,
      process.env.E2E_TEST_ACCOUNT_BASE_PASSWORD as string,
    );

    // Validate user is signed in
    await page.waitForURL("**/user/**");

    // Store test user session
    const storageStatePath = getTestUserSessionFilePath(project.name);
    await context.storageState({
      path: storageStatePath,
    });

    await context.close();
  }

  // Store test user emails
  fs.writeFileSync(
    path.resolve(__dirname, "../functional-test-cache/user-emails.json"),
    JSON.stringify(emails),
  );
}

setup("Set up feature flags and user accounts", async ({ browser }) => {
  // Creating an account involves waiting for an email to arrive,
  // before being able to insert the confirmation code. That takes
  // longer than usual.
  setup.slow();
  // Ensure storage directory exists
  const dir = path.resolve(__dirname, "../functional-test-cache");
  fs.mkdirSync(dir, { recursive: true });

  await setupFeatureFlags();
  await setupUserAccount(browser);
});
