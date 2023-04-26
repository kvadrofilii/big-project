/* eslint-disable no-param-reassign */
import path from 'path';

import webpack, { DefinePlugin, RuleSetRule } from 'webpack';

import { cssLoader } from '../webpack/loaders/cssLoader';
import { svgLoader } from '../webpack/loaders/svgLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  config.resolve?.extensions?.push('.ts', '.tsx');
  config!.resolve!.modules = [path.resolve(__dirname, '../../src'), 'node_modules'];

  const rules = config.module?.rules as RuleSetRule[];

  // Отключаю встроенный обработчик svg
  config!.module!.rules = rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  // Подключаю свой обработчик для svg
  config.module?.rules?.push(svgLoader());

  // Отключаю встроенный обработчик стилей
  config!.module!.rules = rules.map((rule: RuleSetRule) => {
    if (/(s[ac]ss|css)/.test(rule.test as string)) {
      return { ...rule, exclude: /\.(s[ac]ss|css)$/i };
    }

    return rule;
  });

  // Подключаю свой обработчик для стилей
  config.module?.rules?.push(cssLoader(true));

  // Подключаю глобальные переменные
  config.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: true,
      __API__: '',
    }),
  );

  return config;
};
