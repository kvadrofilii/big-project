import clsx from 'clsx';
import { useCallback, useEffect, type HTMLAttributes, type ReactNode } from 'react';
import { AnimationProvider, useAnimationLibs } from '~/shared/lib/components/AnimationProvider';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import css from './Drawer.m.css';

type Props = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children: ReactNode;
  isOpened?: boolean;
  onClose?: () => void;
};

const height = window.innerHeight - 100;

const DrawerContent = (props: Props) => {
  const { className, children, isOpened, onClose } = props;
  const { Spring, Gesture } = useAnimationLibs();
  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  useEffect(() => {
    if (isOpened) {
      openDrawer();
    }
  }, [api, isOpened, openDrawer]);

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    });
  };

  const bind = Gesture.useDrag(
    ({ last, velocity: [, vy], direction: [, dy], movement: [, my], cancel }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close();
        } else {
          openDrawer();
        }
      } else {
        api.start({ y: my, immediate: true });
      }
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    },
  );

  if (!isOpened) {
    return null;
  }

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  return (
    <Portal>
      <div
        className={clsx(css.root, className, {
          [css.opened]: isOpened,
        })}
      >
        <Overlay
          onClose={onClose}
          isOpened={isOpened}
        />
        <Spring.a.div
          className={css.content}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  );
};

const DrawerAsync = (props: Props) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) {
    return null;
  }

  return <DrawerContent {...props} />;
};

export const Drawer = (props: Props) => (
  <AnimationProvider>
    <DrawerAsync {...props} />
  </AnimationProvider>
);
