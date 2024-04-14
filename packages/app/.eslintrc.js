module.exports = {
  env: {
    browser: true,
    es2023: true,
    jest: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:testing-library/react',
    'plugin:react-redux/recommended',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
    //'plugin:postcss-modules/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'react',
    'import',
    'react-hooks',
    'jsx-a11y',
    '@typescript-eslint',
    'react-redux',
    'i18next',
    'testing-library',
    '@kvadrofilii/fsd',
    'unused-imports',
    //'postcss-modules',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'postcss-modules': {
      include: '**/*.m.css',
      exclude: '**/node_modules/**/*',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      typescript: {
        directory: './tsconfig.json',
      },
    },
  },
  rules: {
    'no-console': 'warn', // Подсвечиваю использование console.log в коде
    'no-undef': 'off', // Разрешаем использовать глобальное объявление типов
    'no-underscore-dangle': 'off', // Разрешает использовать висячие символы в переменных (_)
    'unused-imports/no-unused-imports': 'warn',
    '@kvadrofilii/fsd/path-checker': ['error', { alias: '~' }],
    '@kvadrofilii/fsd/public-api-imports': [
      'error',
      {
        alias: '~',
        testFilesPatterns: [
          '**/*.test.*',
          '**/*.stories.*',
          '**/StoreDecorator.tsx',
          '**/*.testing.ts',
        ],
      },
    ],
    '@kvadrofilii/fsd/layer-imports': [
      'error',
      { alias: '~', ignoreImportPatterns: ['**/StoreProvider', '**/testing'] },
    ],
    'i18next/no-literal-string': 'warn',
    'react/forbid-prop-types': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off', // Отключает обязательный импорт React
    'react/require-default-props': 'off', // Отключает значения по умолчанию для необязательных пропсов
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ], // Добавляю исключение для неиспользуемых аргументов в виде "_"
    'import/export': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
        groups: ['builtin', 'external', 'internal', 'parent', 'index', 'sibling'],
        'newlines-between': 'never',
        pathGroups: [
          {
            pattern: './**.m.css',
            group: 'sibling',
            position: 'after',
          },
          {
            pattern: '~/**',
            group: 'parent',
            position: 'before',
          },
        ],
      },
    ],
    //'postcss-modules/no-undef-class': 'error', // Запрещает использовать класс, который не задан в css-модуле
    //'postcss-modules/no-unused-class': 'warn', // Запрещает оставлять классы в css-модуле, которые не используются в компоненте
  },
  // Глобальные переменные
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
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
      files: ['**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      rules: {
        'storybook/hierarchy-separator': 'error',
        'storybook/default-exports': 'error',
        'i18next/no-literal-string': 'off',
      },
    },
  ],
};
