/* eslint-disable no-param-reassign */
import path from 'path';
import { DefinePlugin, type RuleSetRule, type Configuration } from 'webpack';
import { cssLoader } from '../webpack/loaders/cssLoader';
import { svgLoader } from '../webpack/loaders/svgLoader';
import { babelLoader } from './babelLoader';

export default ({ config }: { config: Configuration }) => {
  const src = path.resolve(__dirname, '..', '..', 'src');

  config.resolve!.modules = [src, 'node_modules'];
  config.resolve!.alias = {
    ...config!.resolve!.alias,
    '~': src,
  };
  config.resolve?.extensions?.push('.ts', '.tsx');

  const rules = config.module?.rules as RuleSetRule[];
  // Отключаю встроенные обработчики
  config!.module!.rules = rules.map((rule: RuleSetRule) => {
    // Удаляю svg из asset-модуля
    if (/svg/.test(rule.test as string)) {
      return {
        ...rule,
        test: /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
      };
    }

    // Отключаю встроенный обработчик стилей
    if (/css/.test(rule.test as string)) {
      return {};
    }

    return rule;
  });

  // Подключаю свой обработчик для svg
  config.module?.rules?.push(svgLoader());

  // Подключаю свой обработчик для стилей
  config.module?.rules?.push(cssLoader(true));

  // Подключаю свой конфиг babel для storybook
  config.module?.rules.push(babelLoader());

  // Подключаю глобальные переменные
  config.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: true,
      __API__: JSON.stringify(''),
      __PROJECT__: JSON.stringify('storybook'),
    }),
  );

  return config;
};
