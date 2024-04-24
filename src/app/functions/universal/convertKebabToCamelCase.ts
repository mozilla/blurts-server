/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export function convertKebabToCamelCase(string: string) {
  const camelString = string.replace(/-./g, (segment) =>
    segment[1].toUpperCase(),
  );
  return camelString[0].toUpperCase() + camelString.slice(1);
}
