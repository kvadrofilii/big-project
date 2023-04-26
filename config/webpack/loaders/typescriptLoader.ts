export function typescriptLoader() {
  return {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
}
