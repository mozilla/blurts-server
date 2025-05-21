/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test } from "@playwright/test";

test.beforeEach(async ({ context }) => {
  await context.route("**/*", async (route) => {
    const requestUrl = route.request().url();
    const headers = route.request().headers();

    if (new URL(requestUrl).origin === process.env.E2E_TEST_BASE_URL) {
      headers["x-forced-feature-flags"] =
        "SidebarNavigationRedesign,EditScanProfileDetails";
    }

    await route.continue({ headers });
  });
});
