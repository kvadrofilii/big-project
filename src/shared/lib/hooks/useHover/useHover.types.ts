type UseHoverBind = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export type UseHoverResult = [boolean, UseHoverBind];
