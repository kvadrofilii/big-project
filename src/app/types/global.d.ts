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
