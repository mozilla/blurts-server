/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import fs from "fs";
import { test as baseTest, expect } from "./baseTest";
import { getTestUserSession } from "../utils/user";

// The `use` function is no React hook and not linted correctly.
// For more info see issue: https://github.com/facebook/react/issues/31237
/* eslint-disable react-hooks/rules-of-hooks */
const test = baseTest.extend<object, { storageState?: string }>({
  storageState: async ({}, use, testInfo) => {
    const countryCode = testInfo.project.use?.countryCode;
    if (!countryCode) {
      await use(undefined);
      return;
    }

    const storagePath = getTestUserSession(countryCode);
    const exists = fs.existsSync(storagePath);
    if (exists) {
      await use(storagePath);
    } else {
      console.warn(`No user session file found for [${countryCode}]`);
      await use(undefined);
    }
  },
});
/* eslint-enable react-hooks/rules-of-hooks */

export { test, expect };
