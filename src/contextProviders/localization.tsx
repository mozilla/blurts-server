/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// See https://nextjs.org/docs/getting-started/react-essentials#rendering-third-party-context-providers-in-server-components
"use client";

import { FluentBundle, FluentResource } from "@fluent/bundle";
import {
  MarkupParser,
  LocalizationProvider,
  ReactLocalization,
} from "@fluent/react";
import { ReactNode } from "react";
import { LocaleData } from "../app/functions/server/l10n";

export const L10nProvider = (props: {
  bundleSources: LocaleData[];
  children: ReactNode;
}) => {
  const bundles: FluentBundle[] = [];

  props.bundleSources.forEach(({ locale, bundleSources }) => {
    const bundle = new FluentBundle(locale);
    bundleSources.forEach((bundleSource) =>
      bundle.addResource(new FluentResource(bundleSource)),
    );
    bundles.push(bundle);
  });

  // To enable server-side rendering, all tags are converted to plain text nodes.
  // They will be upgraded to regular HTML elements in the browser:
  const parseMarkup: MarkupParser | undefined =
    // Ignored for test coverage, since `document` is mocked (and thus defined)
    // in unit tests:
    /* c8 ignore next 7 */
    typeof document === "undefined"
      ? (str: string) => [
          {
            nodeName: "#text",
            textContent: str.replace(/<(.*?)>/g, ""),
          } as Node,
        ]
      : undefined;

  const l10n = new ReactLocalization(bundles, parseMarkup);

  return (
    <LocalizationProvider l10n={l10n}>{props.children}</LocalizationProvider>
  );
};
