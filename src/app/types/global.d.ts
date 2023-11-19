/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.css' {
  const css: {
    [className: string]: string;
  };
  export default css;
}

declare module '*.scss' {
  const scss: {
    [className: string]: string;
  };
  export default scss;
}

declare module '*.svg' {
  const svg: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
  export default svg;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.webp';
declare module '*.avif';
declare module '*.ico';
declare module '*.bmp';

// eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
declare const __IS_DEV__: boolean;
// eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
declare const __API__: string;
// eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
declare const __PROJECT__: 'storybook' | 'frontend' | 'jest';

// Тип который делает все поля необязательными (для тестов и storybook)
type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
