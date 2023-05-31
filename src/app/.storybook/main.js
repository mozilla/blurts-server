/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: [
    // "../components/client/stories/**/*.mdx",
    "../components/client/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
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
};
export default config;
