/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SubscriberRow } from "knex/types/tables";
import { acceptedLanguages, negotiateLanguages } from "@fluent/langneg";
import { ExtendedReactLocalization } from "../app/hooks/l10n";
import { getSpecificL10nSync } from "../app/functions/server/mockL10n";

export function getEmailL10n(
  subscriber: SubscriberRow,
): ExtendedReactLocalization {
  const requestedLocale = acceptedLanguages(subscriber.signup_language);
  const supportedLocales = (process.env.SUPPORTED_LOCALES ?? "en").split(",");
  const locales = negotiateLanguages(requestedLocale, supportedLocales, {
    defaultLocale: "en",
  });

  return getSpecificL10nSync(locales);
}
