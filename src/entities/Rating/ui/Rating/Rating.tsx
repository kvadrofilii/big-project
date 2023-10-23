import { memo, useCallback, useState } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import { Button, Card, Flex, Heading, Input, Modal, StarRating } from '@/shared/ui';

import css from './Rating.m.css';

import type { RatingProps } from './Rating.types';

export const Rating = memo(function Rating(props: RatingProps) {
  const { className, title, feedbackTitle, onCancel, onAccept } = props;
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(0);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (feedbackTitle) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [feedbackTitle, onAccept],
  );

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  return (
    <Card className={clsx(css.root, className)}>
      <Flex direction="column">
        <Heading variant="h3">{title}</Heading>
        <StarRating onSelect={onSelectStars} />
      </Flex>
      <Modal isOpened={isModalOpen}>
        <Flex direction="column" gap={2}>
          <Heading>{feedbackTitle}</Heading>
          <Input value={feedback} onChange={setFeedback} placeholder={t('Your feedback')} fullWidth />
          <Flex gap={2} justify="end" fullWidth>
            <Button variant="outlined" color="error" onClick={cancelHandle}>
              {t('Close')}
            </Button>
            <Button variant="contained" color="primary" onClick={acceptHandle}>
              {t('Send')}
            </Button>
          </Flex>
        </Flex>
      </Modal>
    </Card>
  );
});
