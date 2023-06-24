import { useCallback, useMemo, useState } from 'react';

import { UseHoverResult } from './useHover.types';

export const useHover = (): UseHoverResult => {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = useCallback(() => {
    setIsHover(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  return useMemo(
    () => [isHover, { onMouseEnter, onMouseLeave }],
    [isHover, onMouseEnter, onMouseLeave],
  );
};
