import React from "react";
import { Inter } from "next/font/google";
import type { Preview } from "@storybook/react";
import { L10nProvider } from "../src/contextProviders/localization";
import { getL10nBundles } from "../src/app/functions/server/l10n";
import { metropolis } from "../src/app/fonts/Metropolis/metropolis";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const AppDecorator: Exclude<Preview["decorators"], undefined>[0] = (
  storyFn
) => {
  return (
    <L10nProvider bundleSources={getL10nBundles()}>
      <div
        className={`${inter.className} ${inter.variable} ${metropolis.variable}`}
      >
        {storyFn()}
      </div>
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
  },
  decorators: [AppDecorator],
};

export default preview;
