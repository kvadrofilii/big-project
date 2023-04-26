import webpack from 'webpack';

import { cssLoader as buildCssLoader } from './loaders/cssLoader';
import { imagesLoader as buildImagesLoader } from './loaders/imagesLoader';
import { svgLoader as buildSvgLoader } from './loaders/svgLoader';
import { typescriptLoader as buildTypescriptLoader } from './loaders/typescriptLoader';
// import { buildBabelLoader } from './loaders/buildBabelLoader';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  // const babelLoader: webpack.RuleSetRule = buildBabelLoader();
  const typescriptLoader: webpack.RuleSetRule = buildTypescriptLoader();
  const cssLoader: webpack.RuleSetRule = buildCssLoader(isDev);
  const svgLoader: webpack.RuleSetRule = buildSvgLoader();
  const imagesLoader: webpack.RuleSetRule = buildImagesLoader();

  return [typescriptLoader, cssLoader, svgLoader, imagesLoader];
}
