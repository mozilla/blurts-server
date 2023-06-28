import React from "react";
import { Inter } from "next/font/google";
import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import { L10nProvider } from "../src/contextProviders/localization";
import { metropolis } from "../src/app/fonts/Metropolis/metropolis";
import { ReactAriaI18nProvider } from "../src/contextProviders/react-aria";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

function loadL10nModule() {
  if (process.env.NODE_ENV === "test") {
    // In Jest, loading this module throws errors because it uses
    // require.context(). Since we don't need to look at actual strings in our
    // unit tests, we can just skip loading the bundles.
    return {
      getL10nBundles: () => [],
      getLocale: () => "en",
    };
  }

  return require("../src/app/functions/server/l10n");
}

const AppDecorator: Exclude<Preview["decorators"], undefined>[0] = (
  storyFn
) => {
  const { getL10nBundles, getLocale } = loadL10nModule();
  const l10nBundles = getL10nBundles();
  return (
    <L10nProvider bundleSources={l10nBundles}>
      <ReactAriaI18nProvider locale={getLocale(l10nBundles)}>
        <div
          className={`${inter.className} ${inter.variable} ${metropolis.variable}`}
          style={{ height: "100%" }}
        >
          {storyFn()}
        </div>
      </ReactAriaI18nProvider>
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
  },
  decorators: [AppDecorator],
};

export default preview;
