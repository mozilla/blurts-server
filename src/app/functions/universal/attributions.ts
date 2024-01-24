/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

type DefaultParams = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
};

export function modifyAttributionsForUrl(
  url: string,
  replaceValues: Record<string, string>,
  defaultValues: DefaultParams,
) {
  const originalUrl = new URL(url);
  const searchParams = originalUrl.searchParams;
  // overwrite the three params below

  if (replaceValues.entrypoint) {
    searchParams.set("entrypoint", replaceValues.entrypoint);
  }

  if (replaceValues.form_type) {
    searchParams.set("form_type", replaceValues.form_type);
  }

  // placeholder utms if acquisition source is unknown
  if (!searchParams.has("utm_source")) {
    searchParams.append("utm_source", defaultValues.utm_source);
  }
  if (!searchParams.has("utm_medium")) {
    searchParams.append("utm_medium", defaultValues.utm_medium);
  }
  if (!searchParams.has("utm_campaign")) {
    searchParams.append("utm_campaign", defaultValues.utm_campaign);
  }

  return `${originalUrl.pathname}?${searchParams.toString()}`;
}
