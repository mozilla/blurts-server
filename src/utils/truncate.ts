/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* c8 ignore start */
export function truncateDescription(str: string, maxLength = 80): string {
  if (str.length <= maxLength) return str;

  const trimmed = str.slice(0, maxLength + 1); // edge word detection
  const lastSpace = trimmed.lastIndexOf(" ");
  if (lastSpace === -1) return str.slice(0, maxLength) + "…";

  return str.slice(0, lastSpace) + "…";
}
/* c8 ignore end */
