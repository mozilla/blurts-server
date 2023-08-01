/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { useEffect } from "react";
import { Inter } from "next/font/google";
import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import { L10nProvider } from "../src/contextProviders/localization";
import { metropolis } from "../src/app/fonts/Metropolis/metropolis";
import { ReactAriaI18nProvider } from "../src/contextProviders/react-aria";
import { getEnL10nBundlesSync } from "../src/app/functions/server/mockL10n";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const AppDecorator: Exclude<Preview["decorators"], undefined>[0] = (
  storyFn
) => {
  const l10nBundles = getEnL10nBundlesSync();

  useEffect(() => {
    // We have to add these classes to the body, rather than simply wrapping the
    // storyFn in a container, because some components (most notably, the ones
    // that use useModalOverlay()) append elements to the end of the body using
    // a React Portal, thus breaking out of a container element.
    document.body.classList.add(inter.className);
    document.body.classList.add(inter.variable);
    document.body.classList.add(metropolis.variable);
  }, []);

  return (
    <L10nProvider bundleSources={l10nBundles}>
      <ReactAriaI18nProvider locale="en">{storyFn()}</ReactAriaI18nProvider>
    </L10nProvider>
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
    nextjs: {
      // See https://storybook.js.org/blog/integrate-nextjs-and-storybook-automatically/#nextnavigation
      appDirectory: true,
    },
  },
  decorators: [AppDecorator],
};

export default preview;
