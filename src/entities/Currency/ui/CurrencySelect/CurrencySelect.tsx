import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui';

import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  disabled?: boolean;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(function CurrencySelect(props: CurrencySelectProps) {
  const { className, value, onChange, disabled } = props;

  const { t } = useTranslation();

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
