import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CircularDependencyPlugin from 'circular-dependency-plugin';

import { BuildOptions } from './types/config';

export function buildPlugins({
  paths,
  isDev,
  analyze,
  apiUrl,
  project,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  let isDevPlugins = [];
  if (isDev) {
    isDevPlugins = [
      new ReactRefreshWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new CircularDependencyPlugin({ exclude: /node_modules/, include: /src/, failOnError: true }),
    ];
  } else {
    isDevPlugins = [
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
    ];
  }

  const plugins = [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new CopyPlugin({
      patterns: [{ from: paths.locales, to: paths.buildLocales }],
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
    }),
    analyze && new BundleAnalyzerPlugin(),
    ...isDevPlugins,
  ].filter(Boolean);

  return plugins as webpack.WebpackPluginInstance[];
}
