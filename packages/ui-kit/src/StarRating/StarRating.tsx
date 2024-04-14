import clsx from 'clsx';
import { memo, useState } from 'react';
import StarIcon from '../../assets/icons/star.svg';
import css from './StarRating.m.css';

type Props = {
  className?: string;
  onSelect?: (starCount: number) => void;
  size?: number;
  selectStars?: number;
};

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo(function StarRating(props: Props) {
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
