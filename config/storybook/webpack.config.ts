import path from 'path';

import webpack, { RuleSetRule } from 'webpack';

import { buildCssLoader } from '../webpack/loaders/buildCssLoader';
import { buildSvgLoader } from '../webpack/loaders/buildSvgLoader';
import { BuildPaths } from '../webpack/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');

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
