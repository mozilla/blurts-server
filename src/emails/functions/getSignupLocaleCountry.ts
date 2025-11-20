/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { acceptedLanguages } from "@fluent/langneg";
import type { SubscriberRow } from "knex/types/tables";
import { SanitizedSubscriberRow } from "../../app/functions/server/sanitize";

export function getSignupLocaleCountry(
  subscriber:
    | Pick<SubscriberRow, "fxa_profile_json">
    | Pick<SanitizedSubscriberRow, "fxa_profile_json">,
) {
  const signupAcceptLanguages = acceptedLanguages(
    // This line is covered by the getSignupLocaleCountry test,
    // but for some reason gets marked as uncovered again once the
    // `src/scripts/cronjobs/emailBreachAlerts.test.ts` tests are run:
    /* c8 ignore next */
    subscriber.fxa_profile_json?.locale ?? "en-us",
  );

  // This line is covered by the getSignupLocaleCountry test,
  // but for some reason gets marked as uncovered again once the
  // `src/scripts/cronjobs/emailBreachAlerts.test.ts` tests are run:
  /* c8 ignore next */
  return signupAcceptLanguages[0].split("-")[1]?.toLowerCase() ?? "us";
}
