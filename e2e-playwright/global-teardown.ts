/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { chromium } from "@playwright/test";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { getTestUserEmails, getTestUserSession } from "./utils/user";
import { getBaseTestEnvUrl } from "./utils/environment";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function removeTestStorage() {
  const storageDir = path.resolve(__dirname, "./storage");

  if (fs.existsSync(storageDir)) {
    fs.rmSync(storageDir, { force: true, recursive: true });
    console.info("Removed storage directory after running tests");
  }
}

async function deleteTestUserAccounts() {
  const browser = await chromium.launch();
  const userEmails = getTestUserEmails();

  for (const userCountryCode in userEmails) {
    const storageState = getTestUserSession(userCountryCode);
    const context = await browser.newContext({ storageState });
    const page = await context.newPage();

    await page.goto(`${getBaseTestEnvUrl()}/user/settings/manage-account`);
    await page.getByRole("button", { name: "Delete account" }).click();
    const deleteDialog = page.getByRole("dialog", {
      name: "Your ⁨Monitor⁩ account will be permanently deleted",
    });
    const deleteButtonConfirm = deleteDialog.getByRole("button", {
      name: "Delete account",
    });
    await deleteButtonConfirm.click();
    await page.waitForURL(`${getBaseTestEnvUrl()}/`);

    await context.close();
  }

  await browser.close();
}

const globalTeardown = async () => {
  await deleteTestUserAccounts();
  removeTestStorage();
};

export default globalTeardown;
