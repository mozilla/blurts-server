/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export function deleteAllCookies() {
  const cookieParts = document.cookie.split(";");
  const cookieNames = cookieParts.map((part) => part.trim().split("=")[0]);
  cookieNames.forEach((cookieName) => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  });
}
