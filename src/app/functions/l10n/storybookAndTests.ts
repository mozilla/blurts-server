/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { MarkupParser, ReactLocalization } from "@fluent/react";
import type { readdirSync, readFileSync } from "fs";
import type { resolve } from "path";
import { createGetL10n, createGetL10nBundles } from ".";
import type { GetL10nBundles } from "./index";

// Code in this file is only used in tests and Storybook, not in production:
/* c8 ignore start */

/**
 * Storybook- and tests-specific l10n bundle loading
 *
 * When Storybook loads our FTL files, it does so using Webpack. Except for the
 * fact that our Storybook stories also get used in Vitest tests, where Webpack
 * isn't available. Thus, this file configures FTL loading strategies that
 * are adjusted based on whether it's running in Storybook or in Vitest, using
 * either Webpack's `require.context` or Node's file system APIs, respectively.
 *
 * Note that the Storybook-specific code is pretty similar to the l10n-loading
 * code for Server Components; the main difference is that Storybook can't load
 * ReactLocalization from `@fluent/react/esm/localization`.
 */
export let getL10nBundles: GetL10nBundles;

// Load L10n files in Storybook (using Webpack):
if (process.env.STORYBOOK === "true") {
  const translationsContext =
    process.env.STORYBOOK === "true"
      ? // `require` isn't usually valid JS, so skip type checking for that:
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (require as any).context("../../../../locales", true, /\.ftl$/)
      : undefined;

  const loadedSources: Record<string, string> = {};
  // We specifically only declare this `require.context`-using function in a
  // scope where `require.context` actually exists:

  function loadSource(filename: string): string {
    loadedSources[filename] ??= translationsContext(filename);
    return loadedSources[filename];
  }

  getL10nBundles = createGetL10nBundles({
    getAcceptLangHeader: () => {
      return (
        new URLSearchParams(document.location.search).get("locale") ?? "en"
      );
    },
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
    availableLocales: (translationsContext.keys() as string[]).map(
      (filepath: string) => filepath.split("/")[1],
    ),
  });
  // Load L10n files in Vitest (using Node.js APIs):
} else {
  const {
    readdirSync: nodeReaddirSync,
    readFileSync: nodeReadFileSync,
  }: {
    readdirSync: typeof readdirSync;
    readFileSync: typeof readFileSync;
  } = require("fs");
  const { resolve: resolvePath }: { resolve: typeof resolve } = require("path");

  const ftlRoot = resolvePath(__dirname, `../../../../locales/`);

  getL10nBundles = createGetL10nBundles({
    getAcceptLangHeader: () => "en",
    availableLocales: nodeReaddirSync(ftlRoot),
    loadLocaleFiles: (locale) => {
      const referenceStringsPath = resolvePath(
        __dirname,
        `../../../../locales/${locale}/`,
      );
      const ftlPaths = nodeReaddirSync(referenceStringsPath).map((filename) =>
        resolvePath(referenceStringsPath, filename),
      );

      const bundleSources: string[] = ftlPaths.map((filePath) =>
        nodeReadFileSync(filePath, "utf-8"),
      );

      return bundleSources;
    },
    loadPendingStrings: () => {
      const pendingStringsPath = resolvePath(
        __dirname,
        "../../../../locales-pending/",
      );
      const ftlPaths = nodeReaddirSync(pendingStringsPath).map((filename) =>
        resolvePath(pendingStringsPath, filename),
      );
      const bundleSources: string[] = ftlPaths.map((filePath) =>
        nodeReadFileSync(filePath, "utf-8"),
      );
      return bundleSources;
    },
  });
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

export const getL10n = createGetL10n({
  getL10nBundles: getL10nBundles,
  ReactLocalization: ReactLocalization,
  parseMarkup:
    // In Storybook, the Fluent bundle is generated in the browser, so we don't need
    // to provide `parseMarkup`:
    process.env.STORYBOOK === "true" ? undefined : parseMarkup,
});
