import { ResolveOptions } from 'webpack';

export function buildResolvers(): ResolveOptions {
  return {
   // Расширения, которые не нужно указывать при импорте
   extensions: ['.tsx', '.ts', '.js'],
  };
}
