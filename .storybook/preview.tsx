import React, { useEffect } from "react";
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
      <ReactAriaI18nProvider locale={getLocale(l10nBundles)}>
        {storyFn()}
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
