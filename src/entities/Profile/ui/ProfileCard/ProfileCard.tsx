import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { Avatar, Flex, Heading, Input, Loader, Text } from '@/shared/ui';
import type { ProfileCardProps } from './ProfileCard.types';
import css from './ProfileCard.m.css';

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readOnly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={clsx(css.root, css.loading, className)}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={clsx(css.root, css.error, className)}>
        <Heading
          color="error"
          align="center"
        >
          {t('An error occurred while loading the profile')}
        </Heading>
        <Text
          color="error"
          align="center"
        >
          {t('Try refreshing the page')}
        </Text>
      </div>
    );
  }

  return (
    <div className={clsx(css.root, className)}>
      <Flex
        direction="column"
        gap={2}
      >
        {data?.avatar && (
          <Flex
            className={css['avatar-wrapper']}
            justify="center"
          >
            <Avatar src={data?.avatar} />
          </Flex>
        )}
        <Input
          value={data?.firstName ?? ''}
          placeholder={t('Your-first-name')}
          readOnly={readOnly}
          onChange={onChangeFirstName}
          data-testid="ProfileCard.firstName"
        />
        <Input
          value={data?.lastName ?? ''}
          placeholder={t('Your-last-name')}
          readOnly={readOnly}
          onChange={onChangeLastName}
          data-testid="ProfileCard.lastName"
        />
        <Input
          value={data?.age ?? ''}
          placeholder={t('Your-age')}
          readOnly={readOnly}
          onChange={onChangeAge}
          type="number"
        />
        <Input
          value={data?.city ?? ''}
          placeholder={t('Your-city')}
          readOnly={readOnly}
          onChange={onChangeCity}
        />
        <Input
          value={data?.username ?? ''}
          placeholder={t('Enter the user name')}
          readOnly={readOnly}
          onChange={onChangeUsername}
        />
        <Input
          value={data?.avatar ?? ''}
          placeholder={t('Enter the link to the avatar')}
          readOnly={readOnly}
          onChange={onChangeAvatar}
        />
        <CurrencySelect
          value={data?.currency}
          disabled={readOnly}
          onChange={onChangeCurrency}
        />
        <CountrySelect
          value={data?.country}
          disabled={readOnly}
          onChange={onChangeCountry}
        />
      </Flex>
    </div>
  );
};
