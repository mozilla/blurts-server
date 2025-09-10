/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Browser } from "@playwright/test";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { test as teardown } from "../fixtures/authenticatedTest";
import { getTestUserSessionFilePath } from "../utils/user";
import { getBaseTestEnvUrl } from "../utils/environment";
import { projects } from "../playwright.config";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function removeTestStorage() {
  const dir = path.resolve(__dirname, "../functional-test-cache");

  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { force: true, recursive: true });
    console.info("Deleted cache directory after running tests");
  }
}

async function deleteTestUserAccounts(browser: Browser) {
  for (const project of projects) {
    const storageState = getTestUserSessionFilePath(project.name);
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
}

teardown("Delete test user accounts", async ({ browser }) => {
  await deleteTestUserAccounts(browser);
  removeTestStorage();
});
