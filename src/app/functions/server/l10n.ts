/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import "server-only";
import { acceptedLanguages, negotiateLanguages } from "@fluent/langneg";
import { headers } from "next/headers";
import { ExtendedReactLocalization, GetFragment } from "../../hooks/l10n";
import { FluentBundle, FluentResource } from "@fluent/bundle";
import type { MarkupParser } from "@fluent/react";
// @fluent/react's default export bundles all code in a single scope, so just
// importing <ReactLocalization> from there will run createContext,
// which is not allowed in server components. To avoid that, we import directly
// from the included ES module code. There is the risk that @fluent/react
// updates break that.
import { ReactLocalization } from "@fluent/react/esm/localization";
import { Fragment, createElement } from "react";

export type LocaleData = {
  locale: string;
  bundleSources: string[];
};

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

/**
 * Get the localisation sources for the locales relevant to the current user
 *
 * This function can run on the server side, and only returns serialisable data.
 * This means that it can either be used to construct a ReactLocalization object
 * on the server side, or be passed to Client Component to construct such an
 * object on the client side.
 *
 * @returns The sources for l10n bundles that can be used to construct a ReactLocalization object
 */
export function getL10nBundles(): LocaleData[] {
  const acceptLangHeader =
    process.env.STORYBOOK === "true" ? "en" : headers().get("Accept-Language");

  const bundleSources: Record<string, string[]> = {};

  for (const filename of translationsContext.keys()) {
    // Filenames are formatted as `./<locale>/<module>.ftl`.
    // Example: ./en/bundle.ftl
    const locale = filename.split("/")[1];

    if (locale) {
      bundleSources[locale] ??= [];
      bundleSources[locale].push(loadSource(filename));

      if (locale === "en") {
        // `require` isn't usually valid JS, so skip type checking for that:
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const pendingTranslationsContext = (require as any).context(
          "../../../../locales-pending",
          true,
          /\.ftl$/,
        );
        pendingTranslationsContext
          .keys()
          .forEach((pendingTranslationFilename: string) => {
            bundleSources.en.push(
              pendingTranslationsContext(pendingTranslationFilename),
            );
          });
      }
    }
  }

  const languages = acceptLangHeader ? acceptedLanguages(acceptLangHeader) : [];
  const supportedLocales = process.env.SUPPORTED_LOCALES?.split(",");
  const availableLocales = Object.keys(bundleSources);
  const filteredLocales =
    process.env.APP_ENV === "heroku"
      ? availableLocales
      : availableLocales.filter((locale) => supportedLocales?.includes(locale));
  const currentLocales = negotiateLanguages(languages, filteredLocales, {
    defaultLocale: "en",
  });

  const relevantBundleSources = currentLocales.map((relevantLocale) => ({
    locale: relevantLocale,
    bundleSources: bundleSources[relevantLocale],
  }));

  return relevantBundleSources;
}

// In Storybook, the Fluent bundle is generated in the browser, so we don't need
// to provide `parseMarkup` (and even can't, because JSDOM won't run there):
const document =
  process.env.STORYBOOK === "true"
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (undefined as any)
    : // Using require here to conditionally load JSDOM without introducing asynchronicity (i.e. Promises):
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      new (require("jsdom").JSDOM)().window.document;
const parseMarkup: MarkupParser = (str) => {
  if (!str.includes("<") && !str.includes(">")) {
    return [{ nodeName: "#text", textContent: str } as Node];
  }
  const wrapper = document.createElement("span");
  wrapper.innerHTML = str;
  return Array.from(wrapper.childNodes);
};

const bundles: Record<string, FluentBundle> = {};
function getBundle(localeData: LocaleData): FluentBundle {
  if (bundles[localeData.locale]) {
    return bundles[localeData.locale];
  }
  bundles[localeData.locale] = new FluentBundle(localeData.locale);
  localeData.bundleSources.forEach((bundleSource) => {
    bundles[localeData.locale].addResource(new FluentResource(bundleSource));
  });
  return bundles[localeData.locale];
}

export function getL10n(
  localeData: LocaleData[] = getL10nBundles(),
): ExtendedReactLocalization {
  const bundles: FluentBundle[] = localeData.map((data) => getBundle(data));

  // The ReactLocalization instance stores and caches the sequence of generated
  // bundles. You can store it in your app's state.
  const l10n = new ReactLocalization(
    bundles,
    process.env.STORYBOOK === "true" ? undefined : parseMarkup,
  );

  const getFragment: GetFragment = (id, args, fallback) =>
    l10n.getElement(createElement(Fragment, null, fallback ?? id), id, args);

  const extendedL10n: ExtendedReactLocalization =
    l10n as ExtendedReactLocalization;
  extendedL10n.getFragment = getFragment;

  return extendedL10n;
}
