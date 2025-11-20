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
} from "./index";
import type { SanitizedSubscriberRow } from "../server/sanitize";
import { parseMarkup } from "./parseMarkup";

export function getCronjobL10n(
  subscriber: Pick<SanitizedSubscriberRow, "signup_language">,
): ExtendedReactLocalization {
  // We don't have a runtime language when we email people, so use their
  // language setting from when they signed up for their Mozilla account:
  // Low priority for unit testing as it just calls a different function
  // with a default value provided if the input argument is undefined
  /* c8 ignore next */
  return getL10n(subscriber.signup_language ?? "en");
}

export type LocaleData = {
  locale: string;
  bundleSources: string[];
};

const rootDir = getRootDir();
export const getL10nBundles: GetL10nBundles = createGetL10nBundles({
  availableLocales: readdirSync(resolve(rootDir, `./locales/`)),
  // TODO: Make this optional in `createGetL10nBundles`, which would then make
  //       it required in the newly-created function:
  // We don't have tests for different locales.
  /* c8 ignore next */
  getAcceptLangHeader: () => "en",
  loadLocaleFiles: (locale) => {
    const referenceStringsPath = resolve(rootDir, `./locales/${locale}/`);
    const ftlPaths = readdirSync(referenceStringsPath).map((filename) =>
      resolve(referenceStringsPath, filename),
    );

    return ftlPaths.map((filePath) => readFileSync(filePath, "utf-8"));
  },
  loadPendingStrings: () => {
    const pendingStringsPath = resolve(rootDir, "./locales-pending/");
    const ftlPaths = readdirSync(pendingStringsPath).map((filename) =>
      resolve(pendingStringsPath, filename),
    );

    return ftlPaths.map((filePath) => readFileSync(filePath, "utf-8"));
  },
});

/**
 * Find the directory that contains the `locales` directory
 *
 * Cronjobs get bundled by esbuild, which inlines all required modules,
 * including this one. This means that the directory this code runs in depends
 * on the location of the calling code, and hence the relative path to the FTL
 * files does so too. This function traverses up the paths to find the directory
 * that contains the FTL files, regardless of where it is executed.
 *
 * @param currentDir
 */
function getRootDir(currentDir = dirname(fileURLToPath(import.meta.url))) {
  const dirContents = readdirSync(currentDir);
  if (dirContents.includes("locales")) {
    return currentDir;
  }
  return getRootDir(resolve(currentDir, "../"));
}

const getL10n: GetL10n = createGetL10n({
  getL10nBundles: getL10nBundles,
  ReactLocalization: ReactLocalization,
  parseMarkup: parseMarkup,
});
