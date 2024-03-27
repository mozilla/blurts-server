/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ExtendedReactLocalization } from "../app/hooks/l10n";
import { getL10n, getL10nBundles } from "../app/functions/server/l10n";
import { SanitizedSubscriberRow } from "../app/functions/server/sanitize";

export function getEmailL10n(
  subscriber: SanitizedSubscriberRow,
): ExtendedReactLocalization {
  // We don't have a runtime language when we email people, so use their
  // language setting from when they signed up for their Mozilla account:
  return getL10n(getL10nBundles(subscriber.signup_language ?? "en"));
}
