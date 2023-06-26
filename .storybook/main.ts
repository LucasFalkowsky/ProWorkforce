import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
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
  core: {
    builder: {
      name: "@storybook/builder-webpack5",
      options: {}
    },
  },
  webpackFinal: async (config) => {
    config.watchOptions = {
      aggregateTimeout: 200,
      poll: 1000,
    };
    return config;
  },
};
export default config;
