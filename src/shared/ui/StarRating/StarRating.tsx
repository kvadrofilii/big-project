import { memo, useState } from 'react';

import clsx from 'clsx';

import css from './StarRating.m.css';
import StarIcon from '../../assets/icons/star.svg';

import type { StarRatingProps } from './StarRating.types';

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo(function StarRating(props: StarRatingProps) {
  const { className, onSelect, size = 30, selectStars = 0 } = props;
  const [currentStarsCount, setCurrentStarsCount] = useState(selectStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectStars));

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div className={className}>
      {stars.map((starNumber) => (
        <StarIcon
          className={clsx(css.icon, {
            [css.hovered]: currentStarsCount >= starNumber,
            [css.selected]: isSelected,
          })}
          height={size}
          width={size}
          key={starNumber}
          onMouseLeave={onLeave}
          onMouseEnter={onHover(starNumber)}
          onClick={onClick(starNumber)}
        />
      ))}
    </div>
  );
});
