import { useCallback } from 'react';

import clsx from 'clsx';
import {
  getProfileData,
  getProfileReadOnly,
  profileActions,
  updateProfileData,
} from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'shared/lib';
import { Button, Heading } from 'shared/ui';

import css from './ProfilePageHeader.m.css';
import { ProfilePageHeaderProps } from './ProfilePageHeader.types';

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const readOnly = useAppSelector(getProfileReadOnly);
  const authData = useAppSelector(getUserAuthData);
  const profileData = useAppSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={clsx(css.root, className)}>
      <Heading>{t('Profile')}</Heading>
      {canEdit && (
        <div className={css.edit}>
          {readOnly ? (
            <Button variant="outlined" onClick={onEdit}>
              {t('Edit')}
            </Button>
          ) : (
            <>
              <Button variant="outlined" color="error" onClick={onCancelEdit}>
                {t('Cancel')}
              </Button>
              <Button variant="outlined" onClick={onSave}>
                {t('Save')}
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};
