/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

function formatDate (date, locales) {
  const jsDate = new Date(date)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const intlDateTimeFormatter = new Intl.DateTimeFormat(locales, options)

  return intlDateTimeFormatter.format(jsDate)
}

export { formatDate }
