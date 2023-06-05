module.exports = {
  stories: ['../../src/**/*.story.tsx'],
  // Статичные файлы проекта. Для корректной работы i18next и файлов в assets
  staticDirs: ['../../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-react-router-v6',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  // Убираю обязательный импорт React в компонентах Storybook
  babel: async (options) => ({
    ...options,
    presets: [
      ...options.presets,
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
        },
        'preset-react-jsx-transform', // Can name this anything, just an arbitrary alias to avoid duplicate presets'
      ],
    ],
  }),
};
