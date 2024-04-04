import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Card, Flex, Heading, Input, Modal, StarRating } from '@/shared/ui';
import type { RatingCardProps } from './RatingCard.types';

export const RatingCard = memo(function RatingCard(props: RatingCardProps) {
  const { className, title, feedbackTitle, onCancel, onAccept, rate = 0 } = props;
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
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
    <Card className={className}>
      <Flex
        direction="column"
        align="center"
      >
        <Heading variant="h3">{starsCount ? t('Thanks for the rating') : title}</Heading>
        <StarRating
          onSelect={onSelectStars}
          selectStars={starsCount}
        />
      </Flex>
      <Modal isOpened={isModalOpen}>
        <Flex
          direction="column"
          gap={2}
        >
          <Heading>{feedbackTitle}</Heading>
          <Input
            value={feedback}
            onChange={setFeedback}
            placeholder={t('Your feedback')}
            fullWidth
          />
          <Flex
            gap={2}
            justify="end"
            fullWidth
          >
            <Button
              variant="outlined"
              color="error"
              onClick={cancelHandle}
            >
              {t('Close')}
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={acceptHandle}
            >
              {t('Send')}
            </Button>
          </Flex>
        </Flex>
      </Modal>
    </Card>
  );
});
