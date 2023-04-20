import { FC } from 'react';

import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC = () => {
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div>{t('ProfilePage')}</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
