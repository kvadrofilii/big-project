import type { CSSProperties, HTMLAttributes } from 'react';

export type FlexProps = HTMLAttributes<HTMLDivElement> & {
  align?: CSSProperties['alignItems'];
  basis?: CSSProperties['flexBasis'];
  direction?: CSSProperties['flexDirection'];
  fullWidth?: boolean;
  gap?: CSSProperties['gap'];
  grow?: CSSProperties['flexGrow'];
  justify?: CSSProperties['justifyContent'];
  shrink?: CSSProperties['flexShrink'];
  wrap?: CSSProperties['flexWrap'];
};
