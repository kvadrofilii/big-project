import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import postcssModules from 'postcss-modules';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

const input = 'src/index.ts';

const external = ['@headlessui/react', 'react', 'react-dom', 'react-router-dom'];

const commonPlugins = (tsconfig) => [
  resolve(),
  commonjs(),
  typescript({
    tsconfig,
  }),
  babel({
    presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
  }),
  terser(),
];

const cjsPlugin = (type) => [
  ...commonPlugins(`./tsconfig.${type}.json`),
  postcss({
    extract: true,
    plugins: [
      postcssModules({
        minimize: true,
      }),
    ],
  }),
];

const esmPlugin = (type) => [
  ...commonPlugins(`./tsconfig.${type}.json`),
  postcss({
    extract: false,
    plugins: [
      postcssModules({
        minimize: true,
      }),
    ],
  }),
];

const commonConfig = (type) => {
  return {
    input,
    output: {
      file: `dist/${type}/index.js`,
      format: type,
      export: 'named',
      sourcemap: true,
      plugins: [terser()],
    },
    external,
  };
};

const cjsConfig = {
  ...commonConfig('cjs'),
  plugins: cjsPlugin('cjs'),
};

const esmConfig = {
  ...commonConfig('esm'),
  plugins: esmPlugin('esm'),
};

export default [cjsConfig, esmConfig];
