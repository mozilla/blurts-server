/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import "../server/notInClientComponent";
import { headers } from "next/headers";
import {
  createGetL10nBundles,
  createGetL10n,
  GetL10nBundlesForLocales,
  GetL10nForLocales,
} from "./index";
// @fluent/react's default export bundles all code in a single scope, so just
// importing <ReactLocalization> from there will run createContext,
// which is not allowed in server components. To avoid that, we import directly
// from the included ES module code. There is the risk that @fluent/react
// updates break that.
import { ReactLocalization } from "@fluent/react/esm/localization";
import { parseMarkup } from "./parseMarkup";

// `require` isn't usually valid JS, so skip type checking for that:
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const translationsContext = (require as any).context(
  "../../../../locales",
  true,
  /\.ftl$/,
);
const loadedSources: Record<string, string> = {};
function loadSource(filename: string): string {
  loadedSources[filename] ??= translationsContext(filename);
  return loadedSources[filename];
}

export const getAcceptLangHeaderInServerComponents = async () =>
  (await headers()).get("Accept-Language") ?? "en";
export const getL10nBundles: GetL10nBundlesForLocales = createGetL10nBundles({
  // Filenames are formatted as `./<locale>/<module>.ftl`.
  // Example: ./en/bundle.ftl
  availableLocales: translationsContext
    .keys()
    .map((filepath: string) => filepath.split("/")[1]),
  loadLocaleFiles: (locale) => {
    const filepaths = (translationsContext.keys() as string[]).filter(
      (filepath) => filepath.split("/")[1] === locale,
    );
    return filepaths.map((filepath) => loadSource(filepath));
  },
  loadPendingStrings: () => {
    // `require` isn't usually valid JS, so skip type checking for that:
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pendingTranslationsContext = (require as any).context(
      "../../../../locales-pending",
      true,
      /\.ftl$/,
    );
    return (pendingTranslationsContext.keys() as string[]).map(
      (pendingTranslationFilename) =>
        pendingTranslationsContext(pendingTranslationFilename) as string,
    );
  },
});

export const getL10n: GetL10nForLocales = createGetL10n({
  getL10nBundles: getL10nBundles,
  ReactLocalization: ReactLocalization,
  parseMarkup: parseMarkup,
});
