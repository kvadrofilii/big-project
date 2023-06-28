import { memo, useCallback, useMemo } from 'react';

import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui';

import { CountrySelectProps } from './CountrySelect.types';
import { Country } from '../../model/types/country.types';

export const CountrySelect = memo(function CountrySelect(props: CountrySelectProps) {
  const { className, value, onChange, disabled } = props;
  const { t } = useTranslation();

  const options = useMemo(
    () => Object.entries(Country).map((val) => ({ value: val[0], content: val[1] })),
    [],
  );

  const onChangeHandler = useCallback(
    (country: string) => {
      onChange?.(country as Country);
    },
    [onChange],
  );

  return (
    <Select
      className={className}
      label={t('Specify the country')}
      options={options}
      value={value}
      disabled={disabled}
      onChange={onChangeHandler}
    />
  );
});
