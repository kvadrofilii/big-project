import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { type BuildOptions } from '../types/config';

type Props = BuildOptions & {
  isTsx?: boolean;
};

export function babelLoader({ isDev, isTsx }: Props) {
  const isProd = !isDev;

  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: [
          '@babel/preset-env',
          [
            '@babel/preset-react',
            {
              runtime: 'automatic',
            },
          ],
          '@babel/preset-typescript',
        ],
        plugins: [
          isDev && require.resolve('react-refresh/babel'),
          isTsx &&
            isProd && [
              babelRemovePropsPlugin,
              {
                props: ['data-testid'],
              },
            ],
        ].filter(Boolean),
      },
    },
  };
}
