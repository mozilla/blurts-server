/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export function modifyAttributionsForUrl(
  url: string,
  replaceValues: Record<string, string>,
  defaultValues: Record<string, string>,
) {
  const originalUrl = new URL(url);
  const searchParams = originalUrl.searchParams;
  // overwrite the three params below

  for (const k in replaceValues) {
    searchParams.set(k, replaceValues[k]);
  }

  for (const k in defaultValues) {
    if (!searchParams.has(k)) {
      searchParams.append(k, defaultValues[k]);
    }
  }

  return `${originalUrl.href.split("?")[0]}?${searchParams.toString()}`;
}

export function modifyAttributionsForUrlSearchParams(
  searchParams: URLSearchParams,
  replaceValues: Record<string, string>,
  defaultValues: Record<string, string>,
) {
  // overwrite the three params below
  for (const k in replaceValues) {
    searchParams.set(k, replaceValues[k]);
  }

  // placeholder utms if acquisition source is unknown
  for (const k in defaultValues) {
    if (!searchParams.has(k)) {
      searchParams.append(k, defaultValues[k]);
    }
  }

  return searchParams;
}

export const containsExpectedSearchParams = (
  expectedSearchParams: Record<string, string>,
  searchParams: URLSearchParams,
) =>
  Object.keys(expectedSearchParams).every(
    (searchParamKey) =>
      searchParams.get(searchParamKey) === expectedSearchParams[searchParamKey],
  );
