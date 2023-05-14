import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui';

import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  disabled?: boolean;
}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.America, content: Country.America },
];

export const CountrySelect = memo(function CountrySelect(props: CountrySelectProps) {
  const { className, value, onChange, disabled } = props;

  const { t } = useTranslation();

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
