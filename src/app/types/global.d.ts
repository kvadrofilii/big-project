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

declare const __IS_DEV__: boolean;
