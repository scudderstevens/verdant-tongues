module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
    'storybook-addon-designs'
  ],
  features: {
    postcss: false,
  },
  framework: "@storybook/react",
  core: {
    builder: "webpack4",
  },
};
