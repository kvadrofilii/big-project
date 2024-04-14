import { type RuleSetRule } from 'webpack';
import { babelLoader as buildBabelLoader } from './loaders/babelLoader';
import { cssLoader as buildCssLoader } from './loaders/cssLoader';
import { fontsLoader as buildFontsLoader } from './loaders/fontsLoader';
import { imagesLoader as buildImagesLoader } from './loaders/imagesLoader';
import { svgLoader as buildSvgLoader } from './loaders/svgLoader';
import { type BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  const { isDev } = options;

  const babelLoader: RuleSetRule = buildBabelLoader({ ...options, isTsx: false });
  const tsxBabelLoader: RuleSetRule = buildBabelLoader({ ...options, isTsx: true });
  const cssLoader: RuleSetRule = buildCssLoader(isDev);
  const svgLoader: RuleSetRule = buildSvgLoader();
  const imagesLoader: RuleSetRule = buildImagesLoader();
  const fontsLoader: RuleSetRule = buildFontsLoader();

  return [babelLoader, tsxBabelLoader, cssLoader, imagesLoader, svgLoader, fontsLoader];
}
