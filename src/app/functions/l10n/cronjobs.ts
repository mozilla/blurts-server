/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { readFileSync, readdirSync } from "fs";
import { ReactLocalization } from "@fluent/react";
import {
  GetL10n,
  createGetL10n,
  createGetL10nBundles,
  type ExtendedReactLocalization,
  type GetL10nBundles,
} from ".";
import type { SanitizedSubscriberRow } from "../server/sanitize";
import { parseMarkup } from "./parseMarkup";

export function getEmailL10n(
  subscriber: SanitizedSubscriberRow,
): ExtendedReactLocalization {
  // We don't have a runtime language when we email people, so use their
  // language setting from when they signed up for their Mozilla account:
  return getL10n(subscriber.signup_language ?? "en");
}

export type LocaleData = {
  locale: string;
  bundleSources: string[];
};

const __dirname = dirname(fileURLToPath(import.meta.url));
const ftlRoot = resolve(__dirname, `../../locales/`);
export const getL10nBundles: GetL10nBundles = createGetL10nBundles({
  availableLocales: readdirSync(ftlRoot),
  // TODO: Make this optional in `createGetL10nBundles`, which would then make
  //       it required in the newly-created function:
  getAcceptLangHeader: () => "en",
  loadLocaleFiles: (locale) => {
    const referenceStringsPath = resolve(__dirname, `../../locales/${locale}/`);
    const ftlPaths = readdirSync(referenceStringsPath).map((filename) =>
      resolve(referenceStringsPath, filename),
    );

    return ftlPaths.map((filePath) => readFileSync(filePath, "utf-8"));
  },
  loadPendingStrings: () => {
    const pendingStringsPath = resolve(__dirname, "../../locales-pending/");
    const ftlPaths = readdirSync(pendingStringsPath).map((filename) =>
      resolve(pendingStringsPath, filename),
    );

    return ftlPaths.map((filePath) => readFileSync(filePath, "utf-8"));
  },
});

export const getL10n: GetL10n = createGetL10n({
  getL10nBundles: getL10nBundles,
  ReactLocalization: ReactLocalization,
  parseMarkup: parseMarkup,
});
