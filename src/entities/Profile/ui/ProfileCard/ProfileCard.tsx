import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'shared/lib';
import { Button, Heading, Input } from 'shared/ui';

import css from './ProfileCard.m.css';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const data = useAppSelector(getProfileData);
  const isLoading = useAppSelector(getProfileIsLoading);
  const error = useAppSelector(getProfileError);

  return (
    <div className={clsx(css.root, className)}>
      <div className={css.header}>
        <Heading>{t('Profile')}</Heading>
        <Button className={css.edit} variant="outlined">
          {t('Edit')}
        </Button>
      </div>
      <div className={css.data}>
        <Input value={data?.firstname} placeholder={t('Your-first-name')} className={css.input} />
        <Input value={data?.lastname} placeholder={t('Your-last-name')} className={css.input} />
      </div>
    </div>
  );
};
