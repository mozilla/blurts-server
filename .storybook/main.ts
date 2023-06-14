import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: [
    // See https://github.com/storybookjs/storybook/tree/4f0c895bc53116272ef598f19e8d869213be49a9/code/frameworks/nextjs#nextfontlocal
    {
      from: "../src/app/fonts",
      to: "src/app/fonts",
    },
  ],
  async webpackFinal(config) {
    config.module ??= {};
    config.module.rules ??= [];
    config.module.rules.push({
      test: /\.ftl/,
      type: "asset/source",
    });

    return config;
  },
};
export default config;
