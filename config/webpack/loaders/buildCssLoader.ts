import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
  return {
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
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: ['postcss-preset-env'],
          },
        },
      },
    ],
  };
}
