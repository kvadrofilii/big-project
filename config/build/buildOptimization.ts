import webpack from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';

export function buildOptimization(): webpack.WebpackPluginInstance[] {
  return [
    new TerserPlugin({
      parallel: true,
      terserOptions: {
        format: {
          comments: false,
        },
      },
      extractComments: false,
    }),
  ];
}
