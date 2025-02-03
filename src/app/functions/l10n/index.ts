/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { FluentBundle, FluentResource } from "@fluent/bundle";
import { acceptedLanguages, negotiateLanguages } from "@fluent/langneg";
import type { MarkupParser, ReactLocalization } from "@fluent/react";
import { Fragment, createElement } from "react";

/**
 * Equivalent to ReactLocalization.getString, but returns a React Fragment.
 *
 * This is useful because it allows you to replace tags in localised strings
 * with HTML elements, without needing to reach out to <Localized>.
 *
 * (This method got booted out of @fluent/react proper because it's so simple,
 * but it's pretty useful:
 * https://github.com/projectfluent/fluent.js/pull/595#discussion_r967011632)
 */

export type GetFragment = (
  id: Parameters<ReactLocalization["getString"]>[0],
  args?: Parameters<ReactLocalization["getElement"]>[2],
  fallback?: Parameters<ReactLocalization["getString"]>[2],
) => ReturnType<ReactLocalization["getElement"]> | null;

export type ExtendedReactLocalization = ReactLocalization & {
  getFragment: GetFragment;
};

export type LocaleData = {
  locale: string;
  bundleSources: string[];
};

/**
 * Get the localisation sources for the locales relevant to the current user
 *
 * This function can run on the server side, and only returns serialisable data.
 * This means that it can either be used to construct a ReactLocalization object
 * on the server side, or be passed to Client Component to construct such an
 * object on the client side.
 *
 * @param acceptLang The user's preferred locales, in the syntax of the Accept-Language HTTP header
 * @returns The sources for l10n bundles that can be used to construct a ReactLocalization object
 */
export type GetL10nBundles = (acceptLangHeader?: string) => LocaleData[];
/** Like [[GetL10nBundles]], but the caller has to pass in the Accept-Language header */
export type GetL10nBundlesForLocales = (
  acceptLangHeader: string,
) => LocaleData[];

type LocaleId = string;
type CreateGetL10nBundlesOptions = {
  availableLocales: LocaleId[];
  loadLocaleFiles: (locale: LocaleId) => string[];
  loadPendingStrings: () => string[];
  getAcceptLangHeader?: () => string;
};
export function createGetL10nBundles<
  Options extends CreateGetL10nBundlesOptions,
>(
  options: Options,
): Options["getAcceptLangHeader"] extends NonNullable<
  Options["getAcceptLangHeader"]
>
  ? GetL10nBundles
  : GetL10nBundlesForLocales {
  return (acceptLangHeader = options.getAcceptLangHeader?.()) => {
    const languages = acceptedLanguages(acceptLangHeader);
    const supportedLocales = process.env.SUPPORTED_LOCALES?.split(",");
    const filteredLocales =
      // `SUPPORTED_LOCALES` is set in the `.env` file, so it'll always
      // be available when running tests.
      /* c8 ignore next 2 */
      typeof supportedLocales === "undefined"
        ? options.availableLocales
        : options.availableLocales.filter((locale) =>
            supportedLocales.includes(locale),
          );
    const relevantLocales = negotiateLanguages(languages, filteredLocales, {
      defaultLocale: "en",
    });

    const relevantBundleSources = relevantLocales.map((relevantLocale) => {
      let bundleSources = options.loadLocaleFiles(relevantLocale);
      if (relevantLocale === "en") {
        bundleSources = bundleSources.concat(options.loadPendingStrings());
      }
      return {
        locale: relevantLocale,
        bundleSources: bundleSources,
      };
    });

    return relevantBundleSources;
  };
}

export type GetL10n = (
  localeDataOrAcceptLangHeader?: LocaleData[] | Parameters<GetL10nBundles>[0],
) => ExtendedReactLocalization;
export type GetL10nForLocales = (
  localeDataOrAcceptLangHeader:
    | LocaleData[]
    | NonNullable<Parameters<GetL10nBundles>[0]>,
) => ExtendedReactLocalization;
type CreateGetL10nOptions = {
  getL10nBundles: GetL10nBundles | GetL10nBundlesForLocales;
  ReactLocalization: typeof ReactLocalization;
  parseMarkup?: MarkupParser;
};
export function createGetL10n<Options extends CreateGetL10nOptions>(
  options: Options,
): Options["getL10nBundles"] extends GetL10nBundles
  ? GetL10n
  : GetL10nForLocales {
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

  return (
    localeDataOrAcceptLangHeader: LocaleData[] | Parameters<GetL10nBundles>[0],
  ) => {
    const localeData =
      typeof localeDataOrAcceptLangHeader === "string" ||
      // The locale header is always set in tests:
      /* c8 ignore next 5 */
      typeof localeDataOrAcceptLangHeader === "undefined"
        ? // `getL10nBundles` does accept undefined if it's of type GetL10nBundles,
          // just not if it's GetL10nBundlesForLocales - and TS doesn't know which it is here.
          options.getL10nBundles(localeDataOrAcceptLangHeader as string)
        : localeDataOrAcceptLangHeader;
    const bundles: FluentBundle[] = localeData.map((data) => getBundle(data));
    const l10n = new options.ReactLocalization(bundles, options.parseMarkup);

    const getFragment: GetFragment = (id, args, fallback) =>
      l10n.getElement(createElement(Fragment, null, fallback ?? id), id, args);

    const extendedL10n: ExtendedReactLocalization =
      l10n as ExtendedReactLocalization;
    extendedL10n.getFragment = getFragment;

    return extendedL10n;
  };
}
