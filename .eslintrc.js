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
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:testing-library/react',
    'plugin:react-redux/recommended',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
    //'plugin:postcss-modules/recommended',
    'plugin:prettier/recommended',
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
    'prettier',
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
    // Подсвечиваю использование console.log в коде
    'no-console': 'warn',
    // Разрешаем использовать глобальное объявление типов
    'no-undef': 'off',
    // Разрешает использовать висячие символы в переменных (_)
    'no-underscore-dangle': 'off',
    'prettier/prettier': 'error',
    'unused-imports/no-unused-imports': 'error',
    '@kvadrofilii/fsd/path-checker': ['error', { alias: '@' }],
    '@kvadrofilii/fsd/public-api-imports': [
      'error',
      {
        alias: '@',
        testFilesPatterns: ['**/*.test.*', '**/*.stories.*', '**/StoreDecorator.tsx', '**/*.testing.ts'],
      },
    ],
    '@kvadrofilii/fsd/layer-imports': [
      'error',
      { alias: '@', ignoreImportPatterns: ['**/StoreProvider', '**/testing'] },
    ],
    'react/forbid-prop-types': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    // Отключает обязательный импорт React
    'react/react-in-jsx-scope': 'off',
    // Отключает значения по умолчанию для необязательных пропсов
    'react/require-default-props': 'off',
    // Добавляю исключение для неиспользуемых аргументов в виде "_"
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'import/export': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    // Настройка очерёдности импортов
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index', 'object'], 'type'],
        'newlines-between': 'never',
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@/**',
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
