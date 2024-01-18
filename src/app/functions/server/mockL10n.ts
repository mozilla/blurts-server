/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { FluentBundle, FluentResource } from "@fluent/bundle";
import { MarkupParser, ReactLocalization } from "@fluent/react";
import { Fragment, createElement } from "react";
import type { readdirSync, readFileSync } from "node:fs";
import type { resolve } from "node:path";
import { ExtendedReactLocalization, GetFragment } from "../../hooks/l10n";
import type { LocaleData } from "./l10n";

// This code only runs in a Webpack and Node context, and we explicitly adjust
// the modules we import based on that, without going async - so we need `require`.
/* eslint-disable @typescript-eslint/no-var-requires */

// Code in this file is only used in tests and Storybook, not in production:
/* c8 ignore start */

export function getOneL10nBundleSync(locale = detectLocale()): LocaleData[] {
  return process.env.STORYBOOK === "true"
    ? getOneL10nBundleInWebpackContext(locale)
    : getOneL10nBundleInNodeContext(locale);
}

export function getOneL10nBundleInWebpackContext(
  locale = detectLocale(),
): LocaleData[] {
  const allStringsContext: { keys: () => string[] } & ((
    path: string,
    // `require` isn't usually valid JS, so skip type checking for that:
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) => string) = (require as any).context(
    "../../../../locales/",
    true,
    /\.ftl$/,
  );
  const allStringFilenames = allStringsContext.keys();
  const localeStringFilenames = allStringFilenames.filter((filepath) =>
    filepath.startsWith(`./${locale}/`),
  );

  const pendingTranslationsContext: { keys: () => string[] } & ((
    path: string,
    // `require` isn't usually valid JS, so skip type checking for that:
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) => string) = (require as any).context(
    "../../../../locales-pending",
    true,
    /\.ftl$/,
  );
  const pendingSourceFilenames = pendingTranslationsContext.keys();
  const bundleSources: string[] = localeStringFilenames
    .map((filePath) => allStringsContext(filePath))
    .concat(
      pendingSourceFilenames.map((filePath) =>
        pendingTranslationsContext(filePath),
      ),
    );

  return [
    {
      locale: locale,
      bundleSources: bundleSources,
    },
  ];
}

export function getOneL10nBundleInNodeContext(
  locale = detectLocale(),
): LocaleData[] {
  const {
    readdirSync: nodeReaddirSync,
    readFileSync: nodeReadFileSync,
  }: {
    readdirSync: typeof readdirSync;
    readFileSync: typeof readFileSync;
  } = require("fs");
  const { resolve: resolvePath }: { resolve: typeof resolve } = require("path");
  const referenceStringsPath = resolvePath(
    __dirname,
    `../../../../locales/${locale}/`,
  );
  const pendingStringsPath = resolvePath(
    __dirname,
    "../../../../locales-pending/",
  );
  const ftlPaths = nodeReaddirSync(referenceStringsPath)
    .map((filename) => resolvePath(referenceStringsPath, filename))
    .concat(
      nodeReaddirSync(pendingStringsPath).map((filename) =>
        resolvePath(pendingStringsPath, filename),
      ),
    );

  const bundleSources: string[] = ftlPaths.map((filePath) =>
    nodeReadFileSync(filePath, "utf-8"),
  );

  return [
    {
      locale: locale,
      bundleSources: bundleSources,
    },
  ];
}

const parseMarkup: MarkupParser = (str) => {
  if (!str.includes("<") && !str.includes(">")) {
    return [{ nodeName: "#text", textContent: str } as Node];
  }
  return [
    {
      nodeName: "#text",
      textContent: str.replace(/<(.*?)>/g, ""),
    } as Node,
  ];
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

/**
 * This function loads a ReactLocalization instance with the given locale (`en` by default) and pending strings.
 *
 * This is useful in tests and Storybook, where we can't call `headers` from
 * `next/headers` to determine the user's locale, and even just importing from a
 * module that references it can result in an error about only being able to use
 * it in Server Components.
 *
 * @param locale {string} Locale to load; `en` by default.
 */
export function getOneL10nSync(
  locale = detectLocale(),
): ExtendedReactLocalization {
  const localeData: LocaleData[] = getOneL10nBundleSync(locale);
  const bundles: FluentBundle[] = localeData.map((data) => getBundle(data));

  // The ReactLocalization instance stores and caches the sequence of generated
  // bundles. You can store it in your app's state.
  const l10n = new ReactLocalization(
    bundles,
    // In Storybook, the Fluent bundle is generated in the browser, so we don't need
    // to provide `parseMarkup`:
    process.env.STORYBOOK === "true" ? undefined : parseMarkup,
  );

  const getFragment: GetFragment = (id, args, fallback) =>
    l10n.getElement(createElement(Fragment, null, fallback ?? id), id, args);

  const extendedL10n: ExtendedReactLocalization =
    l10n as ExtendedReactLocalization;
  extendedL10n.getFragment = getFragment;

  return extendedL10n;
}

function detectLocale() {
  const locale =
    typeof document !== "undefined"
      ? new URLSearchParams(document.location.search).get("locale") ?? undefined
      : undefined;

  return locale ?? "en";
}
