import { FC, useEffect } from 'react';

import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { DynamicReducerLoader, ReducersList, useAppDispatch } from 'shared/lib';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC = () => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicReducerLoader reducers={reducers}>
      <div>
        <ProfileCard />
      </div>
    </DynamicReducerLoader>
  );
};

export default ProfilePage;
