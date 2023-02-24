import { ResolveOptions } from 'webpack';

import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    // Расширения, которые не нужно указывать при импорте
    extensions: ['.tsx', '.ts', '.js'],
    // Абсолютные пути импортов в приоритете
    preferAbsolute: true,
    // Папки откуда будут абсолютные импорты
    modules: [options.paths.src, 'node_modules'],
    // Имя главного файла в папке
    mainFiles: ['index'],
    // Алиасы для абсолютных путей
    // Пустой объект означает абсолютные пути импорта без "@" в начале пути
    alias: {},
  };
}