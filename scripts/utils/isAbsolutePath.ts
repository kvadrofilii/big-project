export const isAbsolutePath = (value: string): boolean => {
  const layers = ['app', 'entities', 'features', 'pages', 'shared', 'widgets'];
  return layers.some((layer) => value.startsWith(layer));
};
