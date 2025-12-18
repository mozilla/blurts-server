/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export function getLangString(locale: string): string {
  // Load strings in `locale`, but also the English strings to fall back to
  // for strings that aren't localised to that locale yet:
  return `${locale}, en;q=0.1`;
}
