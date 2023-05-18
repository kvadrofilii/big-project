import webpack from 'webpack';

import { babelLoader as buildBabelLoader } from './loaders/babelLoader';
import { cssLoader as buildCssLoader } from './loaders/cssLoader';
import { fontsLoader as buildFontsLoader } from './loaders/fontsLoader';
import { imagesLoader as buildImagesLoader } from './loaders/imagesLoader';
import { svgLoader as buildSvgLoader } from './loaders/svgLoader';
import { typescriptLoader as buildTypescriptLoader } from './loaders/typescriptLoader';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const babelLoader: webpack.RuleSetRule = buildBabelLoader(isDev);
  const typescriptLoader: webpack.RuleSetRule = buildTypescriptLoader();
  const cssLoader: webpack.RuleSetRule = buildCssLoader(isDev);
  const svgLoader: webpack.RuleSetRule = buildSvgLoader();
  const imagesLoader: webpack.RuleSetRule = buildImagesLoader();
  const fontsLoader: webpack.RuleSetRule = buildFontsLoader();

  return [babelLoader, typescriptLoader, cssLoader, imagesLoader, svgLoader, fontsLoader];
}
