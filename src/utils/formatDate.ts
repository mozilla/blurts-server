/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// TODO: Add unit test when changing this code:
/* c8 ignore next 8 */

function formatDate(date: string | Date, locales: string): string {
  const jsDate = typeof date === "string" ? new Date(date) : date;
  /** @type {{ year: 'numeric', month: 'long', day: 'numeric' }} */

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const intlDateTimeFormatter = new Intl.DateTimeFormat(locales, options);

  return intlDateTimeFormatter.format(jsDate);
}

export { formatDate };
