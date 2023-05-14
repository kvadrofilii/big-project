import { memo, useCallback, useMemo } from 'react';

import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui';

import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  disabled?: boolean;
}

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
