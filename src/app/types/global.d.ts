declare module '*.m.css' {
  const css: {
    [key: string]: string;
  };
  export default css;
}

declare module '*.scss' {
  const styles: {
    [key: string]: string;
  };
  export default styles;
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
