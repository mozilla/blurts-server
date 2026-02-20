/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "vitest";
import { getLocale } from "./getLocale";
import { LocaleData } from "../l10n";
import { ReactLocalization } from "@fluent/react";
import { FluentBundle } from "@fluent/bundle";

it("can detect the applicable locale from plain bundle sources", () => {
  const localeData: LocaleData[] = [
    {
      locale: "nl",
      bundleSources: [],
    },
    {
      locale: "es",
      bundleSources: [],
    },
  ];

  expect(getLocale(localeData)).toBe("nl");
});

it("can detect the applicable locale an instantiated ReactLocalization instance", () => {
  const localeData = new ReactLocalization([
    new FluentBundle("nl"),
    new FluentBundle("es"),
  ]);

  expect(getLocale(localeData)).toBe("nl");
});

it("falls back to `en` if no locale could be detected", () => {
  const localeData: LocaleData[] = [];

  expect(getLocale(localeData)).toBe("en");
});
