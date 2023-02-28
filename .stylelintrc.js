module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-clean-order'],
  plugins: ['stylelint-order'],
  rules: {
    // Отключаю псевдо-класс global, чтобы никто глобально не переопределял стили у компонентов
    'selector-pseudo-class-disallowed-list': ['global'],
  },
  include: ['**/*.css', '**/*.m.css'],
  exclude: ['**/*.ts', '**/*.tsx', '**/*.d.ts', '**/*.js', '**/*.jsx', '**/*.md', '**/*.svg'],
};
