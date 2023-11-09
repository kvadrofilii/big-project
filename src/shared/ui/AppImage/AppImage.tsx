import { memo, useLayoutEffect, useState } from 'react';

import type { AppImageProps } from './AppImage.types';

export const AppImage = memo(function AppImage(props: AppImageProps) {
  const { className, src, alt = 'image', errorFallback, fallback, ...rest } = props;
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

  return <img className={className} src={src} alt={alt} {...rest} />;
});
