/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { BinaryLike } from "crypto";
import { getSha1 } from "../../../utils/fxa";
import { logger } from "../../functions/server/logging";

export function emailHashPrefix(email: string) {
  return getSha1(email as BinaryLike)
    .slice(0, 6)
    .toUpperCase();
}

export const allE2ETestEmailKeys = (() => {
  return Object.keys(process.env).filter(
    (key) =>
      key.startsWith("E2E_TEST_ACCOUNT_EMAIL") &&
      (process.env[key] ||
        (logger.info(`Warning: ${key} is not set up! Ignoring it...`) &&
          false)),
  );
})();

export const hashToEmailKeyMap = (() => {
  const mapping: { [key: string]: string } = {};
  allE2ETestEmailKeys.forEach((key) => {
    mapping[emailHashPrefix(process.env[key] as string)] = key;
  });
  return mapping;
})();

export function isTestEmail(email: string) {
  if (!email) return false;
  const testEmailKeys = Object.keys(process.env).filter((key) =>
    key.startsWith("E2E_TEST_ACCOUNT_EMAIL"),
  );
  const testEmails = testEmailKeys.map((key) => process.env[key]);
  return testEmails.includes(email);
}
