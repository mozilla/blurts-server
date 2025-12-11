/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export function isEligibleForPremium(countryCode: string) {
  // These lines are covered by the BreachAlertEmail test,
  // but for some reason get marked as uncovered again once the
  // `src/scripts/cronjobs/emailBreachAlerts.test.ts` tests are run:
  /* c8 ignore next 3 */
  if (countryCode !== "us") {
    return false;
  }

  return true;
}
