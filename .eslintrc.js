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
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
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
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    // Конец строки LF
    'linebreak-style': ['error', 'unix'],
    // Добавляю исключение для неиспользуемых аргументов в виде "_"
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    // Запрещает использовать класс, который не задан в css-модуле
    'postcss-modules/no-undef-class': 'warn',
    // Запрещает оставлять классы в css-модуле, которые не используются в компоненте
    'postcss-modules/no-unused-class': 'warn',
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
            pattern: 'src/',
            group: 'internal',
          },
          {
            pattern: 'features/',
            group: 'internal',
          },
          {
            pattern: 'pages/',
            group: 'internal',
          },
          {
            pattern: 'components/',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'react-native', 'type'],
      },
    ],
  },
  // Глобальные переменные
  globals: {
    __IS_DEV__: true,
  },
};
