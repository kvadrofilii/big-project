export function imagesLoader() {
  return {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };
}
