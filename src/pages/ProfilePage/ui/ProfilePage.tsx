import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Text } from '@/shared/ui';
import { Page } from '@/widgets/Page';
import { EditableProfileCard } from '../../../features/EditableProfileCard';

const ProfilePage: FC = () => {
  const { t } = useTranslation('profile');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Text>{t('Profile not found')}</Text>;
  }

  return (
    <Page data-testid="ProfilePage">
      <EditableProfileCard id={id} />
    </Page>
  );
};

export default ProfilePage;
