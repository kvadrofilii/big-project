/**
 * Обновляет импорты в проекте добавляя alias '~/'
 * Запускается:
 * npx ts-node scripts/refactoring/updateImports.ts
 */

import { Project } from 'ts-morph';
import { isAbsolutePath } from '../utils/isAbsolutePath';

const project = new Project({
  // Read more: https://ts-morph.com/setup/
});

// добавляем файлы с исходным кодом, с которыми будем работать
project.addSourceFilesAtPaths(['src/**/*.ts', 'src/**/*.tsx']);

// получаем все ts(x)-файлы
const files = project.getSourceFiles();

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations();
  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();

    if (isAbsolutePath(value)) {
      importDeclaration.setModuleSpecifier(`~/${value}`);
    }
  });
});

project.save().then(() => console.log('Done!'));
