export type BuildMode = 'production' | 'development';

export type BuildEnv = {
  mode: BuildMode;
  port: number;
  open: boolean;
  analyze: boolean;
  apiUrl: string;
};

export type BuildPaths = {
  entry: string;
  build: string;
  html: string;
  src: string;
  locales: string;
  buildLocales: string;
};

export type BuildOptions = {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  open: boolean;
  analyze: boolean;
  apiUrl: string;
  project: 'storybook' | 'frontend' | 'jest';
};
