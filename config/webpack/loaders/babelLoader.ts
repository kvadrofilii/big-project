import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx?: boolean;
}

export function babelLoader({ isDev, isTsx }: BuildBabelLoaderProps) {
  let isDevPlugins = [];
  if (isDev) {
    isDevPlugins = [require.resolve('react-refresh/babel')];
  } else {
    isDevPlugins = [
      isTsx && [
        babelRemovePropsPlugin,
        {
          props: ['data-testid'],
        },
      ],
    ];
  }

  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
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
        plugins: [...isDevPlugins].filter(Boolean),
      },
    },
  };
}
