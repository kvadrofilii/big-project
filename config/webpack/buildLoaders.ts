import webpack from 'webpack';

import { babelLoader as buildBabelLoader } from './loaders/babelLoader';
import { cssLoader as buildCssLoader } from './loaders/cssLoader';
import { fontsLoader as buildFontsLoader } from './loaders/fontsLoader';
import { imagesLoader as buildImagesLoader } from './loaders/imagesLoader';
import { svgLoader as buildSvgLoader } from './loaders/svgLoader';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  const babelLoader: webpack.RuleSetRule = buildBabelLoader({ ...options, isTsx: false });
  const tsxBabelLoader: webpack.RuleSetRule = buildBabelLoader({ ...options, isTsx: true });
  const cssLoader: webpack.RuleSetRule = buildCssLoader(isDev);
  const svgLoader: webpack.RuleSetRule = buildSvgLoader();
  const imagesLoader: webpack.RuleSetRule = buildImagesLoader();
  const fontsLoader: webpack.RuleSetRule = buildFontsLoader();

  return [babelLoader, tsxBabelLoader, cssLoader, imagesLoader, svgLoader, fontsLoader];
}
