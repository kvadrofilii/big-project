export function buildImagesLoader() {
  return {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };
}
