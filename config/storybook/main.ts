import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../../src/**/*.mdx', '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  // Статичные файлы проекта. Для корректной работы i18next и файлов в assets
  staticDirs: ['../../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-interactions',
    'storybook-addon-remix-react-router',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  docs: {
    autodocs: 'tag',
  },
  // Код ниже активирует генерацию встроенных пропсов в историях
  //typescript: {
  //  reactDocgen: 'react-docgen-typescript',
  //  reactDocgenTypescriptOptions: {
  //    compilerOptions: {
  //      allowSyntheticDefaultImports: false,
  //      esModuleInterop: false,
  //    },
  //    propFilter: () => true,
  //  },
  //},
};

export default config;
