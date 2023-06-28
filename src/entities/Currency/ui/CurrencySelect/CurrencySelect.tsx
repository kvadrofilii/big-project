import { memo, useCallback, useMemo } from 'react';

import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui';

import { CurrencySelectProps } from './CurrencySelect.types';
import { Currency } from '../../model/types/currency.types';

export const CurrencySelect = memo(function CurrencySelect(props: CurrencySelectProps) {
  const { className, value, onChange, disabled } = props;
  const { t } = useTranslation();

  const options = useMemo(
    () => Object.entries(Currency).map((val) => ({ value: val[0], content: val[1] })),
    [],
  );

  const onChangeHandler = useCallback(
    (currency: string) => {
      onChange?.(currency as Currency);
    },
    [onChange],
  );

  return (
    <Select
      className={className}
      label={t('Specify the currency')}
      options={options}
      value={value}
      disabled={disabled}
      onChange={onChangeHandler}
    />
  );
});
