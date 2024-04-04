/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { readFileSync, readdirSync } from "fs";
import { FluentBundle, FluentResource } from "@fluent/bundle";
import { MarkupParser, ReactLocalization } from "@fluent/react";
import { Fragment, createElement } from "react";
import { acceptedLanguages, negotiateLanguages } from "@fluent/langneg";
import { JSDOM } from "jsdom";
import type {
  ExtendedReactLocalization,
  GetFragment,
} from "../app/functions/l10n";
import type { SanitizedSubscriberRow } from "../app/functions/server/sanitize";

export function getEmailL10n(
  subscriber: SanitizedSubscriberRow,
): ExtendedReactLocalization {
  // We don't have a runtime language when we email people, so use their
  // language setting from when they signed up for their Mozilla account:
  return getL10n(getL10nBundles(subscriber.signup_language ?? "en"));
}

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
 * @param userLocales The user's preferred locales, in the syntax of the Accept-Language HTTP header
 * @returns The sources for l10n bundles that can be used to construct a ReactLocalization object
 */
export function getL10nBundles(userLocales: string): LocaleData[] {
  const languages = userLocales ? acceptedLanguages(userLocales) : [];
  const supportedLocales = process.env.SUPPORTED_LOCALES!.split(",");
  const locales = negotiateLanguages(languages, supportedLocales, {
    defaultLocale: "en",
  });
  return locales.map((locale) => getSpecificL10nBundle(locale));
}

export function getSpecificL10nBundle(locale: string): LocaleData {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const referenceStringsPath = resolve(__dirname, `../../locales/${locale}/`);
  let ftlPaths = readdirSync(referenceStringsPath).map((filename) =>
    resolve(referenceStringsPath, filename),
  );

  if (locale === "en") {
    const pendingStringsPath = resolve(__dirname, "../../locales-pending/");
    ftlPaths = ftlPaths.concat(
      readdirSync(pendingStringsPath).map((filename) =>
        resolve(pendingStringsPath, filename),
      ),
    );
  }

  const bundleSources: string[] = ftlPaths.map((filePath) =>
    readFileSync(filePath, "utf-8"),
  );

  return {
    locale: locale,
    bundleSources: bundleSources,
  };
}

const parseMarkup: MarkupParser = (str) => {
  if (!str.includes("<") && !str.includes(">")) {
    return [{ nodeName: "#text", textContent: str } as Node];
  }
  const document = new JSDOM().window.document;
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

export function getL10n(localeData: LocaleData[]): ExtendedReactLocalization {
  const bundles: FluentBundle[] = localeData.map((data) => getBundle(data));

  // The ReactLocalization instance stores and caches the sequence of generated
  // bundles. You can store it in your app's state.
  const l10n = new ReactLocalization(bundles, parseMarkup);

  const getFragment: GetFragment = (id, args, fallback) =>
    l10n.getElement(createElement(Fragment, null, fallback ?? id), id, args);

  const extendedL10n: ExtendedReactLocalization =
    l10n as ExtendedReactLocalization;
  extendedL10n.getFragment = getFragment;

  return extendedL10n;
}
