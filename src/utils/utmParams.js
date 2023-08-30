/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param {{ linkUrl: string; utmParams: { [key: string]: string; }; }} options
 * @returns {string} url
 */
// TODO: Add unit test when changing this code:
/* c8 ignore start */
export function appendUtmParams ({ linkUrl, utmParams }) {
  const url = new URL(linkUrl)

  for (const param in utmParams) {
    url.searchParams.append(param, utmParams[param])
  }
  return url.href
}
/* c8 ignore stop */
