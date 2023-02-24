import webpack from 'webpack';

import { buildCssLoader } from './loaders/buildCssLoader';
import { buildImagesLoader } from './loaders/buildImagesLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildTypescriptLoader } from './loaders/buildTypescriptLoader';
//import { buildBabelLoader } from './loaders/buildBabelLoader';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  //const babelLoader: webpack.RuleSetRule = buildBabelLoader();
  const typescriptLoader: webpack.RuleSetRule = buildTypescriptLoader();
  const cssLoader: webpack.RuleSetRule = buildCssLoader(isDev);
  const svgLoader: webpack.RuleSetRule = buildSvgLoader();
  const imagesLoader: webpack.RuleSetRule = buildImagesLoader();

  return [typescriptLoader, cssLoader, svgLoader, imagesLoader];
}
