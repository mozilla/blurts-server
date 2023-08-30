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

export function getEnL10nBundlesSync(): LocaleData[] {
  return process.env.STORYBOOK === "true"
    ? getEnL10nBundlesInWebpackContext()
    : getEnL10nBundlesInNodeContext();
}

export function getEnL10nBundlesInWebpackContext(): LocaleData[] {
  const referenceStringsContext: { keys: () => string[] } & ((
    path: string
    // `require` isn't usually valid JS, so skip type checking for that:
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) => string) = (require as any).context(
    "../../../../locales/en",
    true,
    /\.ftl$/
  );
  const pendingTranslationsContext: { keys: () => string[] } & ((
    path: string
    // `require` isn't usually valid JS, so skip type checking for that:
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) => string) = (require as any).context(
    "../../../../locales-pending",
    true,
    /\.ftl$/
  );
  const referenceSourceFilenames = referenceStringsContext.keys();
  const pendingSourceFilenames = pendingTranslationsContext.keys();
  console.log({ referenceSourceFilenames, pendingSourceFilenames });
  const bundleSources: string[] = referenceSourceFilenames
    .map((filePath) => referenceStringsContext(filePath))
    .concat(
      pendingSourceFilenames.map((filePath) =>
        pendingTranslationsContext(filePath)
      )
    );

  return [
    {
      locale: "en",
      bundleSources: bundleSources,
    },
  ];
}

export function getEnL10nBundlesInNodeContext(): LocaleData[] {
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
    "../../../../locales/en/"
  );
  const pendingStringsPath = resolvePath(
    __dirname,
    "../../../../locales-pending/"
  );
  const ftlPaths = nodeReaddirSync(referenceStringsPath)
    .map((filename) => resolvePath(referenceStringsPath, filename))
    .concat(
      nodeReaddirSync(pendingStringsPath).map((filename) =>
        resolvePath(pendingStringsPath, filename)
      )
    );

  const bundleSources: string[] = ftlPaths.map((filePath) =>
    nodeReadFileSync(filePath, "utf-8")
  );

  return [
    {
      locale: "en",
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
 * This function loads a ReactLocalization instance with the `en` and pending strings.
 *
 * This is useful in tests and Storybook, where we can't call `headers` from
 * `next/headers` to determine the user's locale, and even just importing from a
 * module that references it can result in an error about only being able to use
 * it in Server Components.
 */
export function getEnL10nSync(): ExtendedReactLocalization {
  const localeData: LocaleData[] = getEnL10nBundlesSync();
  const bundles: FluentBundle[] = localeData.map((data) => getBundle(data));

  // The ReactLocalization instance stores and caches the sequence of generated
  // bundles. You can store it in your app's state.
  const l10n = new ReactLocalization(
    bundles,
    // In Storybook, the Fluent bundle is generated in the browser, so we don't need
    // to provide `parseMarkup`:
    process.env.STORYBOOK === "true" ? undefined : parseMarkup
  );

  const getFragment: GetFragment = (id, args, fallback) =>
    l10n.getElement(createElement(Fragment, null, fallback ?? id), id, args);

  const extendedL10n: ExtendedReactLocalization =
    l10n as ExtendedReactLocalization;
  extendedL10n.getFragment = getFragment;

  return extendedL10n;
}
