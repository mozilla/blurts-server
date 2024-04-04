/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import "server-only";
import { headers } from "next/headers";
import { JSDOM } from "jsdom";
import {
  GetL10nBundles,
  createGetL10nBundles,
  GetL10n,
  createGetL10n,
} from "../l10n/index";
import type { MarkupParser } from "@fluent/react";
// @fluent/react's default export bundles all code in a single scope, so just
// importing <ReactLocalization> from there will run createContext,
// which is not allowed in server components. To avoid that, we import directly
// from the included ES module code. There is the risk that @fluent/react
// updates break that.
import { ReactLocalization } from "@fluent/react/esm/localization";

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

export const getL10nBundles: GetL10nBundles = createGetL10nBundles({
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
  getAcceptLangHeader: () => headers().get("Accept-Language") ?? "en",
});

let document: Document;
const parseMarkup: MarkupParser = (str) => {
  document ??= new JSDOM().window.document;
  if (!str.includes("<") && !str.includes(">")) {
    return [{ nodeName: "#text", textContent: str } as Node];
  }
  const wrapper = document.createElement("span");
  wrapper.innerHTML = str;
  return Array.from(wrapper.childNodes);
};

export const getL10n: GetL10n = createGetL10n({
  getL10nBundles: getL10nBundles,
  ReactLocalization: ReactLocalization,
  parseMarkup: parseMarkup,
});
