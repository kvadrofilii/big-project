import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '~/shared/ui';
import { Country } from '../../model/consts/country';
import type { CountrySelectProps } from './CountrySelect.types';

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
    <ListBox
      className={className}
      defaultValue={t('Specify the country')}
      label={t('Specify the country')}
      options={options}
      value={value}
      disabled={disabled}
      onChange={onChangeHandler}
      direction="top right"
    />
  );
});
