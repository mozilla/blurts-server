/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactLocalization } from "@fluent/react";
import { LocaleData } from "../server/l10n";

export function getLocale(
  localeData: LocaleData[] | ReactLocalization,
): string {
  // In tests, we only load "en", always (see <TestComponentWrapper>), so our
  // tests will never hit the other test cases, hence the `c8 ignore`:
  /* c8 ignore next 5 */
  return (
    (Array.isArray(localeData)
      ? localeData[0]?.locale
      : Array.from(localeData.bundles)[0].locales[0]) ?? "en"
  );
}
