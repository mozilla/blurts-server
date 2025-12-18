/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { config } from "@/config";

const currentFilePath = fileURLToPath(import.meta.url);
const ftlRoot = resolve(currentFilePath, "../../../../../locales/");
const availableLocales = readdirSync(ftlRoot);
const supportedLocales = config.supportedLocales.split(",");

export const usableLocales = availableLocales.filter((locale) =>
  supportedLocales.includes(locale),
);

export async function generateStaticLocaleParam(): Promise<
  Array<{ locale: string }>
> {
  return usableLocales.map((locale) => {
    return {
      locale: locale,
    };
  });
}
