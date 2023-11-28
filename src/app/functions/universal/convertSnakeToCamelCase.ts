/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export type SnakeToCamelCase<S extends string> =
  S extends `${infer T}_${infer U}`
    ? `${T}${Capitalize<SnakeToCamelCase<U>>}`
    : S;

export function convertSnakeToCamelCase(
  string: string,
): SnakeToCamelCase<string> {
  const underscore = "_" as const;
  if (!string.includes(underscore)) {
    return string;
  }

  return string
    .split(underscore)
    .map((segment, segmentIndex) =>
      segmentIndex === 0
        ? segment
        : `${segment[0].toUpperCase()}${segment.slice(1)}`,
    )
    .join("");
}
