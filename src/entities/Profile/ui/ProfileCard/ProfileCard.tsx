import clsx from 'clsx';
import { CountrySelect } from 'entities/Country';
import { CurrencySelect } from 'entities/Currency';
import { useTranslation } from 'react-i18next';
import { Avatar, Flex, Heading, Input, Loader, Text } from 'shared/ui';

import css from './ProfileCard.m.css';
import { ProfileCardProps } from './ProfileCard.types';

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
        <Heading color="error" align="center">
          {t('An error occurred while loading the profile')}
        </Heading>
        <Text color="error" align="center">
          {t('Try refreshing the page')}
        </Text>
      </div>
    );
  }

  return (
    <div className={clsx(css.root, className)}>
      <Flex direction="column" gap={2} align="center">
        {data?.avatar && (
          <Flex className={css['avatar-wrapper']} justify="center">
            <Avatar src={data?.avatar} />
          </Flex>
        )}
        <Input
          value={data?.firstName ?? ''}
          placeholder={t('Your-first-name')}
          className={css.input}
          readOnly={readOnly}
          onChange={onChangeFirstName}
        />
        <Input
          value={data?.lastName ?? ''}
          placeholder={t('Your-last-name')}
          className={css.input}
          readOnly={readOnly}
          onChange={onChangeLastName}
        />
        <Input
          value={data?.age ?? ''}
          placeholder={t('Your-age')}
          className={css.input}
          readOnly={readOnly}
          onChange={onChangeAge}
          type="number"
        />
        <Input
          value={data?.city ?? ''}
          placeholder={t('Your-city')}
          className={css.input}
          readOnly={readOnly}
          onChange={onChangeCity}
        />
        <Input
          value={data?.username ?? ''}
          placeholder={t('Enter the user name')}
          className={css.input}
          readOnly={readOnly}
          onChange={onChangeUsername}
        />
        <Input
          value={data?.avatar ?? ''}
          placeholder={t('Enter the link to the avatar')}
          className={css.input}
          readOnly={readOnly}
          onChange={onChangeAvatar}
        />
        <CurrencySelect value={data?.currency} className={css.input} disabled={readOnly} onChange={onChangeCurrency} />
        <CountrySelect value={data?.country} className={css.input} disabled={readOnly} onChange={onChangeCountry} />
      </Flex>
    </div>
  );
};
