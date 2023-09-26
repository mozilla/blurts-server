/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactLocalization } from "@fluent/react";
import { LocaleData } from "../server/l10n";

export function getLocale(
  localeData: LocaleData[] | ReactLocalization
): string {
  return (
    (Array.isArray(localeData)
      ? localeData[0]?.locale
      : Array.from(localeData.bundles)[0].locales[0]) ?? "en"
  );
}
