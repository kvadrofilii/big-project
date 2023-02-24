import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader: webpack.RuleSetRule = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  //const babelLoader = {
  //  test: /\.(js|jsx|tsx)$/,
  //  exclude: /node_modules/,
  //  use: {
  //    loader: 'babel-loader',
  //    options: {
  //      presets: ['@babel/preset-env'],
  //    },
  //  },
  //};

  const imagesLoader: webpack.RuleSetRule = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const cssLoader: webpack.RuleSetRule = {
    test: /\.(s[ac]ss|css)$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /\.m\.\w+$/i,
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
          },
        },
      },
      //'sass-loader',
    ],
  };

  const typescriptLoader: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [typescriptLoader, cssLoader, svgLoader, imagesLoader];
}
