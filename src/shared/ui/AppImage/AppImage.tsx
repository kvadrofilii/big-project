import { memo, useLayoutEffect, useState } from 'react';
import type { ImgHTMLAttributes, ReactNode } from 'react';

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  fallback?: ReactNode;
  errorFallback?: ReactNode;
};

export const AppImage = memo(function AppImage(props: Props) {
  const { src, errorFallback, fallback, ...rest } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? '';
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
  }, [src]);

  if (isLoading && fallback) {
    return fallback;
  }

  if (hasError && errorFallback) {
    return errorFallback;
  }

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      src={src}
      {...rest}
    />
  );
});
