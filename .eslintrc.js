module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb-typescript',
    'plugin:react/jsx-runtime',
    //'plugin:postcss-modules/recommended',
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
    //'postcss-modules',
    'i18next',
    'testing-library',
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
    "no-console": "off",
    "no-plusplus": "off",
    "prefer-object-spread": "off",
    "import/prefer-default-export": "off",
    "import/no-named-as-default": "off",
    "import/no-extraneous-dependencies": "off",
    "import/export": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "off",
    "react/prop-types": "off",
    // Отключает обязательный импорт React
    "react/react-in-jsx-scope": "off",
    // React Hooks Rules
    'react-hooks/rules-of-hooks': 'error',
    // Проверяем зависимости эффекта
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
    //'postcss-modules/no-undef-class': 'error',
    // Запрещает оставлять классы в css-модуле, которые не используются в компоненте
    //'postcss-modules/no-unused-class': 'warn',
  },
  // Глобальные переменные
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    // Настройки для корректной работы redux toolkit
    {
      files: ['src/**/*.slice.ts'],
      rules: { 'no-param-reassign': ['error', { props: false }] },
    },
    // Отключаю проверку наличия переводов в тестах
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
