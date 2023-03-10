module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:postcss-modules/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-redux/recommended',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
    'react-hooks',
    'jsx-a11y',
    'react-redux',
    'prettier',
    'postcss-modules',
    'i18next',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'postcss-modules': {
      include: '**/*.m.css',
      exclude: '**/node_modules/**/*',
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    // Конец строки LF
    'linebreak-style': ['error', 'unix'],
    // React Hooks Rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    // Добавляю исключение для неиспользуемых аргументов в виде "_"
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],
    // Настройка очерёдности импортов
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index', 'object'],
          'type',
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
          },
          {
            pattern: 'processes/',
            group: 'internal',
          },
          {
            pattern: 'pages/',
            group: 'internal',
          },
          {
            pattern: 'widgets/',
            group: 'internal',
          },
          {
            pattern: 'features/',
            group: 'internal',
          },
          {
            pattern: 'entities/',
            group: 'internal',
          },
          {
            pattern: 'shared/',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'react-native', 'type'],
      },
    ],
    // Запрещает использовать класс, который не задан в css-модуле
    'postcss-modules/no-undef-class': 'error',
    // Запрещает оставлять классы в css-модуле, которые не используются в компоненте
    'postcss-modules/no-unused-class': 'warn',
  },
  // Глобальные переменные
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ['src/**/*.slice.ts'],
      rules: { 'no-param-reassign': ['error', { props: false }] },
    },
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
    {
      files: ['**/*.story.@(ts|tsx|js|jsx|mjs|cjs)'],
      rules: {
        'storybook/hierarchy-separator': 'error',
        'storybook/default-exports': 'error',
        'i18next/no-literal-string': 'off',
      },
    },
  ],
};
