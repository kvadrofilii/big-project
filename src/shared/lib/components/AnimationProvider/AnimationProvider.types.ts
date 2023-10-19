export interface AnimationContextPayload {
  Gesture?: GestureType;
  Spring?: SpringType;
  isLoaded?: boolean;
}

export type SpringType = typeof import('@react-spring/web');
export type GestureType = typeof import('@use-gesture/react');
