import path from 'path';

import webpack, { RuleSetRule } from 'webpack';

import { buildCssLoader } from '../webpack/loaders/buildCssLoader';
import { buildSvgLoader } from '../webpack/loaders/buildSvgLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.modules = [path.resolve(__dirname, '../../src'), 'node_modules'];

  // Отключаю встроенный обработчик svg
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  // Подключаю свой обработчик для svg
  config.module.rules.push(buildSvgLoader());

  // Отключаю встроенный обработчик стилей
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/(s[ac]ss|css)/.test(rule.test as string)) {
      return { ...rule, exclude: /\.(s[ac]ss|css)$/i };
    }

    return rule;
  });

  // Подключаю свой обработчик для стилей
  config.module.rules.push(buildCssLoader(true));

  return config;
};
